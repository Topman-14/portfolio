import React from 'react'
import styles from '../styles/About.module.css'
import Tile from './Tile'
import { ingredients } from '../data'
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsFillEnvelopeAtFill } from "react-icons/bs";

export default function About ({darkMode}) {
  return (
    <section className='wrapper' style={darkMode? {color:"#e1e1e1"} : {color: "#333"}} id="about">
        <h3>About Me✌️</h3>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutText}>
            <p>
              Hey there!, I'm Temitope Akinkuade, a Software Engineer based in Lagos, Nigeria. <span> Call me Topman for short. </span> My journey began a few years ago, as a graphic artist, inspired by my mother, a brand designer. <br />Along the way, I ventured into the world of web development, mastering fundamental languages and technologies.
              <span></span>
              Currently, I am an experienced user of various TypeScript frameworks, among other languages. I have gained experience working with cloud environments across multiple technology companies, consistently adopting modern tools to build scalable and reliable solutions.
            </p>
            <div className={styles.links}>
              <Link href={"https://github.com/Topman-14"} target='_blank'>
                <BsGithub />
              </Link>
              <Link href={"https://www.linkedin.com/in/tope-akinkuade"} target='_blank'>
                <BsLinkedin />
              </Link>
              <Link href={"mailto:topeakinkuade78@gmail.com?body=Hello,%2C%20I%20saw%20your%20portfolio%20online%2C%20and%20I'd%20like%20to..."}>
                <BsFillEnvelopeAtFill />
              </Link>
            </div>
          </div>
          <div className={styles.aboutText}>
            <h4 className={styles.subHeading}>Tools & Technologies</h4>
            <div className='flex flex-wrap gap-3 justify-end'>
              {ingredients.map(item => <Tile isDarkMode={darkMode} item={item} key={uuidv4()} />) } 
            </div>
          </div>
        </div>
    </section>
  )
}
