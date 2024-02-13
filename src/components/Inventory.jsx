  import React from "react";

const Inventory = () => {
  return (
    <div className="w-full  bg-[#101B2E] h-screen text-center  py-16  text-white">
      <div className=" justify-center">
        <div className="flex justify-between mx-5">
          <h1 className="sm:text-xl  grid grid-col-2 text-[#ffffff] font-extrabold py-2 md:text-2xl text-lg">
            Inventory
          </h1>
          <button className="sm:text-xl  grid grid-col-2 text-[#ffffff] font-extrabold py-2 md:text-2xl text-lg">
            Home
          </button>
        </div>

        <h1 className="  px-5  py-2 text-left">Last 30 Days</h1>
      </div>
      <div className="my-4 mx-5">
        <div className="flex flex-col  sm:flex-row w-full items-center justify-between">
          <input
            type="Search"
            placeholder="Search"
            className="rounded-md bg-white bg-transparent  shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2 "
          />
        </div>
      </div>
      <div className="flex  px-5 ">
        <div className="w-full bg-white text-black shadow-inner shadow-slate-400 rounded-lg  p-4 my-4 hover:scale-105 duration-300">
          <h2 className=" text-[#c61717] font-semibold  py-4  "> Picked </h2>
          <p className="text-center  text-[#4F46E5] text-xl font-bold">
            71,897
          </p>
          <p className="text-center text-sm text-slate-400">from 70,955</p>
        </div>
        <div className="w-full text-black   bg-white shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <h2 className=" text-[#b651d4] font-semibold  py-4  "> Shipped </h2>
          <p className="text-center text-[#4F46E5] text-xl font-bold">58.35%</p>
          <p className="text-center text-sm text-slate-400">from 56%</p>
        </div>
        <div className="w-full text-black   bg-white shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <h2 className=" text-[#5e96df] font-semibold  py-4  "> Delivered </h2>
          <p className="text-center text-[#4F46E5] text-xl font-bold">26.3%</p>
          <p className="text-center text-sm text-slate-400">from 55%</p>
        </div>
        <div className="w-full text-black   bg-white shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <h2 className=" text-[#61d55a] font-semibold  py-4  "> Current </h2>
          <p className="text-center text-xl text-[#4F46E5] font-bold">30.68%</p>
          <p className="text-center text-sm text-slate-400">from 70%</p>
        </div>
      </div>

      <div className="flex px-5">
        <div className="w-full bg-transparent shadow-inner shadow-slate-400 rounded-lg  p-4 my-4 hover:scale-105 duration-300">
          <h2 className="   py-4  "> Reports </h2>
        </div>
      </div>

      <div className="flex space-x-4  px-5">
        <div className="w-full  bg-white shadow-inner shadow-slate-400 rounded-lg  p-4 my-4 hover:scale-105 duration-300">
          <p className="text-center text-lg text-[#4F46E5] font-semibold">
            Debring
          </p>
          <p className="text-center text-sm text-slate-400">555</p>
        </div>
        <div className="w-full  bg-white shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <p className="text-center text-lg text-[#4F46E5] font-semibold">
            Metre Wire
          </p>
          <p className="text-center text-sm text-slate-400">955</p>
        </div>
        <div className="w-full   bg-white  shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <p className="text-center text-lg text-[#4F46E5] font-semibold">
            Torson{" "}
          </p>
          <p className="text-center text-sm text-slate-400">709</p>
        </div>
        <div className="w-full   bg-white shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <p className="text-center text-[#4F46E5] text-lg font-semibold">
            Compression spring
          </p>
          <p className="text-center text-sm text-slate-400">678</p>
        </div>
      </div>
      <div className=" my-4   w-full  items-center justify-between">
        <button className="bg-[#3339b4] sm:flex-row  items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2 ml-4 font-medium rounded-md">
          Add
        </button>
      </div>
    </div>
  );
};

export default Inventory;
