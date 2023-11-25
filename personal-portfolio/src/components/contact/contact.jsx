import styles from './contact.module.css'
import { appendData } from './submit.js'

const Contact = ({ contact }) => {
  function handleFormSubmit(event) {
    event.preventDefault()
    // Assuming you have a form with inputs having IDs 'name', 'email', 'message'
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    // Call appendData with the OAuth authentication and form data
    appendData(auth, name, email, message)
  }

  return (
    <div
      ref={contact}
      style={{ marginTop: '500px' }}
      className={styles.contactContainer}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit} className={styles.formContainer}>
        <input type="text" placeholder="Your Name" id="name" />
        <input type="text" placeholder="Your Email" id="email" />
        <textarea type="text" placeholder="Your Message" id="message" />
        <button className={styles.button}>Send</button>
      </form>
    </div>
  )
}

export default Contact
