import { useEffect, useState } from 'react'
import styles from './about.module.css'
import content from './aboutme.js'

const About = ({ about }) => {
  const [currentTab, setTab] = useState('Skills')

  useEffect(() => console.log('Current Tab: ', currentTab), [currentTab])

  return (
    <div
      ref={about}
      style={{ marginTop: '500px' }}
      className={styles.container}
    >
      <img
        src="/tangkay.jpg"
        alt="Kay Tang"
        className={styles.displayPicture}
      />
      <div>
        <h2 className={styles.about}>About me</h2>
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className={styles.content}>
          <span
            className={`${styles.subSection} ${
              currentTab === 'Skills' ? styles.activeTab : ''
            }`}
            onClick={() => setTab('Skills')}
          >
            Skills
          </span>
          <span
            className={`${styles.subSection} ${
              currentTab === 'Exp' ? styles.activeTab : ''
            }`}
            onClick={() => setTab('Exp')}
          >
            Experience
          </span>
          <span
            className={`${styles.subSection} ${
              currentTab === 'Edu' ? styles.activeTab : ''
            }`}
            onClick={() => setTab('Edu')}
          >
            Education
          </span>
        </div>
      </div>
    </div>
  )
}

const Overview = () => {}

export default About
