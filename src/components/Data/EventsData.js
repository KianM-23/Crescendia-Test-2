import React from "react";
import ascent from "../../resources/images/ascent.png";
import corner from "../../resources/images/Corner.png";

function EventsData({ date, title, name, month, state }) {
  return (
    <div className="relative h-full pl-4 mx-2 text-left bg-blue-600 lg:h-full lg:w-80 w-7/8">
      <div className="flex flex-col items-center justify-center w-20 h-20 space-y-0 text-white bg-blue-900">
        <p>{date.month}</p>
        <p className="text-3xl">{date.day}</p>
      </div>
      <div className="my-2 text-white ">
        <p className="text-3xl font-semibold lg:text-xl ">{date.title}</p>
        <p className="mt-2 text-2xl lg:font-semibold lg:text-sm">{date.name}</p>
      </div>
      <button className="w-40 h-10 mb-6 text-white border border-black border-white lg:my-2 ">
        <p> Get more insight</p>
      </button>
      <div className="flex-1 w-full h-10 pr-4 font-semibold text-right ">
        {/* <p>{date.state}</p> */}
        <div className="absolute bottom-0 right-0 ">
          <img src={ascent} />
        </div>
        <div className="absolute bottom-0 z-10 pt-2 right-4">
          <p className="font-bold">{date.state}</p>
        </div>
      </div>
    </div>
  );
}

export default EventsData;
