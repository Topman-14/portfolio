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
        <h3>About Me✌️<span style={darkMode? {color: "#444"} : {color:"#c5c5c5"}}>{"() {"}</span></h3>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutText}>
            <p>
              Hey there!, I'm Temitope Akinkuade, a Software Engineer based in Lagos, Nigeria. <span> Call me Topman for short. </span> My journey began a few years ago, as a graphic artist, inspired by my mother, a brand designer. <br />Along the way, I ventured into the world of web development, mastering fundamental languages and technologies.
              <span></span>
              Now, I'm an avid explorer of a variety of JavaScript frameworks, including Angular, React, Express, Next, and more. My passion lies in cooking dynamic and engaging web experiences that seamlessly blend design, functionality and value.
            </p>
            <div className={styles.links}>
              <Link href={"https://github.com/Topman-14"} target='_blank'>
                <BsGithub />
              </Link>
              <Link href={"https://www.linkedin.com/in/tope-akinkuade"} target='_blank'>
                <BsLinkedin />
              </Link>
              <Link href={"mailto:talktotimothy101@gmail.com?body=Hey%2C%20I%20saw%20your%20portfolio%20online%2C%20and%20I'd%20like%20to..."}>
                <BsFillEnvelopeAtFill />
              </Link>
            </div>
          </div>
          <div className={styles.aboutText}>
            <h4 className={styles.subHeading}>My Ingredients 👨‍🍳</h4>
            <div className='flex flex-wrap gap-3 justify-end'>
              {ingredients.map(item => <Tile isDarkMode={darkMode} item={item} key={uuidv4()} />) } 
            </div>
          </div>
        </div>
        <h3 style={darkMode? {color: "#444"} : {color:"#c5c5c5"}} className="bottom_curly_brace">{"}"}</h3>
    </section>
  )
}
