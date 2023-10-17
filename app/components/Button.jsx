import React from 'react'
import styles from '../styles/Button.module.css'
import { FiDownload, FiArrowRight } from "react-icons/fi";

function Button({text, icon, isDarkMode}) {
  return (
    <button className={isDarkMode? styles.btnDark : styles.btn}>
      <div className={isDarkMode ? styles.text : styles.textLight}>
        <p>{text}</p>
        {icon && icon == "download" ? <FiDownload /> : <FiArrowRight />}
      </div>
    </button>
  )
}

export default Button