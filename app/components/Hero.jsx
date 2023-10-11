import React from 'react'
import styles from '../styles/Hero.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa6"; 
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
function Hero({darkMode}) {


  return (
      <section className={styles.main}>
          <div className={styles.heroText}>
            <p style={darkMode? {color: "rgb(195, 253, 234"} : {color: "#777"}}>Hi 👋, my name is</p>
            <h2 className={styles.name} style={darkMode? {color: "#fff"} : {color: "#333"}}>Tope Akinkuade</h2>
            <h2 className={styles.descBig}>I build Web Applications</h2>
            <p className={styles.descLittle} style={darkMode? {color: "#fff"} : {color: "#777"}}>
              I'm a Software Engineer specializing in crafting exemplary digital experiences. 
              <br />
              From implementing user interfaces to optimizing backend systems, 
              I take pride in delivering top-notch software that exceeds expectations 🚀. 
            </p>
            <Link href={"/Resume_Akinkuade_Temitope.pdf"} target="_blank" rel="noreferrer">
              <Button isFilled={true} text={"Download Resume"} icon={"download"} isDarkMode={darkMode}/>
            </Link>
          </div>
          <div>
            <div className={styles.heroImg}>
              <Image src={"/images/me.png"} height={200} width={300} alt='An image of me - Topman' priority={true}/>
            </div>
            <div className={styles.heroImgBase} style={darkMode? {background:"linear-gradient(90deg, rgba(200,241,153,1) 0%, rgba(0,212,255,1) 100%)"}: {background:"black"}}>
            </div>
          </div>
      </section>
  )
}

export default Hero