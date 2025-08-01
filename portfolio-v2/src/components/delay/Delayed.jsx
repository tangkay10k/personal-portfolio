import { useEffect, useState } from "react";
import styles from "./delayed.module.css";

export function Delayed({ delay = 0, children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={ready ? `${styles.fadeIn}` : `${styles.fadeOut}`}>
      {children}
    </div>
  );
}