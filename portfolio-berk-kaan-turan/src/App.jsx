import { AppProvider, useApp } from "./context/AppContext.jsx";
import Switches from "./components/switches/Switches";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import "./App.css";

function AppContent() {
  const { lang, setLang, dark, setDark, langData } = useApp();

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

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
