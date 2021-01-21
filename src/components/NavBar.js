import React from "react";
import logo from "../resources/images/Logo.png";
import title from "../resources/images/Title.png";

function NavBar() {
  return (
    <div className="flex items-baseline h-full max-w-5xl p-2 mx-auto my-2 bg-white">
      <div className="flex items-baseline">
        <div className="w-24 h-20 bg-red-500">
          <img className="w-full h-full" src={logo} />
        </div>
        <div className="w-56 h-20 bg-white border-r-2 border-gray-400 ">
          <img className="w-48 h-full" src={title} />
        </div>
      </div>
      <ul className="flex items-baseline w-full font-medium justify-evenly">
        <li>Home</li>
        <li>About Us</li>
        <li>Insights</li>
        <li>Events</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default NavBar;
