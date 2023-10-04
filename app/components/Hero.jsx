import React from 'react'
import styles from '../styles/Hero.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa6"; 
import Image from 'next/image';
function Hero() {
  return (
    <section className={styles.main}>
        <div className={styles.heroText}>
          <p>Hi, my name is</p>
          <h2>Tope Akinkuade</h2>
          <h2 className={styles.descBig}>I build Web Applications</h2>
          <p className={styles.descLittle}>I'm a dedicated Software Engineer, specializing in crafting exemplary digital experiences. </p>
          <div className='flex justify-between'>
              <FaGithub />
              <FaLinkedin />
          </div>
        </div>
        <div className="heroImg">
          {/* <Image /> */}
        </div>
    </section>
  )
}

export default Hero