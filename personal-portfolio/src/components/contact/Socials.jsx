import React from 'react'
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
      <p className={styles.socialMedia}>
        {socialMedias.map((name) => (
          <SocialIcon
            key={name}
            name={name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </p>
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
      'https://www.dropbox.com/scl/fi/x91trinupwk0onor7h6m4/KTAN_CV_MAR_2024.pdf?rlkey=7lp7z38v829yuk5heouwg6j3i&dl=1',
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
