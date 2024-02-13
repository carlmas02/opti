import React from "react"; 
import {FcCheckmark} from 'react-icons/fc'


const Download = () => {
  return (
    <div className="bg-[#101B2E] pt-52 p-36 h-screen">
      <div className=" bg-white shadow-inner shadow-black transition-shadow  text-center rounded-lg p-4 hover:scale-105 duration-300">
        <div className="flex justify-center pt-5">
          <FcCheckmark size={30} />
        </div>

        <h2 className="text-xl font-semibold text-center text-[#3caa3c] py-4 ">
          Download Successfull
        </h2>
        <p className="text-center  font-medium">
          Sheet no. 345 is successsfully downloaded.
        </p>
        <p className="text-center  font-medium">
          Please check your file for a detailed view.
        </p>

        <button className="bg-[#3339b4] mt-5 text-white mx-auto  items-center hover:bg-[#0e188b] w-[150px] px-6 py-1 my-2  font-medium rounded-md">
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Download;
