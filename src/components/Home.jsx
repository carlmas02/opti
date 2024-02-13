import React from "react";
import Typed from "react-typed";
import homeSpring from "../assets/homeSpring.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigator = useNavigate();


  return (
    <div className="text-white">

      <div>
        <img
          className=" w-28 mx-auto mt-[-3rem] bg-white"
          src={homeSpring}
          alt="icon"
        />
      </div>

      <div className="max-w-[800px] justify-center mt-[-96px] flex flex-col mx-[600px] text-right w-full h-screen">
        <h1 className="font-bold text-[#3339b4] font-serif  p-2 md:text-7xl sm:text-6xl text-4xl md:py-6 sm:py-3">
          OPTIWARE
        </h1>

        <div className="justify-center items-center">
          <Typed
            className="pl-2 font-serif sm:text-xl md:text-2xl text-lg"
            strings={["Where Precision Engineering Meets Exceptional Quality"]}
            typeSpeed={100}
            backSpeed={10}
            loop
          />
          <p className="p-3 font-mono text-lg text-[#afacce]">
            Discover innovative spring solutions tailored to your needs
          </p>
          <button onClick={()=>navigator("test")} className="bg-[#3339b4] hover:bg-[#0e188b] w-[110px]  my-6 py-2 mx-auto font-medium rounded-md">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
