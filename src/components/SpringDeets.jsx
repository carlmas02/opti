import React from "react";
import torson from "../assets/torson.jpg";
import Deets from "../assets/Deets.jpeg";

const SpringDeets = () => {
  return (
    <div className="w-full  bg-[#101B2E]  text-center  py-16  text-white">
      <img className=" mx-auto w-full h-40 bg-white" src={Deets} alt="icon" />
      <div className="flex space-x-4 m-20 justify-center px-5">
        <div className=" text-black bg-white shadow-inner shadow-slate-400 rounded-lg  p-4 my-4 hover:scale-105 duration-300">
          <img className=" mx-auto w-28  bg-white" src={torson} alt="icon" />
          <p className="text-center m-5 text-lg font-bold">Torson</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">Information</p>
            <div className="flex border-b justify-between">
              <p className="py-2  mx-8">Updated by</p>
              <p className="py-2  mx-8">Marie Ann</p>
            </div>
            <div className="flex border-b justify-between">
              <p className="py-2  mx-8">Created</p>
              <p className="py-2  mx-8">June 9, 2023</p>
            </div>
            <div className="flex border-b justify-between">
              <p className="py-2  mx-8">Last modified</p>
              <p className="py-2  mx-8">December 9, 2023</p>
            </div>

            <p className="py-2">Description</p>
            <input
              type="text"
              placeholder="Add a description"
              className="rounded-md bg-white bg-transparent  shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2 "
            />
            <div className=" my-4 flex  w-full  items-center justify-between">
              <button className="bg-[#3339b4] text-white sm:flex-row  items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2 ml-4 font-medium rounded-md">
                Download
              </button>
              <button className="bg-[#3339b4] sm:flex-row  text-white items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2 ml-4 font-medium rounded-md">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringDeets;
