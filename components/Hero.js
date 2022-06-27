import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

function Hero() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col space-y-12 px-10 pt-20 md:pt-20 pb-16 md:flex-row md:space-y-0 md:space-x-10 relative">
      {/* title & description */}
      <div className="flex- flex-col space-y-5 md:w-[50%] md:pt-10  ">
        <div className="relative text-[#010AE9]">
          <p className="absolute top-0 text-4xl">*</p>
          <p className="pl-4"> Jump start your growth</p>
        </div>
        <img
          src="./assets/vektor.png"
          className="absolute top-[-2rem] left-0 md:top-[-6rem]"
        />
        <h1 className="text-[3rem] font-bold leading-[3.5rem] relative ">
          We boost the growth for{" "}
          <span className="text-[#010AE9]">Startup</span> to Fortune 500
          Companies{" "}
          <img
            src="./assets/watch-icon.png"
            className="inline absolute bottom-[-0.5rem] w-20"
          />
        </h1>
        <p className="text-[#575757] w-[70%] leading-7">
          Get the most accurate leads, sales peopele training and conversions,
          tools and more — all within the same one billing.
        </p>
        <form className="flex space-x-2">
          <input
            type="text"
            name="email"
            placeholder="Email address"
            className="px-3 py-1 outline-blue-200 ring-2 ring-gray-400 rounded-md w-80"
          />
          <button className="bg-[#010AE9] py-2 px-6 rounded-md ring-2 ring-[#010AE9] hover:bg-blue-700 hover:ring-blue-700 shadow-2xl shadow-[#010AE9]">
            <ArrowNarrowRightIcon className="w-5 -rotate-45 text-white " />
          </button>
        </form>
      </div>

      {/* Hero Photo */}
      <div className="w-80 mx-auto mt-8 md:flex md:w-[50%]">
        <img className="object-contain" src="./assets/hero-image.png" />
      </div>
    </div>
  );
}

export default Hero;
