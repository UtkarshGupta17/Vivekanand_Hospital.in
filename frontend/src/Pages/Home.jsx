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
      />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
