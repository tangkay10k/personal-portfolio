import styles from './nav.module.css'
import Section from '../section/Section'

const Nav = ({ showNav, home, about, projects, contact }) => {
  const navStyle = {
    transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.8s ease',
  }

  return (
    <div style={navStyle} className={styles.navbar}>
      <div className={styles.clickables}>
        <Section section={home} name="Home" />
        <Section section={about} name="About" />
        <Section section={projects} name="Projects" />
        <Section section={contact} name="Contact" />
      </div>
    </div>
  )
}

export default Nav
