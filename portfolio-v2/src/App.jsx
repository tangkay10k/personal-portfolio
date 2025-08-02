import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/home/HomePage.jsx";
import NavBar from "@/components/nav/NavBar.jsx";
import "./App.css";
import ExperiencePage from "@/pages/experience/ExperiencePage.jsx";
import AboutPage from "@/pages/about/About.jsx";
import ContactPage from "@/pages/contact/Contact.jsx";
import { Toaster } from "sonner";
import ProjectsPage from "@/pages/projects/project-page.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Toaster
        toastOptions={{
          style: {
            background: "var(--accent-dark)",
            color: "white",
            border: "0.01rem solid var(--accent)",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
