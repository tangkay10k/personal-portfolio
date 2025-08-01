import DotGrid from "../../components/imported/dot-grid/DotGrid.jsx";
import ProfileCard from "../../components/imported/profile-card/ProfileCard.jsx";
import styles from "./home.module.css";
import SplitText from "@/components/imported/text/SplitText.jsx";
import ShinyText from "@/components/imported/text/ShinyText.jsx";
import { Delayed } from "@/components/delay/Delayed.jsx";
import Button from "@/components/button/Button.jsx";
import { useNavigate } from "react-router-dom";

const HEADING_TEXT_DURATION = 1.1 * 1000; // ms

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <WelcomeText />
        <Delayed delay={HEADING_TEXT_DURATION}>
          <section className={styles.cardContainer}>
            <ProfileCard />
          </section>
        </Delayed>
      </div>
      <DotGrid className={styles.background} />
    </div>
  );
}

function WelcomeText() {
  const navigate = useNavigate();
  return (
    <section className={styles.introduction}>
      <SplitText text="Hi, I'm Kay" />
      <Delayed delay={HEADING_TEXT_DURATION}>
        <ShinyText text="Software Engineering Student" />
        <section className={styles.buttonContainer}>
          <Button
            className={styles.learnBtn}
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
          <Button onClick={() => navigate("/contact")}>Contact Me</Button>
        </section>
      </Delayed>
    </section>
  );
}