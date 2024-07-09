import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './project.module.css'

const ProjectCard = ({ project }) => {
  function handleClick(link) {
    window.location.href = link
  }

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" className={styles.image} src={project.image} />
      <Card.Body>
        <Card.Title className={styles.title}>{project.title}</Card.Title>
        <Card.Text className={styles.desc}>{project.desc}</Card.Text>
        <div className={styles.buttonsContainer}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleClick(project.link)}
          >
            GitHub
          </Button>
          <br />
          {project.demo && (
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleClick(project.demo)}
            >
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
