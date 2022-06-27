import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    console.log(scrollTop);
  }, [scrollTop]);

  const NavLink = [
    { name: "About Us", alamat: "/about" },
    { name: "Team", alamat: "/team" },
    { name: "Portfolio", alamat: "/portofolio" },
    { name: "Blog", alamat: "/blog" },
    { name: "Faq", alamat: "/Faq" },
  ];

  return (
    <div
      className={`max-w-6xl w-full ${scrolling ? "static" : "fixed"} ${
        scrollTop === 0 ? "bg-transparent" : "bg-white"
      } h-30  z-10  mx-auto left-[50%] right-[50%] translate-y-[-10%] translate-x-[-50%] transition-all ease-out duration-300`}
    >
      <div className="md:flex  justify-between md:items-center py-4 md:px-10 px-3">
        <div>
          <Link href="/">
            <img
              className="w-12 cursor-pointer "
              src="/assets/logo-final.png"
            />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-7 absolute top-5 right-5 cursor-pointer md:hidden"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </div>

        <div className="">
          <ul
            className={`md:flex md:items-center md:space-x-10 md:static absolute  md:z-auto z-[-1] ${
              open ? "left-0 fixed" : "left-[100%]"
            }  w-full md:w-auto transition-all duration-500 ease-in-out pt-8 md:pt-0 bg-white md:bg-transparent py-10 md:py-0`}
          >
            {NavLink.map((link) => (
              <li key={link.name} className="my-7 ml-8 md:my-0 ">
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
