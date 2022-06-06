import Link from "next/link";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);
  const NavLink = [
    { name: "About Us", alamat: "/" },
    { name: "Team", alamat: "/" },
    { name: "Portfolio", alamat: "/" },
    { name: "Blog", alamat: "/" },
    { name: "Faq", alamat: "/" },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full fixed md:sticky bg-transparent top-0 left-0 z-10">
      <div className="md:flex  justify-between md:items-center py-4 md:px-10 px-3">
        <div>
          <img className="w-12 cursor-pointer " src="/assets/logo-final.png" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-7 absolute top-5 right-5 cursor-pointer md:hidden"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </div>

        <div>
          <ul
            className={`md:flex md:items-center md:space-x-10 md:static absolute  md:z-auto z-[-1] ${
              open ? "left-0" : "left-[100%]"
            }  w-full md:w-auto transition-all duration-500 ease-in-out pt-8 md:pt-0`}
          >
            {NavLink.map((link) => (
              <li key={link.name} className="my-7 ml-8 md:my-0  ">
                <Link href={link.alamat}>
                  <a className="text-gray-600 hover:text-gray-400 ">
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
            <Button>Sign Up</Button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
