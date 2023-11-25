import React, { useEffect, useState } from 'react'
import styles from './about.module.css'
import content from './aboutme.js'

const Overview = ({ currentTab }) => {
  const [displayContent, setDisplayContent] = useState('')
  const [fade, setFade] = useState(false)

  useEffect(() => {
    setFade(false)

    const timeoutId = setTimeout(() => {
      const newContent =
        currentTab === 'Skills'
          ? content.skills
          : currentTab === 'Experience'
          ? content.experence
          : content.education

      setDisplayContent(newContent)
      setFade(true)
    }, 300)
    return () => clearTimeout(timeoutId)
  }, [currentTab])

  return (
    <pre className={`${styles.overview} ${fade ? styles.fadeIn : ''}`}>
      {displayContent}
    </pre>
  )
}

export default Overview
