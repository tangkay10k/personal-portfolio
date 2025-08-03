import styles from "./experience.module.css";
import React, { useRef } from "react";
import MultiLanyard from "@/components/imported/lanyard/Multilanyard.jsx";
import Timeline from "@/components/timeline/Timeline.jsx";
import SplitText from "@/components/imported/text/SplitText.jsx";
import ShinyText from "@/components/imported/text/ShinyText.jsx";
import { Delayed } from "@/components/delay/Delayed.jsx";
import { useHasScrolled } from "@/hooks/useHasScrolled.js";
import { EXPERIENCE } from "@/pages/experience/experience-data.js";
import Aurora from "@/components/imported/aurora/Aurora.jsx";

export default function ExperiencePage() {
  const timelineRef = useRef(null);
  const hasScrolled = useHasScrolled(timelineRef);

  return (
    <div className={styles.pageContainer}>
      <Aurora />

      <div className={styles.experienceContainer}>
        <SplitText text={"Work Experience"} />

        <Delayed delay={1000}>
          <section
            className={styles.scrollHint}
            style={{ opacity: hasScrolled ? 0 : 1 }}
          >
            <ShinyText text={"Scroll Down"} className={styles.scrollHint} />
          </section>
          <section className={styles.timelineWrapper}>
            <Timeline
              ref={timelineRef}
              events={EXPERIENCE}
              onScroll={hasScrolled}
            />
          </section>
        </Delayed>
      </div>
      <div className={styles.lanyardContainer}>
        <MultiLanyard />
      </div>
    </div>
  );
}