import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-full  bg-[#101B2E] h-screen text-center  py-16  text-white">
      <div className="flex justify-center">
        <h1 className="sm:text-xl  grid grid-col-2 text-[#3339b4] font-extrabold py-2 md:text-2xl text-lg">
          404 |
        </h1>

        <h1 className="sm:text-xl  px-5 font-bold py-2 md:text-2xl text-lg">
          Page not found
        </h1>
      </div>
      <p className="text-[#6B7280]">
        Please check the URL in the address bar and try again
      </p>

      <div className=" my-4   w-full  items-center justify-between">
        <button className="bg-[#3339b4] sm:flex-row  items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2 ml-4 font-medium rounded-md">
          Go back home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
