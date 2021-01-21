import React from "react";
import banner from "../resources/images/HeaderImg.png";

function Banner() {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-4 bg-blue-900 "></div>
      <div
        className="w-full bg-no-repeat bg-cover h-96 "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-5xl mx-auto bg-red-400 h-96">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
