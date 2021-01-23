import React from "react";
import banner from "../resources/images/HeaderImg.png";

function Banner() {
  return (
    <div className="w-full h-full ">
      <div className="text-gray-100 bg-blue-500 lg:hidden">
        <h2>Research Professional Platform</h2>
      </div>
      <div className="hidden w-full h-4 bg-blue-900 lg:block"></div>
      <div
        className="w-full bg-no-repeat lg:bg-cover h-96 "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col justify-center pl-4 lg:mx-auto lg:max-w-5xl items-left h-96">
          <div className="text-4xl font-bold text-left text-white">
            <p>ACME wealth</p>
            <p>Management Platform</p>
          </div>
          <div className="text-2xl font-normal text-left text-white">
            <p>Investment excellence</p>
            <p>Diversity of thought</p>
            <p>Organizational strenght</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
