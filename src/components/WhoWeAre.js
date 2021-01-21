import React from "react";
import gradient from "../resources/images/Gradient.png";

function WhoWeAre() {
  return (
    <div
      className="w-full h-full bg-red-400 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${gradient})` }}
    >
      <div className="flex items-center justify-center max-w-5xl mx-auto h-72">
        <div className="flex flex-col items-center justify-center w-full h-full text-gray-100">
          <h1 className="my-2 font-sans text-2xl font-bold tracking-wide">
            Our Commitment to Professionals
          </h1>
          <p className="text-lg">
            We help our partners deliver industry leading results with a
            commitment to excellence, thought-provoking Insights and
          </p>
          <p className="text-lg">
            experienced distribution. We are laser focused on Our shared goal -
            helping clients achieve their objectives.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
