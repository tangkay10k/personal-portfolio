import React, { useEffect, useState } from 'react'
import styles from './about.module.css'
import content from './aboutme.js'
import Tab from './Tab'
import Overview from './Overview'

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
        {content.aboutMe.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className={styles.content}>
          <Tab name="Skills" activeTab={currentTab} setTab={setTab} />
          <Tab name="Experience" activeTab={currentTab} setTab={setTab} />
          <Tab name="Education" activeTab={currentTab} setTab={setTab} />
        </div>
        <Overview currentTab={currentTab} />
      </div>
    </div>
  )
}

export default About
