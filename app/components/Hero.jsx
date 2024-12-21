import styles from '../styles/Hero.module.css'
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import myImage from '@/public/images/me.jpeg'; 


function Hero({darkMode}) {


  return (
      <section className={styles.main}>
        <div className={styles.heroText}>
            <p style={darkMode? {color: "rgb(195, 253, 234)"} : {color: "rgb(4 94 117)"}}>Hi 👋, my name is</p>
            <h2 className={styles.name} style={darkMode? {color: "#fff"} : {color: "#333"}}>Tope Akinkuade</h2>
            <h2 className={styles.descBig}>I build Web Applications</h2>
            <p className={styles.descLittle} style={darkMode? {color: "#fff"} : {color: "#222"}}>
              I'm a Software Engineer specialized in crafting exceptional digital experiences. 
              <br />
              From implementing user interfaces to optimizing backend systems, 
              I take pride in delivering top-notch software that exceeds expectations 🚀
            </p>
            <Link href={"/resume.pdf"} target="_blank" rel="noreferrer">
              <Button isFilled={true} text="View Resume" isDarkMode={darkMode}/>
            </Link>
          </div>
          <div>
            <div className={styles.heroImg}>
              <Image  
                src={myImage}
                height={230} 
                width={300} 
                placeholder='blur'
                alt='Me!' 
                priority={true}/>
            </div>
          </div>
      </section>
  )
}

export default Hero