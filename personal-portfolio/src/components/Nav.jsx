import styles from './nav.module.css'

const Nav = ({showNav, home, about, projects, cvTranscript, contact}) => {

  function scrollToMySection(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navStyle = {
    transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease'
  };

  return (
    <>
      <div style={navStyle} className={styles.navbar}>
        <div className={styles.clickables}>
          <span
            onClick={()=>scrollToMySection(home)}
            className={styles.scrollTo}>
            home
          </span>
          <span
            onClick={()=>scrollToMySection(about)}
            className={styles.scrollTo}>
            about
          </span>
          <span
            onClick={()=>scrollToMySection(projects)}
            className={styles.scrollTo}>
            projects
          </span>
          <span
            onClick={()=>scrollToMySection(cvTranscript)}
            className={styles.scrollTo}>
            CV & Transcript
          </span>
          <span
            onClick={()=>scrollToMySection(contact)}
            className={styles.scrollTo}>
            contact
          </span>
        </div>
      </div>
    </>
  )
}



export default Nav