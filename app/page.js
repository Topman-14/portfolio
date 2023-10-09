'use client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import { useState } from 'react'
import Projects from './components/Projects.jsx'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleTheme = () =>{
    setIsDarkMode(prev => !prev)
  }
  return (
    <main style={isDarkMode? {background: "#010e1b"} : {background: "#e1e1e1"}}> 
    {/* previous bg color -- "#121212" */}
      <div className="flex flex-col min-h-screen container mx-auto relative px-5">
        <Navbar darkMode={isDarkMode} handleClick={toggleTheme}/>
        <Hero darkMode={isDarkMode}/>
        <Projects darkMode={isDarkMode} />
      </div>
    </main>
  )
}
