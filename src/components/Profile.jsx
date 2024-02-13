import React from "react";
import profile from "../assets/profile.jpg";
import { IoMdClose } from "react-icons/io";

const Profile = () => {
  return (
    <div className="bg-[#101B2E] text-white   h-screen">
      <div className="flex justify-between">
        <h className="font-bold text-xl  m-5">Profile</h>
        <IoMdClose />
      </div>

      <div className="flex">
        <img className=" w-80 mx-auto" src={profile} alt="icon" />
      </div>
      <div className="flex m-10 justify-between">
    
        <p className="font-bold  ">Ashley Porter</p>
        <button className="bg-[#3339b4]  text-white  hover:bg-[#0e188b] w-[150px] py-1  font-medium rounded-md">
          Email
        </button>
      </div>

      <div className="border-b -mb-10"></div>
      <div className=" font-medium mt-10">
        <div className="border-b flex ">
          <p className="py-2  mx-8 mt-4">Biograph</p>
          <p className="py-2  mx-8 mt-4">
            I’m a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </div>

        <div className="border-b flex ">
          <p className="py-2  mx-8 mt-4">Location</p>
          <p className="py-2  mx-8 mt-4">
            Mount Poinsur, S.V.P. Road, Borivali (West), Mumbai 400 103.
          </p>
        </div>
        <div className="border-b flex ">
          <p className="py-2  mx-8 mt-4">Website</p>
          <p className="py-2  mx-8 mt-4">ashleyporter.com</p>
        </div>
        <div className="border-b flex ">
          <p className="py-2  mx-8 mt-4">Birthday</p>
          <p className="py-2  mx-8 mt-4">June 19, 2001</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
