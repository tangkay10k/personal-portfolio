import DotGrid from "../../components/imported/dot-grid/DotGrid.jsx";
import ProfileCard from "../../components/imported/profile-card/ProfileCard.jsx";
import styles from "./home.module.css"


export default function HomePage() {
  return <div className={styles.homeContainer}>
    <DotGrid
      dotSize={5}
      gap={35}
      baseColor="#271E37"
      activeColor="#5227FF"
      proximity={120}
      shockRadius={250}
      shockStrength={5}
      resistance={750}
      returnDuration={1.5}
    />
    <div className={styles.cardContainer}>
      <ProfileCard/>
    </div>
  </div>
}