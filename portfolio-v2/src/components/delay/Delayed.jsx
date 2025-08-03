import { useEffect, useState } from "react";
import styles from "./delayed.module.css";

function useDelayedReady(delay = 0, onReady) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
      onReady?.();
    }, delay);
    return () => clearTimeout(t);
  }, [delay, onReady]);
  return ready;
}

export function Delayed({
  delay = 0,
  children,
  className = "",
  customIn,
  customOut,
  onReadyCallback,
  waitForReady = false,
}) {
  const ready = useDelayedReady(delay, onReadyCallback);
  const animationClass =
    customIn && customOut
      ? ready
        ? customIn
        : customOut
      : ready
        ? styles.fadeIn
        : styles.fadeOut;

  // only render children if not waiting, or once ready
  const shouldRender = !waitForReady || ready;

  return (
    <div className={`${animationClass} ${className}`}>
      {shouldRender && children}
    </div>
  );
}
