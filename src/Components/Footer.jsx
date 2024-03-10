import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <div className="footer container">
        <div className="Social-links">
            <div id="icons">
                <ul>
                    <a href=""><li><FaInstagramSquare size={32}/></li></a>
                    <a href=""><li><FaFacebookSquare size={32} /></li></a>
                    <a href=""><li><FaTwitterSquare size={32} /></li></a>
                    <a href=""><li><FaLinkedin size={32} /></li></a>
                </ul>
            </div>
        </div>
        <div className="links">
            <p>Links</p>
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Download</li>
                <li>About</li>
                <li>Service</li>
            </ul>
        </div>
        <div className="support">
            <p>Support</p>
            <ul>
                <li>FAQ</li>
                <li>How it Works</li>
                <li>Features</li>
                <li>Contact</li>
                <li>Reporting</li>
            </ul>
        </div>
        <div className="contact">
            <p>Contact</p>
            <ul>
                <li>+880 12345678</li>
                <li>youremail@gmail.com</li>
                <li>Pune City</li>
            </ul>
        </div>
        <hr />
    </div>
    <div className="bottom container">
        <p>Copyright & Design By @Learning Exp.</p>
        <p>Terms of use | Privacy Policy </p>
    </div>
    </>
  )
}
