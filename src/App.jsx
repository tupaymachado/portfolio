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
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx' /*
import Contact from './components/Contact.jsx'
import Footer from ./components/Footer.jsx */
import './App.css'

function App() {
  const [language, setLanguage] = useState('pt-br');
  const [color, setColor] = useState('dark');

  function switchColor() {
    if (color === 'dark') {
      setColor('light');
    } else {
      setColor('dark');
    }
  };

  function switchLanguage() {
    if (language === 'pt-br') {
      setLanguage('en-us');
    } else {
      setLanguage('pt-br');
    }
  };

  return (
    <div className="mainContainer">
      <Menu 
        language={language}
        switchLanguage={switchLanguage}
        color={color}
        switchColor={switchColor}
      />
      <Title 
        language={language}
        color={color}
      />
      <Intro 
        language={language}
        color={color}
      />
      <Projects 
        language={language}
        color={color}
      />
      <Skills 
      language={language}
      color={color}
      />
      {/*
      <Contact />
      <Footer />
       */}
    </div>
  )
}

export default App
