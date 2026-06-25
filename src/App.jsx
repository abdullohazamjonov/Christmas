import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero/index'
import About from './components/About/index'
import Block from './components/Block'
import Gift from './components/Gift'
import New from './components/New'
import Wishes from './components/Wishes'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black dark:bg-[#0e0000] dark:text-white transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Block />
        <Gift />
        <New />
        <Wishes />
        <Footer />
      </div>
    </>
  )
}

export default App