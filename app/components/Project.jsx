import React from 'react'
import Image from 'next/image'
import styles from '../styles/Project.module.css'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import FadeUpAnimation from './FadeUpAnimation';

export default function Project({isDarkMode, isLeft, project}) {

    const projectDescStyle = {
        color: isDarkMode ? "#bbb" : "rgb(87, 86, 86)",
        background: isDarkMode ? "#313131ad" : "#ffffff54",
        border: isDarkMode ? "" : "1px solid #a1a1a1",
        textAlign: isLeft ? "left" : "right",
        margin: isLeft ? "20px -40px 20px 0" : "20px 0 20px -40px",
        borderRadius: isLeft ? "20px 0 20px 0" : "0 20px 0 20px"
      };
      
  return (
    <FadeUpAnimation>
        <article className={styles.projectWrapper} style={isLeft? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
            <div className={styles.projectImg}>
                <Link href={project.link? project.link : project.github} target='_blank'>
                    <div className={isDarkMode? styles.imgOverlay : styles.imgOverlayWhite}></div>
                    <Image src={project.image} height={300} width={500} alt='Screenshot of project' priority={true}></Image>
                </Link>
            </div>
            <div className={styles.projectText}>

                <h4 className={styles.projectName} style={isLeft? {textAlign:"left"} : {textAlign:"right"}}>
                    {project.title}
                </h4>

                <p className={styles.projectDesc} style={projectDescStyle}>
                    {project.description}
                </p>

                <div className={styles.projectStack} style={isLeft? {justifyContent: "flex-start"} : {justifyContent:"flex-end"}}>
                    {project.stack.map(item => <p key={uuidv4()}>{item}</p>)}
                </div>

                <div className={styles.projectLinks} style={isLeft? {justifyContent: "flex-start"} : {justifyContent:"flex-end"}}>
                    <Link href={project.github} target='_blank'>
                        <FiGithub />
                    </Link>
                    {project.link && <Link href={project.link} target='_blank'>
                        <FiExternalLink />
                    </Link>
                    }
                </div>
            </div>
        </article>
    </FadeUpAnimation>
  )
}
