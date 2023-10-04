'use client'
import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import { useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleTheme = () =>{
    setIsDarkMode(prev => !prev)
  }
  return (
    <main className="flex flex-col min-h-screen bg-[#141414] container mx-auto relative">
      <Navbar darkMode={isDarkMode} handleClick={toggleTheme}/>
      <Hero />
    </main>
  )
}
