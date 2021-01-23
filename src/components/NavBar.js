import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../resources/images/Logo.png";
import logo_mobile from "../resources/images/acme-mobile.png";
import title from "../resources/images/Title.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const toggleClass = () => {
    let styles = "pt-4 pb-8";
    if (toggle) {
      return styles + " block";
    }
    return styles + " hidden";
  };
  return (
    <div>
      <div className="items-baseline hidden h-full max-w-5xl p-2 mx-auto my-2 bg-white lg:flex ">
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
      <div className="items-baseline h-full max-w-5xl mx-auto bg-white lg:hidden ">
        <div className="flex items-baseline justify-between bg-gray-200">
          <div className="w-1/3"></div>
          <div className="flex justify-center w-1/3">
            <img className="h-10" src={logo_mobile} />
          </div>
          <div className="flex justify-end w-1/3 px-2">
            <button onClick={() => setToggle(!toggle)}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
          </div>
        </div>

        <div className={toggleClass()}>
          <h2 className="text-blue-500">Site Links</h2>
          <hr />
          <ul className="flex flex-col items-baseline w-full font-medium">
            <li className="w-full px-1 py-1 m-1 text-gray-600 bg-gray-200">
              Home
            </li>
            <li className="w-full px-1 py-1 m-1 text-gray-600 bg-gray-200">
              About Us
            </li>
            <li className="w-full px-1 py-1 m-1 text-gray-600 bg-gray-200">
              Insights
            </li>
            <li className="w-full px-1 py-1 m-1 text-gray-600 bg-gray-200">
              Events
            </li>
            <li className="w-full px-1 py-1 m-1 text-gray-600 bg-gray-200">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
