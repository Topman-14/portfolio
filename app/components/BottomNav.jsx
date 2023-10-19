import React from 'react'
import styles from '../styles/BottomNav.module.css'
import Link from 'next/link'
import { BsPersonLinesFill, BsStack } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

export default function BottomNav({darkMode}) {
  const mobileNavStyles = {
    background: darkMode? "#01182ede" : "#ffffff96",
    color: darkMode? "#e1e1e1" : "#1b2b26",
    border: darkMode? "1px solid transparent" : "1px solid #a1a1a1"
  }
  return (
    <nav className={styles.navWrapper} style={mobileNavStyles}>
      <ul className='flex justify-center items-center gap-7 mx-auto'>
        <Link href={"#about"}><li className={styles.navUlItems}>
          <BsPersonLinesFill />
          <p>About</p>
        </li></Link>
        <Link href={"#projects"}><li className={styles.navUlItems}>
          <BsStack />
          <p>Projects</p>
        </li></Link>
        <Link href={"#contact"}><li className={styles.navUlItems}>
          <HiMail />
          <p>Contact</p>
        </li></Link>
      </ul>
    </nav>
  )
}
