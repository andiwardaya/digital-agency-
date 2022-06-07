import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
function Future() {
  const cardData = [
    {
      title: "Web Design",
      para: "One for all and all for one, Muskelhounds are always ready",
    },
  ];

  return (
    <div>
      {/* =======title and desc======== */}
      <div>
        <h1>Future of support with new shape</h1>
        <p>paragraf</p>
        <ul>
          <li>UX</li>
          <li>Development Brings</li>
        </ul>
      </div>
      {/* ===CARD==== */}
      {cardData.map((data) => (
        <div key={data.title} title={data.title} para={data.para}>
          {/* CARDS */}
        </div>
      ))}
    </div>
  );
}

export default Future;
