import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero /> 
      <About/>
      <Skills/>
      <ContactForm/>
       
    </>
  )
}

export default App
