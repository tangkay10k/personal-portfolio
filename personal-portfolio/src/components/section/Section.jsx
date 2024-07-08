import React from 'react'
import styles from './section.module.css'

const Section = ({ section, name }) => {
  function scrollToMySection(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <span
      onClick={() => scrollToMySection(section)}
      className={styles.scrollTo}
    >
      {name}
    </span>
  )
}

export default Section
