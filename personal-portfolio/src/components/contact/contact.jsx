import React from 'react'
import styles from './contact.module.css'
import Form from './Form'
import Socials from './Socials'

const Contact = ({ contact }) => {
  return (
    <div
      ref={contact}
      style={{ marginTop: '500px' }}
      className={styles.container}
    >
      <Socials />
      <Form />
    </div>
  )
}

export default Contact
