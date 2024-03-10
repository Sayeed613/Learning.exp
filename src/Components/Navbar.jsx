import './Navbar.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
   return (
    <nav className={`container ${sticky? "dark-nav" : ""}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li id='home'>Home</li>
        <li>Services Us</li>
        <li>Why Us</li>
        <li>Our Goals</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}
