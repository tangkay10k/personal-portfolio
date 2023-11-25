import React from 'react'
import styles from './about.module.css'

const Tab = ({ name, activeTab, setTab }) => {
  return (
    <span
      className={`${styles.subSection} ${
        activeTab === name ? styles.activeTab : ''
      }`}
      onClick={() => setTab(name)}
    >
      {name}
    </span>
  )
}

export default Tab
