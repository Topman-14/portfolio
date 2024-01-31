import React from 'react'
import styles from '../styles/Contact.module.css'
import Contactform from './Contactform'
import Link from 'next/link'
import { BsGithub, BsEnvelopeAtFill, BsLinkedin, BsArrowRight } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
import Image from 'next/image'

function selectIcon(iconName){
  return (iconName == "Gmail") ? <BsEnvelopeAtFill /> : (iconName == "Github") ? <BsGithub /> : (iconName == "LinkedIn") ? <BsLinkedin /> : <FaSquareXTwitter />
}

export default function Contact({darkMode}) {
  const contactInfo = [
    {
      title: "Gmail",
      link: "mailto:talktotimothy101@gmail.com?body=Hey%2C%20I%20saw%20your%20portfolio%20online%2C%20and%20I'd%20like%20to..."
    },
    {
      title: "Github",
      link: "https://github.com/Topman-14"
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/tope-akinkuade"
    },
    {
      title: "Twitter",
      link: "https://twitter.com/Topman_14"
    }
  ]
  return (
    <section className='wrapper' style={darkMode? {color:"#e1e1e1"} : {color: "#333"}} id="contact">
      <h3>Contact Me 📫</h3>
      <div className={styles.contactContainer}>
        {contactInfo.map(obj => {
          return(
            <Link href={obj.link} target='_blank' key={obj.title}>
              <div className={darkMode? `${styles.tile} ${styles.tileDark}` : styles.tile}>
                {selectIcon(obj.title)}
                <p>{obj.title}</p>
                <BsArrowRight />
              </div>
            </Link>
          )
        })}
      </div>
      <h4 className='mt-[50px] mb-[30px] text-2xl font-semibold'>Feel free to ask questions!</h4>
      <p className={styles.ptag} >I usually reply in a few hours</p>
      <div className={styles.contactFormContainer}>
        <Image src={"/images/contact.jpg"} height={300} width={400} priority={true} alt='pawpaw business meme'/> 
        <Contactform isDarkMode={darkMode} />
      </div>
    </section>
  )
}
