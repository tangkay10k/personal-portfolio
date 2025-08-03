import styles from "./project.module.css";
import CardSwap, { Card } from "@/components/imported/card-swap/CardSwap.jsx";
import { useState } from "react";
import { motion } from "framer-motion";
import SplitText from "@/components/imported/text/SplitText.jsx";
import TextType from "@/components/imported/text/TextType.jsx";
import { Delayed } from "@/components/delay/Delayed.jsx";
import Button from "@/components/button/Button.jsx";
import { PROJECTS } from "@/pages/projects/projects-data.js";
import { handleOpen } from "@/common/utils.js";

const DESC_DELAY = 3000;

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectOnDisplay = PROJECTS[currentIndex];

  const showNext = () => {
    setCurrentIndex((i) => (i + 1) % PROJECTS.length);
  };

  return (
    <div className={styles.projectPageContainer}>
      <div className={styles.cardSwapContainer}>
        <section className={styles.cardBody}>
          <section className={styles.cardText}>
            <SplitText
              text={"Some of my projects"}
              className={styles.heading}
            />
            <Delayed delay={DESC_DELAY}>
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

          <Delayed delay={DESC_DELAY}>
            <section>
              <Button
                className={styles.githubBtn}
                onClick={() => {
                  const url = projectOnDisplay?.githubUrl
                    ? projectOnDisplay.githubUrl
                    : projectOnDisplay.demoUrl;
                  handleOpen();
                }}
              >
                {projectOnDisplay.githubUrl ? "Visit Github" : "View Demo"}
              </Button>
              <Button onClick={showNext}>View Next</Button>
            </section>
          </Delayed>
        </section>

        <Delayed delay={DESC_DELAY}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={10000}
            pauseOnHover={true}
          >
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

      <Delayed
        delay={DESC_DELAY}
        customIn={styles.flyInFromBottom}
        customOut={styles.flyHidden}
      >
        <ShowCase>
          <img
            src={projectOnDisplay.staticImageUrl}
            alt={projectOnDisplay.title}
          />
        </ShowCase>
      </Delayed>
    </div>
  );
}

function ShowCase({ curImageColour, children }) {
  return (
    <motion.div
      className={styles.showCaseContainer}
      style={{ color: curImageColour }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className={styles.showCaseCard}>{children}</div>
    </motion.div>
  );
}