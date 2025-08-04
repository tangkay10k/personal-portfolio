import styles from "./project.module.css";
import CardSwap, { Card } from "@/components/imported/card-swap/CardSwap.jsx";
import { useState } from "react";
import SplitText from "@/components/imported/text/SplitText.jsx";
import TextType from "@/components/imported/text/TextType.jsx";
import { Delayed } from "@/components/delay/Delayed.jsx";
import Button from "@/components/button/Button.jsx";
import { PROJECTS } from "@/pages/projects/projects-data.js";
import { handleOpen } from "@/common/utils.js";
import { motion } from "framer-motion";

const PROJECTS_DELAY = 3000;

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectOnDisplay = PROJECTS[currentIndex];

  return (
    <div className={styles.projectPageContainer}>
      <div className={styles.aboutContainer}>
        <ShowCaseAbout
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          projectOnDisplay={projectOnDisplay}
        />

        <Delayed
          delay={PROJECTS_DELAY}
          customIn={styles.flyInFromBottom}
          customOut={styles.flyHidden}
        >
          <ShowCase projectOnDisplay={projectOnDisplay} />
        </Delayed>
      </div>

      <div className={styles.cardSwapContainer}>
        <Delayed delay={PROJECTS_DELAY}>
          <CardSwap pauseOnHover={true} skewAmount={3}>
            {PROJECTS.map((project) => (
              <Card customClass={styles.projectDisplayCard}>
                <h1>{project.title}</h1>
                <hr />
                <div>
                  <img src={project.animatedImageUrl} alt={project.title} />
                </div>
              </Card>
            ))}
          </CardSwap>
        </Delayed>
      </div>
    </div>
  );
}

function ShowCaseAbout({ currentIndex, setCurrentIndex, projectOnDisplay }) {
  const showNext = () => {
    setCurrentIndex((i) => (i + 1) % PROJECTS.length);
  };

  const handleDemoClick = () => {
    const url = projectOnDisplay?.githubUrl
      ? projectOnDisplay.githubUrl
      : projectOnDisplay.demoUrl;
    handleOpen(url);
  };
  return (
    <section className={styles.cardBody}>
      <section className={styles.cardText}>
        <SplitText text={"Some of my projects"} className={styles.heading} />
        <Delayed delay={PROJECTS_DELAY} waitForReady>
          <h1 className={styles.projectName}>{projectOnDisplay.title}</h1>
          <TextType
            key={currentIndex}
            loop={false}
            startOnVisible={true}
            className={styles.projectDesc}
            text={projectOnDisplay.desc}
          />
        </Delayed>
      </section>

      <Delayed delay={PROJECTS_DELAY}>
        <section>
          <Button className={styles.githubBtn} onClick={handleDemoClick}>
            {projectOnDisplay.githubUrl ? "Visit Github" : "View Demo"}
          </Button>
          <Button onClick={showNext}>View Next</Button>
        </section>
      </Delayed>
      <div className={styles.skeleton} />
    </section>
  );
}

function ShowCase({ projectOnDisplay }) {
  return (
    <div className={styles.showCaseContainer}>
      <div className={styles.showCaseCard}>
        <motion.img
          key={projectOnDisplay.staticImageUrl}
          src={projectOnDisplay.staticImageUrl}
          alt={projectOnDisplay.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}
