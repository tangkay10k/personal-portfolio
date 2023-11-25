import styles from './contact.module.css'

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
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className={styles.formContainer}
      >
        <input
          type="hidden"
          name="access_key"
          value="da99f9da-53b8-4642-ac9a-cec38e66b959"
        ></input>
        <input type="text" placeholder="Your Name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea
          type="text"
          placeholder="Your Message"
          name="message"
          required
        />
        <button className={styles.button}>Send</button>
      </form>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  )
}

export default Contact
