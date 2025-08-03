import { useEffect, useState } from "react";
import styles from "./delayed.module.css";

export function Delayed({
  delay = 0,
  children,
  className = null,
  customIn,
  customOut,
  onReadyCallback,
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
      onReadyCallback?.();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const animationClass =
    customIn && customOut
      ? ready
        ? customIn
        : customOut
      : ready
        ? styles.fadeIn
        : styles.fadeOut;

  return <div className={`${animationClass} ${className}`}>{children}</div>;
}