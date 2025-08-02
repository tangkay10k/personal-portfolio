/* eslint-disable react/no-unknown-property */
"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

import * as THREE from "three";
import "./Lanyard.css";

extend({ MeshLineGeometry, MeshLineMaterial });

/**
 * MultiLanyard: renders multiple lanyard cards, each with its own physics settings.
 * Each entry in `lanyards` can include a `physics` object:
 *   angularDamping, linearDamping, initialAngVel ({x,y,z}), sway ({frequency, magnitude}).
 */
export default function MultiLanyard({
  lanyards = [
    {
      position: [1, 4, 30],
      model: "./assets/lanyard/canva.glb",
      texture: "./assets/lanyard/canva-lanyard.png",
      physics: {
        angularDamping: 0.1,
        linearDamping: 0.1,
        initialAngVel: { x: 0, y: 1.5, z: 0 },
        sway: { frequency: 0.0015, magnitude: 0.0002 },
      },
    },
    {
      position: [2.5, 4, 30],
      model: "./assets/lanyard/nzpmc.glb",
      texture: "./assets/lanyard/nzpmc-lanyard.png",
      physics: {
        angularDamping: 0.4,
        linearDamping: 0.3,
        initialAngVel: { x: 0, y: 0.8, z: 0 },
        sway: { frequency: 0.0002, magnitude: 0.0001 },
      },
    },
    {
      position: [4, 4, 30],
      model: "./assets/lanyard/uoa.glb",
      texture: "./assets/lanyard/uoa-lanyard.png",
      physics: {
        angularDamping: 0.2,
        linearDamping: 0.2,
        initialAngVel: { x: 0, y: 2, z: 0 },
        sway: { frequency: 0.00012, magnitude: 0.0005 },
      },
    },
  ],
  fov = 15,
  transparent = true,
  gravity = [-0.8, -9.81, 0.2],
}) {
  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: [0, 0, 50], fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics
          gravity={gravity}
          timeStep={1 / 60}
          numSolverIterations={8}
          maxCcdSubsteps={4}
          predictionDistance={0.005}
        >
          {lanyards.map((cfg, idx) => (
            <Band
              key={idx}
              initialPosition={cfg.position}
              modelPath={cfg.model}
              texturePath={cfg.texture}
              physics={cfg.physics}
            />
          ))}
        </Physics>

        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({
  initialPosition = [0, 4, 30],
  modelPath,
  texturePath,
  maxSpeed = 10,
  minSpeed = 0,
  physics = {},
}) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const {
    angularDamping = 0.2,
    linearDamping = 0.2,
    initialAngVel = { x: 0, y: 1, z: 0 },
    sway = { frequency: 0.5, magnitude: 0.02 },
  } = physics;

  const { nodes, materials } = useGLTF(modelPath);
  const texture = useTexture(texturePath);

  const vec = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    // type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping,
    linearDamping,
  };

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );
  const [dragged, setDragged] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isSmall, setIsSmall] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 1024,
  );

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (card.current) {
      card.current.setAngvel(initialAngVel);
    }
  }, [initialAngVel]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.05).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((r) => r.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach((r) => {
        if (!r.current.lerped)
          r.current.lerped = new THREE.Vector3().copy(r.current.translation());
        const d = Math.max(
          0.1,
          Math.min(1, r.current.lerped.distanceTo(r.current.translation())),
        );
        r.current.lerped.lerp(
          r.current.translation(),
          delta * (minSpeed + d * (maxSpeed - minSpeed)),
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));

      // perpetual sway
      const t = state.clock.getElapsedTime();
      const torque = Math.sin(t * sway.frequency) * sway.magnitude;
      card.current.applyTorqueImpulse({ x: 0, y: torque * delta, z: 0 }, true);
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={initialPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody ref={j1} {...segmentProps}>
          <BallCollider args={[0.15]} contactSkin={0.001} />
        </RigidBody>
        <RigidBody ref={j2} {...segmentProps}>
          <BallCollider args={[0.15]} contactSkin={0.001} />
        </RigidBody>
        <RigidBody ref={j3} {...segmentProps}>
          <BallCollider args={[0.15]} contactSkin={0.001} />
        </RigidBody>
        <RigidBody
          ref={card}
          {...segmentProps} // spread first
          ccd
          contactSkin={0.001}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerUp={(e) => {
              e.target.releasePointerCapture(e.pointerId);
              setDragged(false);
            }}
            onPointerDown={(e) => {
              e.target.setPointerCapture(e.pointerId);
              setDragged(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation())),
              );
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
