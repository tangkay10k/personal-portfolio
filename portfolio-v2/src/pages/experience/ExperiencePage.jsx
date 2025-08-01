import styles from "./experience.module.css";
import React, { useState } from "react";
import useForceRerender from "@/hooks/useForceRerender.js";
import MultiLanyard from "@/components/imported/Lanyard/Multilanyard.jsx";
import Timeline from "@/components/timeline/Timeline.jsx";

const experiences = [
  {
    id: 1,
    date: "Jan 2020 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description:
      "Lead development of responsive web applications using React and TypeScript. Optimized application performance resulting in 40% faster load times.",
    technologies: ["React", "TypeScript", "Redux", "Webpack"],
  },
  {
    id: 2,
    date: "Jun 2017 - Dec 2019",
    title: "UI/UX Developer",
    company: "Creative Solutions Ltd.",
    description:
      "Designed and implemented user interfaces for enterprise applications. Collaborated with design teams to create intuitive user experiences.",
    technologies: ["JavaScript", "CSS", "Figma", "Vue.js"],
  },
  {
    id: 3,
    date: "Mar 2015 - May 2017",
    title: "Junior Web Developer",
    company: "Digital Startups Co.",
    description:
      "Developed and maintained company websites and web applications. Participated in agile development processes.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    id: 3,
    date: "Mar 2015 - May 2017",
    title: "Junior Web Developer",
    company: "Digital Startups Co.",
    description:
      "Developed and maintained company websites and web applications. Participated in agile development processes.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    id: 3,
    date: "Mar 2015 - May 2017",
    title: "Junior Web Developer",
    company: "Digital Startups Co.",
    description:
      "Developed and maintained company websites and web applications. Participated in agile development processes.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export default function ExperiencePage() {
  const [cameraDistance, setCameraDistance] = useState(20);
  const [stopGravity, setStopGravity] = useState(false);
  const [key, forceRerender] = useForceRerender();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.experienceContainer}>
        <h1 className={styles.title}>Work Experience</h1>
        <Timeline events={experiences} />
      </div>
      <div className={styles.lanyardContainer}>
        <MultiLanyard fov={cameraDistance} />
      </div>
    </div>
  );
}