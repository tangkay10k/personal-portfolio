import styles from './contact.module.css'
import Form from './Form'

const Contact = ({ contact }) => {
  return (
    <div
      ref={contact}
      style={{ marginTop: '500px' }}
      className={styles.container}
    >
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.subtitle}>Connect with me!</p>
        <a className={styles.socialMedia}>
          <img src="/github-150.png" className={styles.icon} />
          <img src="/linkedin-150.png" className={styles.icon} />
          <img src="/instagram-150.png" className={styles.icon} />
          <img src="/facebook-150.png" className={styles.icon} />
        </a>
        <button className={styles.downloadButton}>Download CV</button>
      </div>
      <Form />
    </div>
  )
}

export default Contact
