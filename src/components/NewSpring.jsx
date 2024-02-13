import React from "react";
import torson from "../assets/torson.jpg";
import Deets from "../assets/Deets.jpeg";

const NewSpring = () => {
  return (
    <div className="w-full  bg-[#101B2E] p-10 text-center  py-16  text-white">
      <div className="text-center  font-medium">
        <p className="font-bold p-10 text-xl">Spring Details</p>
        <div className="flex pb-5  border-b justify-between">
          <p className="py-2  mx-8">ID</p>
          <input
            type="text"
            placeholder="Enter ID"
            className="rounded-md bg-white bg-transparent  shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2 "
          />
        </div>
        <div className="flex border-b pb-5 pt-5 justify-between">
          <p className="py-2  mx-8">Type</p>
          <input
            type="text"
            placeholder="Enter Type"
            className="rounded-md bg-white bg-transparent  shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2 "
          />
        </div>
        <div className="flex pb-5 pt-5 border-b justify-between">
          <p className="py-2  mx-8">Process</p>
          <input
            type="text"
            placeholder="Enter Steps"
            className="rounded-md bg-white bg-transparent  shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2 "
          />
        </div>
        <div className="flex pb-5 pt-5 border-b justify-between">
          <p className="py-2  mx-8">Picture</p>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="small_size"
          ></label>
          <input
            class="rounded-md bg-white bg-transparent  shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2 "
            id="small_size"
            type="file"
          ></input>
        </div>

        <div className=" my-4 flex  w-full  items-center justify-between">
          <button className="bg-[#3339b4] text-white sm:flex-row  items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2 ml-4 font-medium rounded-md">
            Save
          </button>
          <button className="bg-[#3339b4] sm:flex-row  text-white items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2 ml-4 font-medium rounded-md">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSpring;
