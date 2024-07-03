import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Vivekanand Hospital"}
        imageUrl={"/hero.jpg"}
        info={"Vivekanand Hospital was founded in 1998 by Dr. Vivekanand Gupta (Orthopedics) and Dr. Pratima Gupta (Obstetrics and Gynecology), who have been dedicated to serving the community for the past 26 years. Since its inception, the hospital has offered a wide range of specialties and has treated numerous patients over the years. Patients have consistently appreciated the expertise and generosity of the doctors."}
      />
      <Biography imageUrl={"/map.jpg"} />
      
    </>
  );
};

export default AboutUs;
