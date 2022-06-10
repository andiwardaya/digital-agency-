import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";
function Future() {
  const cardData = [
    {
      title: "Web Design",
      para: "One for all and all for one, Muskelhounds are always ready",
      icon: "./assets/stack.png",
      link: "/webdesign",
    },
    {
      title: "Ad-Creatives",
      para: "Alphabet Village and the subline of her own road.",
      icon: "./assets/lampidea.png",
      link: "/ad-creatives",
    },
    {
      title: "Automation",
      para: "Little Blind Text should turn around and return.",
      icon: "./assets/gear.png",
      link: "automation",
    },
    {
      title: "Infographic",
      para: "Nothing the copy said could convince her..",
      icon: "./assets/statictic.png",
      link: "/infographic",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto md:flex md:items-center md:px-10 ">
      {/* =======title and desc======== */}
      <div className="px-20 space-y-3 md:space-y-5">
        <h1 className="text-2xl md:text-4xl font-bold">
          Future of support with new shape
        </h1>
        <p className="text-[#6E6E6C]">
          Discuss your goals, determine success metrics, identify problems
        </p>
        <ul className="flex flex-col space-y-3 py-4">
          <li className="flex">
            <span>
              <CheckIcon className="w-6 mr-3 bg-[#4D46C7] text-white p-1 rounded-full " />
            </span>
            UX
          </li>
          <li className="flex">
            <span>
              <CheckIcon className="w-6 mr-3 bg-[#4D46C7] text-white p-1 rounded-full " />
            </span>
            Development Brings
          </li>
        </ul>
        <button className="basic-button -ml-[0rem]">Get started</button>
      </div>

      {/* ===CARD==== */}
      <div className="px-20 space-y-10  py-16 md:grid md:px-0 md:grid-cols-2 md:space-y-0 md:gap-5 md:content-center ">
        {cardData.map((data) => (
          <div
            key={data.title}
            className="px-10 md:px-5  py-10 md:py-5 border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-100 ease-in-out  "
          >
            <img className="mb-5 w-8" src={data.icon} />
            <h1 className="mb-2">{data.title}</h1>
            <p className="mb-5 text-[#646670]">{data.para}</p>
            <Link href="/">
              <a className="text-[#4e4ec2] font-bold ">Learn more</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Future;
