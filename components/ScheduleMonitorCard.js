import React from "react";

function ScheduleMonitorCard({ desc, title, para, more }) {
  return (
    <div className="p-10 px-20 flex-1">
      <h3 className="font-bold text-[#FF8400] mb-1">{desc}</h3>
      <h1 className="font-bold text-2xl mb-2">{title}</h1>
      <p className="text-[#747984] mb-8">{para}</p>
      <div className="flex items-center space-x-4 text-[#017EFA]">
        <Link href="/">
          <a>{more}</a>
        </Link>
        <div className="w-8 h-8">
          <ArrowNarrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default ScheduleMonitorCard;
