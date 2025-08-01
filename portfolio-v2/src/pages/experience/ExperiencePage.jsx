import styles from "./experience.module.css";
import { useState } from "react";
import useForceRerender from "@/hooks/useForceRerender.js";
import MultiLanyard from "@/components/imported/Lanyard/Multilanyard.jsx";

export default function ExperiencePage() {
  const [cameraDistance, setCameraDistance] = useState(20);
  const [stopGravity, setStopGravity] = useState(false);
  const [key, forceRerender] = useForceRerender();
  return (
    <div className={styles.pageContainer}>
      <MultiLanyard fov={cameraDistance} />
    </div>
  );
}