import React from 'react'
import styles from '../styles/Hero.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa6"; 
import Image from 'next/image';
import Button from './Button';
function Hero({darkMode}) {

  const handleDownload = () => {
    // const link = document.createElement('a');
    // link.download = 'Example-PDF-File';

    // link.href = ExamplePdf;

    // link.click();
    console.log("hey")
  };


  return (
      <section className={styles.main}>
          <div className={styles.heroText}>
            <p style={darkMode? {color: "rgb(195, 253, 234"} : {color: "#777"}}>Hi, my name is</p>
            <h2 className={styles.name} style={darkMode? {color: "#fff"} : {color: "#333"}}>Tope Akinkuade</h2>
            <h2 className={styles.descBig}>I build Web Applications</h2>
            <p className={styles.descLittle} style={darkMode? {color: "#fff"} : {color: "#777"}}>
              I'm a dedicated Software Engineer, specializing in crafting exemplary digital experiences. 
              <br />
              From designing intuitive user interfaces to optimizing backend systems, 
              I take pride in delivering top-notch software that exceeds expectations 😊. 
            </p>
            <Button isFilled={true} text={"Download Resume"} icon={"download"} isDarkMode={darkMode} onClick={handleDownload}/>
          </div>
          <div className={styles.heroImg}>
            <Image src={"/images/me.png"} height={400} width={300}/>
          </div>
      </section>
  )
}

export default Hero