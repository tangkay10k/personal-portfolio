import useScroll from '../../scroll'
import styles from './home.module.css'
import { useEffect, useState } from 'react'

const Home = ({ home }) => {
  const backgroundImageUrl = '/home.jpeg'

  const [scrollY, setScrollY] = useState(0)
  const currentScroll = useScroll()

  useEffect(() => {
    setScrollY(currentScroll)
  }, [currentScroll])

  const isMobile = window.innerWidth <= 600
  const translateY = isMobile ? 0 : scrollY * 0.4

  return (
    <div
      ref={home}
      className={styles.header}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        className={styles.headerText}
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        <p>Software Engineering Student</p>
        <h1>
          Hi, I'm <span>Kay </span>Tang
          <br />
          from New Zealand
        </h1>
      </div>
    </div>
  )
}

export default Home
