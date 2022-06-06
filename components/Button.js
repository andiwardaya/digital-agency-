import React from "react";
import Purpose from "./Purpose";

function Button({ children }) {
  return (
    <button className=" ml-8 md:ml-0 bg-[#010AE9] py-2 px-4 rounded-full shadow-xl text-white hover:bg-blue-400">
      {children}
    </button>
  );
}

export default Button;
