import "./Services.css"
import Img1 from '../assets/smartphone.png'
import Img2 from '../assets/Dashboard.png'
import Img3 from '../assets/layout.png'
export default function Services() {
  return (
    <div className="card container">
        <div className="heading">
        <h3>We provide various kind of <br /> learning modules for you</h3>
         <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable <br /> Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum </p>
        </div>
        <div className="servies-card container">
            <div className="cards">
                <img src={Img1} alt="" />
                <h3>Learn Anything</h3>
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>

            </div>
            <div className="cards" id="unique-card">
                <img src={Img2} alt="" />
                <h3>Flexible Learning</h3>
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When </p>

            </div>
            <div className="cards" >
                <img src={Img3} alt="" />
                <h3>Expert Connect</h3>
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable </p>
            </div>
        </div>
    </div>
  )
}
