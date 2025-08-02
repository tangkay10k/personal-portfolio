import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import styles from "./timeline.module.css";

const TimelineItem = ({ item, index }) => (
  <motion.div
    className={styles.timelineItem}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
  >
    <div className={styles.marker}>
      <motion.span
        className={styles.dot}
        whileHover={{
          scale: 1.2,
          backgroundColor: "var(--timeline-accent-color)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </div>
    <div className={`${item.divider ? styles.specialCard : styles.card}`}>
      {item.date && <span className={styles.date}>{item.date}</span>}
      {item.title && <h3 className={styles.title}>{item.title}</h3>}
      {item.company && <h4 className={styles.company}>{item.company}</h4>}
      {item.description && (
        <p className={styles.description}>{item.description}</p>
      )}
    </div>
  </motion.div>
);

const Timeline = forwardRef(({ events = [], onScroll }, ref) => {
  return (
    <div
      ref={ref}
      className={`${styles.timeline} ${onScroll ? styles.blur : ""}`}
    >
      <div className={styles.firstDot} />
      <div className={styles.line} />
      {events.map((item, idx) => (
        <TimelineItem key={item.id ?? idx} item={item} index={idx} />
      ))}
    </div>
  );
});

export default Timeline;