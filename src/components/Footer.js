import React from "react";

function Footer() {
  return (
    <div className="w-full h-10 bg-red-800">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto text-xs bg-blue-400">
        <div>
          <p className="ml-4">Call us at 111-222-3333</p>
          <p>for more information</p>
        </div>
        <div>
          <p>social share</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
