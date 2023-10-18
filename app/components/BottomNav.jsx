import React from 'react'
import styles from '../styles/BottomNav.module.css'

export default function BottomNav({darkMode}) {
  const mobileNavStyles = {
    background: darkMode? "#01182ede" : "#ffffff96",
    color: darkMode? "#e1e1e1" : "#1b2b26",
    border: darkMode? "1px solid transparent" : "1px solid #a1a1a1"
  }
  return (
    <nav className={styles.navWrapper} style={mobileNavStyles}>
      <p>hello world</p>
    </nav>
  )
}
