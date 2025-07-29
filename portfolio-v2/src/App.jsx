import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/home/HomePage.jsx";
import NavBar from "@/components/nav/NavBar.jsx";
import styles from "./app.module.css";
import ExperiencePage from "@/pages/experience/ExperiencePage.jsx";

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </div>
  );
}

export default App;