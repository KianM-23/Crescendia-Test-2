import React from "react";

function EventsData() {
  return (
    <div className="h-full pl-4 text-left bg-red-400 w-80">
      <div className="flex flex-col items-center justify-center w-20 h-20 space-y-0 text-white bg-red-800">
        <p>JAN</p>
        <p className="text-3xl">28</p>
      </div>
      <div className="my-2">
        <p className="text-xl">Insight Exchange Network</p>
        <p className="text-xs">
          Join us for this conference showcasing innovation
        </p>
      </div>
      <button className="w-40 h-10 my-4 border border-black">
        Get more insight
      </button>
      <div className="flex items-center justify-end w-full h-10 pr-4 text-right bg-gray-100">
        <p>Chicago, IL</p>
      </div>
    </div>
  );
}

export default EventsData;
