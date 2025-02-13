import {motion} from 'framer-motion'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from './components/Skills'
import Contact from './components/Contact'
import Project from './components/Project'

function App() {
  
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{ opacity: 1}}
    transition={{duration: 2}}
    className="max-w-screen min-h-[100vh] bg-[#DBEEF7] overflow-x-hidden"
    >

      <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
      <Contact/>
      
    </motion.div>
  )
}

export default App
