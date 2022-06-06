import React from "react";

function Sponsored() {
  const dirImg = [
    { dir: "./assets/slack.png", id: "1" },
    { dir: "./assets/amazon.png", id: "2" },
    { dir: "./assets/woocommerce.png", id: "3" },
    { dir: "./assets/imeeundies.png", id: "4" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:py-7 items-center justify-center space-y-4 ">
      {/* PARAGRAF */}
      <div className="">
        <p className="text-[#575757] border-t inline pt-2">
          Proud patern at Hubspot & Segment
        </p>
      </div>
      {/* FOTO */}
      <div className="md:flex md:space-x-12">
        {dirImg.map((img) => (
          <img key={img.id} src={img.dir} className="mb-8 w-30" />
        ))}
      </div>
    </div>
  );
}

export default Sponsored;
