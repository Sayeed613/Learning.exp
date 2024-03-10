import { useState } from "react"
import Goals from "./Components/Goals"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Services from "./Components/Services"
import Video from "./Components/Video"
import WhyUs from "./Components/WhyUs"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"



function App() {
    const[play, setPlay] = useState(false)
  return (
      <>
      <div>
      <Navbar/>
      <Hero setPlay={setPlay} />
      <Services/>
      <WhyUs setPlay={setPlay}/>
      <Goals/>
      <Contact/>
      <Footer/>
      </div>
      <Video play={play} setPlay={setPlay}/>
      </>
  )
}

export default App
