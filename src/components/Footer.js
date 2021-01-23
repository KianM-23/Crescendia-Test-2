import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-500 h-14">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto text-xs ">
        <div className="text-gray-200">
          <p className="ml-4 ">Call us at 111-222-3333</p>
          <p>for more information</p>
        </div>
        <div className="flex items-center">
          <p className="mr-2 text-gray-200">social share</p>
          <div className="flex">
            <div className="w-6 p-1 mx-1 bg-gray-400 rounded-full">
              <i className="text-gray-700 fa fa-twitter"></i>
            </div>
            <div className="w-6 p-1 mx-1 bg-gray-400 rounded-full">
              <i className="text-gray-700 fa fa-facebook"></i>
            </div>
            <div className="w-6 p-1 mx-1 bg-gray-400 rounded-full">
              <i className="text-gray-700 fa fa-linkedin"></i>
            </div>
            <div className="w-6 p-1 mx-1 bg-gray-400 rounded-full">
              <i className="text-gray-700 fa fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
