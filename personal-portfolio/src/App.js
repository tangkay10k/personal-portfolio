import React, { useRef, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'

function App() {

  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const cvTranscript = useRef(null);
  const contact = useRef(null);

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Nav 
        showNav={showNav}
        home ={home}
        about={about} 
        projects={projects} 
        cvTranscript={cvTranscript} 
        contact={contact}/>
      <div ref={home} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Testing!
          </p>
        </header>
      </div>

      <div ref={about} style={{ marginTop: '500px' }}>
        <h2>about</h2>
      </div>
    
      <div ref={projects} style={{ marginTop: '500px' }}>
        <h2>projects</h2>
      </div>

      <div ref={cvTranscript} style={{ marginTop: '500px' }}>
        <h2>cv & transcript</h2>
      </div>

      <div ref={contact} style={{ marginTop: '500px' }}>
        <h2>contact</h2>
      </div>
    </>
  );
}

export default App;
