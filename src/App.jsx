import { useState } from 'react'
import './App.css'

import { NavBar } from "./components/NavBar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Activities } from './components/Activities';
import { Professors } from "./components/Professors.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Activities />
      <Professors />
      <Footer />
    </>
  )
}

export default App
