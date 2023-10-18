'use client'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import BottomNav from './components/BottomNav.jsx'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleTheme = () =>{
    setIsDarkMode(prev => !prev)
  }
  return (
    <main style={isDarkMode? {background: "#010e1b"} : {background: "#e1e1e1"}}> 
    {/* previous bg color -- "#121212" */}
      <div className="flex flex-col min-h-screen container mx-auto relative px-5 max-w-[1200px]">
        <Navbar darkMode={isDarkMode} handleClick={toggleTheme}/>
        <Hero darkMode={isDarkMode} />
        <About darkMode={isDarkMode} />
        <Projects darkMode={isDarkMode} />
        <Contact darkMode={isDarkMode} />
      </div>
      <BottomNav darkMode={isDarkMode} handleClick={toggleTheme}/>
    </main>
  )
}
