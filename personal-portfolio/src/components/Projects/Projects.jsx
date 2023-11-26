import Card from './Card'
import styles from './project.module.css'

const Projects = ({ projects }) => {
  const projectsToDisplay = [
    {
      name: 'Infiltr-AI-te',
      link: 'https://github.com/ktan185/infiltr-AI-te',
      image: '/InfiltrAIte.png',
    },
    {
      name: 'MyKlips',
      link: 'https://github.com/ktan185/Video-Processing-Service',
      image: '/myKlips.png',
    },
  ]

  return (
    <div
      ref={projects}
      style={{ marginTop: '500px' }}
      className={styles.container}
    >
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.cardContainer}>
        {projectsToDisplay.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
