import React from "react";

function Hero() {
  return (
    <div className="pt-20">
      {/* title & description */}
      <div className="flex flex-col space-y-6 px-4">
        <p className="text-[#010AE9]">Jump start your growth</p>
        <h1 className="text-5xl font-bold">
          We boost the growth for{" "}
          <span className="text-[#010AE9]">Startup</span> to Fortune 500
          Companies
        </h1>
        <p className="text-[#575757]">
          Get the most accurate leads, sales peopele training and conversions,
          tools and more — all within the same one billing.
        </p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      {/* Hero Photo */}
      <div className="w-80 mx-auto mt-8">
        <img src="./assets/hero-image.png" />
      </div>
    </div>
  );
}

export default Hero;
