import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment (Online Consultation Available)"}
        imageUrl={"/signin.png"}
        info={"To schedule an appointment, please log in and complete the form below. Our management team will contact you promptly. Both online and offline appointments are available."}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
