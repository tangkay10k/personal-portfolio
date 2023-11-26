import styles from './project.module.css'

const Card = ({ project }) => {
  const handleClick = () => {
    window.location.href = project.link
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.card}>
        <img className={styles.image} src={project.image} alt={project.name} />
        <h2 className={styles.projectTitle}>{project.name}</h2>{' '}
        <button className={styles.button} onClick={handleClick}>
          Github
        </button>
      </div>
    </div>
  )
}

export default Card
