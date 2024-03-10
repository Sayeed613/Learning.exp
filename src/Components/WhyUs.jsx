import './WhyUs.css'
import HeroImg from '../assets/Group 39735.png'
import NextBtn from "../assets/next.png"
export default function WhyUs({setPlay}) {
  return (
    <div className='content container'>
            <div className="heading">
            <h3>Why Us</h3>
            <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning <br /> Experience That Empowers You To Achieve Your Goals. Join Us Today And <br /> Embark On A Journey Of Discovery, Growth, And Success.</p>
            </div>
            <div className='whyus-content'>
                <div className="left">
                    <img src={HeroImg} alt="" />
                    <img src={NextBtn} alt="" className='play-btn' onClick={()=> {setPlay(true)}} />
                </div>
                <div className="right">
                    <h3>Crafting Your Dream Career: Building a Path You Love with us</h3>
                    <div id='para'>
                    <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
                    <p>Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.</p>
                    </div>
                    <button className='btn'>Get more</button>
                </div>
            </div>

    </div>
  )
}
