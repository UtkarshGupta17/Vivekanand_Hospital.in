import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      time: "11:00 AM - 3:00 PM",
    }
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>OPD Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
            <h4>EMERGENCY</h4>
            <ul>
              <span>24 X 7</span>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>9412168000</span>
            </div>
            <div>
              <MdEmail />
              <span>vnhagr@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Agra , Uttar Pradesh</span>
            </div>

          </div>

        </div>
        
      </footer>
    </>
  );
};

export default Footer;
