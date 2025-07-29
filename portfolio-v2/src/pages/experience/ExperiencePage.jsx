import styles from "./experience.module.css";
import { useState } from "react";
import useForceRerender from "@/hooks/useForceRerender.js";
import Lanyard from "@/components/imported/Components/Lanyard/Lanyard.jsx";

export default function ExperiencePage() {
  const [cameraDistance, setCameraDistance] = useState(10);
  const [stopGravity, setStopGravity] = useState(false);
  const [key, forceRerender] = useForceRerender();
  return (
    <div className={styles.pageContainer}>
      <Lanyard
        key={key}
        position={[0, 0, cameraDistance]}
        gravity={[0, -40, 0]}
      />
    </div>
  );
}