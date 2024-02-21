import React from 'react'
import { Header } from './components/Header'
import { Home } from './sections/Home'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
 
}

export default App