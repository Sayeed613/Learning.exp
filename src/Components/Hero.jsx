import './Hero.css'
import HeroImg from '../assets/Group 39735.png'
import NextBtn from '../assets/next.png'
import { FaArrowRight } from "react-icons/fa";
export default function Hero({setPlay}) {
  return (
    <div className='hero container'>
        <div className='hero-container'>
            <div className="left">
            <h2>We Create Learning Experience With Excellent Technology.</h2>
            <h4>Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— All Included In Your Subscription</h4>
            <div className='hero-btn'>
                <button className='btn1 btn'>Book Demo Class</button>
                <p>Explore More  <FaArrowRight /></p>
            </div>
            </div>
            <div className="right">
                <img src={HeroImg} alt="" />
                <img src={NextBtn} alt=""  className='play-icon' onClick={()=> {setPlay(true)}}/>
             </div>
        </div>
    </div>
  )
}
