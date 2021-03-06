import React from "react";
import { ChartBarIcon, AdjustmentsIcon } from "@heroicons/react/solid";

function Purpose() {
  return (
    <div className="bg-[#F3F5FA]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center  md:justify-between md:space-x-20 space-y-12 py-12 md:pt-16 md:pb-20">
        {/* TITLE=== */}
        <div className="px-11 text-center md:flex-1 md:mr-6 md:text-left md:pt-5">
          <p className="text-[#999AAB] font-[16px] font-bold text-center md:text-left mb-3">
            ACHIEVE MORE
          </p>
          <h1 className="text-2xl font-bold w-60 md:w-auto">
            Purpose of a convoy is to keep your team
          </h1>
        </div>
        {/* CARD */}
        <div className="w-56 md:flex-1 ">
          <div className="flex items-center  space-x-3 -ml-[53px]">
            <ChartBarIcon className="w-10 text-white p-2 rounded-full bg-[#7C4FCF]" />
            <h1 className="font-bold">Build for impact</h1>
          </div>
          <p className="text-[#656562]">
            We identify and nurture a truly diverse team of designers,
            developers and marketers
          </p>
        </div>

        <div className="w-56 md:flex-1 ">
          <div className="flex items-center space-x-3 -ml-[53px]">
            <AdjustmentsIcon className="w-10  bg-[#EE2A52] text-white p-2 rounded-full" />
            <h1 className="font-bold">In sync with you</h1>
          </div>
          <p className="text-[#656562]">
            We work the way you do by adapting to your workflows and rhythm we
            aim to blend in for a seamless.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
