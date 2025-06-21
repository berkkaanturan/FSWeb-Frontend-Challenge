import { useState } from 'react'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/Hero'
import Profile from './components/profile/Profile'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import content from './data/content.json'
import Switches from './components/switches/Switches'

function App() {
  const [lang, setLang] = useState('en')
  const [dark, setDark] = useState(false)
  const langData = content[lang]

  return (
    <div className={dark ? 'dark bg-[#252128] min-h-screen text-white' : 'bg-white min-h-screen text-gray-900'}>
      {/* Switch bar üstte, header ile aynı hizada */}
      <Switches data={{ lang, setLang, dark, setDark }} />
      <Header data={langData.header} />
      <Hero data={langData.hero} />
      <Skills data={langData.skills} />
      <Profile data={langData.profile} />
      <Projects data={langData.projects} />
      <Footer data={langData.footer} />
    </div>
  )
}

export default App
