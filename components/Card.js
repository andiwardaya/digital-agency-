import React from "react";

function Card({ icon, title, para }) {
  return (
    <div className="p-10 border border-gray-200 rounded-xl hover:shadow-xl text-center space-y-3">
      <h1 className="w-14 mx-auto text-purple-600 p-3 rounded-full bg-purple-200">
        {icon}
      </h1>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-[#656562]">{para}</p>
    </div>
  );
}

export default Card;
