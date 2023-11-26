import styles from './form.module.css'

const Form = () => {
  return (
    <>
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
    </>
  )
}

export default Form
