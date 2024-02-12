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
  return (
    <>
      <Menu />
      <Title />
      <Intro />
      <Projects />{/*
      <Contact />
      <Blog /> */}
    </>
  )
}

export default App
