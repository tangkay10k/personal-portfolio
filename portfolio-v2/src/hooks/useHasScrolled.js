import { useCallback, useEffect, useState } from "react";

/**
 * Hook: tells you if the given container has been scrolled.
 *
 * @param {React.RefObject<HTMLElement>} ref  — ref to the scrollable container
 * @returns {boolean}                         — true if scrollTop > 0
 */
export function useHasScrolled(ref) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const checkScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setHasScrolled(el.scrollTop > 0);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frameId = null;
    const onScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(() => {
          checkScroll();
          frameId = null;
        });
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // initialize
    checkScroll();

    return () => {
      el.removeEventListener("scroll", onScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [ref, checkScroll]);

  return hasScrolled;
}
