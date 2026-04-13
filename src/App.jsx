import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Events from './components/Events'
import Glasses from './components/Glasses'
import Hero from './components/Hero'
import Upcoming from './components/Upcoming'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Hero />
      <Glasses />
      <Events />
      <Upcoming/>
      <Contact/>
    </>
  )
}

export default App
