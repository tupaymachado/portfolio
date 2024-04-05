import { useState } from 'react'
import "@fontsource/poppins";
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"
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
    <div className="mainContainer">
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
    </div>
  )
}

export default App
