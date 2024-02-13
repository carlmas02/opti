import React from "react";
import { CiWarning } from "react-icons/ci";

const Delete = () => {
  return (
    <div className="bg-[#101B2E] pt-52 p-36 h-screen">
      <div className=" bg-white shadow-inner shadow-black transition-shadow  text-center rounded-lg p-4 hover:scale-105 duration-300">
        <div className="flex justify-center pt-5">
          <CiWarning size={30} />
        </div>

        <h2 className="text-xl font-semibold text-center text-[#eb1818] py-4 ">
          Delete spring
        </h2>
        <p className="text-center  font-medium">
          Are you sure you want to delete this file? All of your data will be
          permanently removed from our servers forever. This action cannot be
          undone.
        </p>
        <div className="flex"> 
          <button className="bg-[#eb1818] mt-5 text-white mx-auto  items-center w-[150px] px-6 py-1 my-2  font-medium rounded-md">
            Delete
          </button>
          <button className="bg-[#ffff] mt-5 mx-auto border  items-center w-[150px] px-6 py-1 my-2  font-medium rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
