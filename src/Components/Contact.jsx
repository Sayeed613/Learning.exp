import './Contact.css';
import { FaArrowRight } from "react-icons/fa";
import ContactImg from "../assets/photography.png";
import RatingImg from '../assets/grade-24px (1).png';

export default function Contact() {
  return (
    <>
      <div className='container contact-content'>
        <div className="heading1">
          <h3>Our Students Feedback</h3>
          <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You <br /> To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
        </div>
        <div className='readme'>
          <button>Read more <FaArrowRight/> </button>
        </div>
      </div>
      <div className='card container'>
        <div id="contact-left">
          <img src={ContactImg} alt="" />
        </div>
        <div id="contact-right">
          <div className="sub-content">
            <img src={RatingImg} alt="" />
            <img src={RatingImg} alt="" />
            <img src={RatingImg} alt="" />
            <img src={RatingImg} alt="" />
            <img src={RatingImg} alt="" />
            <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit <br /> Voluptatem Accusantium Doloremque <br /> Laudantium, <br /> Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem.</p>
            <h4>Raid Isalm</h4>
            <p>Product Manager <span>@Learning.com</span></p>
          </div>
        </div>
      </div>
      <div className="contact-details container">
      <div className="contact-details-left">
        <h3>Contact Us!</h3>
        <p>There are many variations of passages of Lorem Ipsum <br /> but the majority have suffered alteration.</p>
      </div>
      <div className="contact-details-right">
        <div className="input-button-container">
          <input type="text" placeholder='Enter your email' />
          <button className='btn'>Send Message</button>
        </div>
      </div>
    </div>
    </>
  );
}
