import React from 'react'
import Project from './Project'
import {projects} from '../data'
import { v4 as uuidv4 } from 'uuid';

export default function Projects({darkMode}) {
  return (
   <section className={"wrapper"} style={darkMode? {color:"#e1e1e1"} : {color: "#333"}} id="projects">
    <h3 >Projects<span style={darkMode? {color: "#444"} : {color:"#c5c5c5"}}>{"() {"}</span></h3>
    <div className='flex flex-col items-center gap-[150px] mt-28'>
      {projects.map(project => (<Project isDarkMode={darkMode} isLeft={project.id % 2} project={project} key={uuidv4()} />))}
    </div>
    <h3 style={darkMode? {color: "#444"} : {color:"#c5c5c5"}} className='bottom_curly_brace'>{"}"}</h3>
   </section>
  )
}
