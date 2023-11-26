import React, { useRef, useState, useEffect } from 'react'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import useScroll from './scroll'

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const cvTranscript = useRef(null)
  const contact = useRef(null)
  const lastScrollY = useRef(0)
  const currentScrollY = useScroll()
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    // Show navigation bar based if you scroll up.
    setShowNav(currentScrollY < lastScrollY.current)
    lastScrollY.current = currentScrollY
  }, [currentScrollY])

  return (
    <>
      <Nav
        showNav={showNav}
        home={home}
        about={about}
        projects={projects}
        cvTranscript={cvTranscript}
        contact={contact}
      />
      <Home home={home} />
      <About about={about} />
      <div ref={projects} style={{ marginTop: '500px' }}>
        <h2>projects</h2>
      </div>
      <div ref={cvTranscript} style={{ marginTop: '500px' }}>
        <h2>cv & transcript</h2>
      </div>
      <Contact contact={contact} />
    </>
  )
}

export default App
