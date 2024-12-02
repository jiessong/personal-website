import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        
      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        {/* <About /> */}
        <Technologies />
        <Experience />
        <Projects />
        <Publication />
        <Contact />
      </div>
    </div>
  )
}

export default App