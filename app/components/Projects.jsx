import React from 'react'
import Project from './Project'
import {projects} from '../data'
import { v4 as uuidv4 } from 'uuid';

export default function Projects({darkMode}) {
  return (
   <section className={"wrapper"} style={darkMode? {color:"#e1e1e1"} : {color: "#333"}} id="projects">
    <h3 >Projects</h3>
    <div className='flex flex-col items-center gap-[150px] mt-20'>
      {projects.map((project, _) => (<Project isDarkMode={darkMode} isLeft={_ % 2} project={project} key={uuidv4()} />))}
    </div>
   </section>
  )
}
