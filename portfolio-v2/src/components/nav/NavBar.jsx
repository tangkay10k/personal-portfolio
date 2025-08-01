import styles from "./nav.module.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const tabs = ["Home", "About", "Experience", "Projects", "Contact"];
  const navigate = useNavigate();

  function handleNavigate(tab) {
    const location = tab === "Home" ? "/" : tab;
    navigate(location);
  }

  return (
    <nav className={styles.navBar}>
      <img src={"/assets/favicon.png"} alt={"logo"}></img>
      <section>
        {tabs.map((tab) => (
          <a onClick={() => handleNavigate(tab)}>{tab}</a>
        ))}
      </section>
    </nav>
  );
}