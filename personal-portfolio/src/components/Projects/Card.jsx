import React from 'react'
import styles from './project.module.css'

const Card = ({ project }) => {
  const openGithub = () => {
    window.location.href = project.link
  }

  const openDemo = () => {
    window.location.href = project.demo
  }

  return (
    <div>
      <div className={styles.card}>
        <img className={styles.image} src={project.image} alt={project.name} />
        <h2 className={styles.projectTitle}>{project.name}</h2>{' '}
        <p className={styles.desc}>{project.desc}</p>
        <button className={styles.button} onClick={openGithub}>
          Github
        </button>
        <button className={styles.button} onClick={openDemo}>
          Demo
        </button>
      </div>
    </div>
  )
}

export default Card
