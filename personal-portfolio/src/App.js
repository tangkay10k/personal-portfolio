import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const cvTranscript = useRef(null)
  const contact = useRef(null)

  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNav(currentScrollY < lastScrollY.current)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      <div ref={home} className="App">
        <header className="App-header">
          <p>Testing!</p>
        </header>
      </div>
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
