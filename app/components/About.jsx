import React from 'react'
import styles from '../styles/About.module.css'
import Tile from './Tile'
import { ingredients } from '../data'
import { v4 as uuidv4 } from 'uuid';

export default function ({darkMode}) {
  return (
    <section className='wrapper' style={darkMode? {color:"#e1e1e1"} : {color: "#333"}} id="about">
        <h3>About Me✌️</h3>
        <div className='flex gap-14 justify-between'>
          <p className={styles.aboutText}>
            Hey there!, I'm Temitope Akinkuade, a Software Engineer based in Lagos, Nigeria. <span> Call me Topman for short. </span> My journey began a few years ago, as a graphic artist, inspired by my mother, a brand designer. <br />Along the way, I ventured into the world of web development, mastering fundamental languages and technologies.
            <span></span>
            Now, I'm an avid explorer of a variety of JavaScript frameworks, including Angular, React, Express, Next, and more. My passion lies in cooking dynamic and engaging web experiences that seamlessly blend design and functionality for value.
          </p>
          <div className='w-[50%]'>
            <h4 className={styles.subHeading}>Ingredients</h4>
            <div className='flex flex-wrap gap-3 justify-end'>
              {ingredients.map(item => <Tile isDarkMode={darkMode} item={item} key={uuidv4()} />) } 
            </div>
          </div>
        </div>
    </section>
  )
}
