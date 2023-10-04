import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { Orbitron } from 'next/font/google'
import { LuSunMedium, LuMoon } from 'react-icons/lu';

const orbitron = Orbitron({ subsets: ['latin'] })

function Navbar({handleClick, darkMode}) {
  return (
    <header className={darkMode? styles.headerDark : styles.header}>
      <nav className='flex justify-between items-center w-full px-14 py-[2rem]'>
        <Link href={"/"} className={orbitron.className}>
          <h1 className={styles.logo}>Topman</h1>
        </Link>
        <ul className="flex w-2/6 justify-between text-lg">
          <Link href={"#"}><li className={styles.navUlItems}>Skills</li></Link>
          <Link href={"#"}><li className={styles.navUlItems}>Projects</li></Link>
          <Link href={"#"}><li className={styles.navUlItems}>Contact</li></Link>
          <li className='flex items-center text-2xl mr-10 cursor-pointer' onClick={handleClick}> {darkMode ?  <LuSunMedium /> : <LuMoon /> }</li>
        </ul>
      </nav>
    </header>   
  )
}

export default Navbar               