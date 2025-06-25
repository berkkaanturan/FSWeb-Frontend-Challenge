import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import content from "./data/content.json";
import Switches from "./components/switches/Switches";

function App() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return false;
  });

  const langData = content[lang];

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div
      className={
        dark ? "dark bg-[#252128] text-white" : "bg-white text-gray-900"
      }
    >
      <div className="max-w-7xl mx-auto">
        <Switches
          data={{ lang, setLang, dark, setDark }}
          switches={langData.switches}
        />
        <Header data={langData.header} />
        <Hero data={langData.hero} />
        <Skills data={langData.skills} />
        <Profile data={langData.profile} />
        <Projects data={langData.projects} />
      </div>
      <Footer data={langData.footer} />
    </div>
  );
}

export default App;
