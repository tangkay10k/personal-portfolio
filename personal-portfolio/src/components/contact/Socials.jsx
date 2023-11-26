import styles from './contact.module.css'
import { useState } from 'react'

const Socials = () => {
  const [currentHovered, setHovered] = useState('')

  const handleMouseEnter = (imageName) => () => {
    setHovered(imageName)
  }

  const handleMouseLeave = () => {
    setHovered('')
  }

  const socialMedias = ['github', 'linkedin', 'instagram', 'facebook']

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>Connect with me!</p>
      <a className={styles.socialMedia}>
        {socialMedias.map((name) => (
          <SocialIcon
            key={name}
            name={name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </a>
      <>
        {currentHovered && (
          <p className={styles.addMe}>Add me on {currentHovered}!</p>
        )}
      </>
      <DownloadButton />
    </div>
  )
}

const DownloadButton = () => {
  const handleDownload = () => {
    window.open(
      'https://dl.dropboxusercontent.com/scl/fi/au792q1igndg3xdmhy7b2/CV.pdf?rlkey=awuqh73dgp95koclszg8l7b8g&dl=0',
      '_blank'
    )
  }

  return (
    <button onClick={handleDownload} className={styles.downloadButton}>
      Download CV
    </button>
  )
}

const SocialIcon = ({ name, onMouseEnter, onMouseLeave }) => {
  const socialMediaLinks = {
    github: 'https://github.com/ktan185',
    linkedin: 'https://www.linkedin.com/in/tangkay10k/',
    instagram: 'https://www.instagram.com/kaytang_/',
    facebook: 'https://www.facebook.com/TaykangUPSB',
  }

  const handleClick = () => {
    const url = socialMediaLinks[name]
    if (url) window.open(url)
  }

  return (
    <img
      onClick={handleClick}
      onMouseEnter={onMouseEnter(name)}
      onMouseLeave={onMouseLeave}
      src={`/${name}-150.png`}
      className={styles.icon}
      alt={`${name} icon`}
    />
  )
}

export default Socials
