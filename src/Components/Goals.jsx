import './Goals.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdSupervisedUserCircle } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";

export default function Goals() {
  return (
    <div className='content container'>
      <div className="heading">
        <h3>We Completed 1200+ Certification Program Successfully & Counting</h3>
        <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning <br /> Experience That Empowers You To Achieve Your Goals. Join Us Today And <br /> Embark On A Journey Of Discovery, Growth, And Success.</p>
      </div>
      <div className='goals'>
        <div className="goal">
          <FaCheckCircle size={37} className="icon-blue" />
          <div className="sub-heading">
            <p>100+</p>
            <p>Batch Complete</p>
          </div>
        </div>
        <div className="goal">
          <IoIosCheckbox size={37} className="icon-blue" />
          <div className="sub-heading">
            <p>50+</p>
            <p>Active Batches</p>
          </div>
        </div>
        <div className="goal">
          <MdSupervisedUserCircle size={37} className="icon-blue" />
          <div className="sub-heading">
            <p>10,000+</p>
            <p>Student Satisfied</p>
          </div>
        </div>
        <div className="goal">
          <MdSupervisedUserCircle size={37} className="icon-blue" />
          <div className="sub-heading">
            <p>10+</p>
            <p>Course Modules</p>
          </div>
        </div>
      </div>
    </div>
  );
}
