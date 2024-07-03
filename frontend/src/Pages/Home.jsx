import React, { useContext } from "react";
import Hero from "../components/Hero";
// import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>

      <Hero
        title={
          "Welcome to Vivekanand Hospital "
        }
        imageUrl={"/hero.jpg"}
        info={"Vivekanand Hospital is a healthcare facility dedicated to offering superior services through highly qualified doctors. Our team of skilled professionals is committed to delivering personalized care tailored to each patient's needs. We focus on providing the best facilities at an affordable cost."}
      />
      <Departments />
      <MessageForm />

    </>
  );
};

export default Home;
