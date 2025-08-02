import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function AnimationWrapper({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
