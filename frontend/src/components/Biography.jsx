import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>About us</h3>
          
          <p>
          Vivekanand Hospital was founded in 1998 by Dr. Vivekanand Gupta (Orthopedics) 
          and Dr. Pratima Gupta (Obstetrics and Gynecology), who have been dedicated to serving the community 
          for the past 26 years. Since its inception, the hospital has offered a wide range of specialties 
          and has treated numerous patients over
           the years. Patients have consistently appreciated the expertise and generosity of the doctors.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
