import React from 'react'
import Card from './Card'
import styles from './project.module.css'
import useScroll from '../../scroll'
import { useEffect, useState } from 'react'

const Projects = ({ projects }) => {
  const backgroundImageUrl = '/home.jpeg'
  const [scrollY, setScrollY] = useState(0)
  const currentScroll = useScroll()

  useEffect(() => {
    setScrollY(currentScroll)
  }, [currentScroll])

  const projectsToDisplay = [
    {
      name: 'Infiltr-AI-te',
      desc: 'AI Powered Escape room game',
      link: 'https://github.com/ktan185/infiltr-AI-te',
      demo: 'https://www.youtube.com/watch?v=KBMJhbqPgFk&ab_channel=KayTang',
      image: '/InfiltrAIte.png',
    },
    {
      name: 'MyKlips',
      desc: 'Video processing & streaming platform',
      link: 'https://github.com/ktan185/Video-Processing-Service',
      demo: 'https://youtu.be/qGUkawUY0_E',
      image: '/myKlips.png',
    },
  ]

  return (
    <div
      className={styles.container}
      style={{
        marginTop: '500px',
        backgroundImage: `url(${backgroundImageUrl})`,
        transform: `translateY(${scrollY})`,
      }}
    >
      <h2 ref={projects} className={styles.title}>
        My Projects
      </h2>
      <div className={styles.cardContainer}>
        {projectsToDisplay.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
