import React from "react";

const Hero = ({ title, imageUrl ,info}) => {
  return (
    <>
      <div className="hero container">

        <div className="banner">
          <div className="fixed-icons">
            <a className="fixed-tel" href="tel:+9412168000" target="_blank" title="Call Now">
              <i className="fas fa-phone-alt"></i>
            </a>

          
            <a className="fixed-whatsapp" href="https://wa.me/+9412168000" target="_blank" title="Chat on WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <h1>{title}</h1>
          <p>
            {info}
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
