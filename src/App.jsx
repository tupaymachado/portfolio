import { useState } from 'react'
import "@fontsource/dm-mono";
import Menu from './components/Menu.jsx'
import Title from './components/Title.jsx'
import Intro from './components/Intro.jsx'
import Projects from './components/Projects.jsx'/*
import Contact from './components/Contact.jsx'
import Blog from './components/Blog.jsx' */
import './App.css'

function App() {
  const [language, setLanguage] = useState('pt-br');

  function switchLanguage() {
    if (language === 'pt-br') {
      setLanguage('en-us');
    } else {
      setLanguage('pt-br');
    }
  }

  return (
    <>
      <Menu 
        language={language}
        switchLanguage={switchLanguage}
      />
      <Title 
        language={language}
      />
      <Intro 
        language={language}
      />
      <Projects 
        language={language}
      />{/*
      <Contact />
      <Blog /> */}
    </>
  )
}

export default App
