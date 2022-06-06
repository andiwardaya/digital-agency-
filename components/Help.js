import React from "react";
import Button from "./Button";
import Card from "./Card";
import { SearchIcon, CogIcon, FastForwardIcon } from "@heroicons/react/solid";

function Help() {
  return (
    <div className="m-w-3xl mx-auto text-center py-16 px-5 space-y-3">
      {/* TITLE */}
      <div className="py-10 space-y-3">
        <h1 className="text-3xl font-bold ">How can we help your business?</h1>
        <p className="text-[#656562] text-sm">
          when you resell besnik, you build trust and increase
        </p>
      </div>
      {/* CARD */}
      <div className="space-y-8 px-16 md:flex md:items-center md:space-y-0 justify-between md:space-x-9 ">
        <Card
          icon={<SearchIcon />}
          title={"Find out what you need"}
          para={"We present you a proposal and discuss nitty-gritty like"}
        />
        <Card
          icon={<CogIcon />}
          title={"Find out what you need"}
          para={"We present you a proposal and discuss nitty-gritty like"}
        />
        <Card
          icon={<FastForwardIcon />}
          title={"Find out what you need"}
          para={"We present you a proposal and discuss nitty-gritty like"}
        />
      </div>
      <Button className="mb-7">Become a Partner</Button>
    </div>
  );
}

export default Help;
