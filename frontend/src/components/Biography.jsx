import React from "react";

const Biography = ({ imageUrl }) => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.1460744850674!2d78.02802181071094!3d27.214563246955912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397470af5d888bd9%3A0xff2d01e73c67418c!2sVivekanand%20Hospital%20(Dr.%20Pratima%20Gupta)!5e0!3m2!1sen!2sin!4v1720028055266!5m2!1sen!2sin";
  const directionsUrl = "https://www.google.com/maps/dir//Vivekanand+Hospital+(Dr.+Pratima+Gupta)+Park+Balkeshwar+Rd,+Kailash+Nagar,+Balkeshwar+Colony,+Kamla+Nagar+Agra,+Uttar+Pradesh+282005/@27.2145585,78.0306021,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x397470af5d888bd9:0xff2d01e73c67418c!2m2!1d78.0306021!2d27.2145585?entry=ttu";
  return (
    <div className="container biography">
      {/* <div className="banner">
        <img src={imageUrl} alt="location" />
      </div> */}
      <div className="banner">
        <h3>Locate us</h3>
        <button className="btnbio" onClick={() => window.open(directionsUrl, '_blank')}>
          Get Directions
        </button>
        <iframe 
          src={mapUrl}
          width="1400"
          height="500"
          style={{border:0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vivekanand Hospital Location"
          aria-label="Vivekanand Hospital Location"
        ></iframe>
        
      </div>
    </div>
  );
};

export default Biography;
