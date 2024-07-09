import React from 'react'
import styles from './project.module.css'
import useScroll from '../../scroll'
import { useEffect, useState } from 'react'
import CardCarousel from './carousell'

const Projects = ({ projects }) => {
  const backgroundImageUrl = '/home.jpeg'
  const [scrollY, setScrollY] = useState(0)
  const currentScroll = useScroll()

  useEffect(() => {
    setScrollY(currentScroll)
  }, [currentScroll])

  const projectsToDisplay = [
    {
      title: 'Infiltr-AI-te',
      desc: "AI Powered Escape Room Game for SOFTENG 206 using OpenAI's GPT 3.5 Turbo API.",
      link: 'https://github.com/ktan185/infiltr-AI-te',
      demo: 'https://www.youtube.com/watch?v=KBMJhbqPgFk&ab_channel=KayTang',
      image: '/InfiltrAIte.png',
    },
    {
      title: 'MyKlips',
      desc: 'A video processing and streaming platform to built to learn about full stack development and cloud computing.',
      link: 'https://github.com/ktan185/Video-Processing-Service',
      demo: 'https://youtu.be/qGUkawUY0_E',
      image: '/myKlips.png',
    },
    {
      title: 'LetsChat!',
      desc: 'Peer project over 2024 semester break; real time chat web application using web sockets with user authentication.',
      link: 'https://github.com/ktan185/letschat',
      demo: 'https://letschat-2txdfr6psa-ts.a.run.app/',
      image: '/letschat.png',
    },
    {
      title: 'FreeCycling!',
      desc: 'High fidelity prototype for SOFTENG 350 to learn design principles, accessibility and usability.',
      link: 'https://github.com/ktan185/SOFTENG350-HFP',
      image: '/freecycle.png',
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
      <h2 ref={projects} className={styles.sectionTitle}>
        My Projects
      </h2>
      <div className={styles.carouselContainer}>
        <CardCarousel projects={projectsToDisplay} />
      </div>
    </div>
  )
}

export default Projects
