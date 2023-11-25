import styles from './nav.module.css'

const Nav = ({showNav, home, about, projects, cvTranscript, contact}) => {

  const navStyle = {
    transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={navStyle} className={styles.navbar}>
      <div className={styles.clickables}>
        <Section section={home} name='Home'/>
        <Section section={about} name='About'/>
        <Section section={projects} name='Projects'/>
        <Section section={cvTranscript} name='CV & Transcript'/>
        <Section section={contact} name='Contact'/>
      </div>
    </div>
  )
}

const Section = ({section, name}) => {

  function scrollToMySection(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <span
      onClick={()=>scrollToMySection(section)}
      className={styles.scrollTo}>
      {name}
    </span>
  )
}

export default Nav