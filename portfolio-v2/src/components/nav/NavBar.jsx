import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const tabs = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <nav className={styles.navBar}>
      <span />
      <section>
        {tabs.map((tab) => {
          const path = tab === "Home" ? "/" : `/${tab.toLowerCase()}`;
          return (
            <NavLink
              key={tab}
              to={path}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              {tab}
            </NavLink>
          );
        })}
      </section>
    </nav>
  );
}
