import { StarIcon } from "@heroicons/react/solid";
import React from "react";

function CardCarousel({ title, para, imgProfile }) {
  return (
    <div className="flex flex-col items-center justify-center p-10 border mx-5 border border-gray-200 rounded-xl hover:shadow-xl ">
      <img
        src={imgProfile}
        className="w-20 h-20 object-cover rounded-full shadow-xl mb-2"
      />
      <div className="flex">
        <StarIcon className="w-5 text-blue-700" />
        <StarIcon className="w-5 text-blue-700" />
        <StarIcon className="w-5 text-blue-700" />
        <StarIcon className="w-5 text-blue-700" />
        <StarIcon className="w-5 text-blue-700" />
      </div>

      <h2 className="font-bold mb-5">{title}</h2>
      <p className="text-gray-500">{para}</p>
    </div>
  );
}

export default CardCarousel;
