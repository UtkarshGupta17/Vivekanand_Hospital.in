import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">

        <div className="banner">
          <div class="fixed-icons">
            <a class="fixed-tel" href="tel:+9412168000" target="_blank" title="Call Now">
              <i class="fas fa-phone-alt"></i>
            </a>

          
            <a class="fixed-whatsapp" href="https://wa.me/+9412168000" target="_blank" title="Chat on WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
          <h1>{title}</h1>
          <p>
            Vivekanand Hospital is a healthcare facility dedicated to offering
            superior services through highly qualified doctors. Our team of skilled
            professionals is committed to delivering personalized care tailored to each
            patient's needs. We focus on providing the best facilities at an affordable cost.
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
