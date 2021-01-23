import React from "react";
import Carousel from "react-multi-carousel";
import EventsData from "./Data/EventsData";

function Events() {
  const dates = [
    {
      month: "Jan",
      day: "28",
      title: "Insight Exchange Network",
      name: "Join Us for this conference showcasing innovation",
      state: "Chicago, IL",
    },
    {
      month: "Feb",
      day: "12",
      title: "citywide Buyer's Retreat",
      name:
        "Find out how banks are responding to the changing future of interest",
      state: "The Wagner, New York",
    },
    {
      month: "May",
      day: "6",
      title: "Research Exchange",
      name: "fint the best online resources to help with your investments",
      state: "London, England",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  return (
    <div className="w-full h-full py-10 bg-gray-100">
      <div className="h-full max-w-5xl py-2 mx-auto bg-gray-100 0">
        <div className="my-6 ml-6 text-left">
          <h1 className="text-2xl">Upcoming Events</h1>
          <p>This needs a great tagline, but I'll fill it in later</p>
        </div>
        <div className="px-4">
          <Carousel
            responsive={responsive}
            swipeable={true}
            partialVisbile={true}
            showDots={true}
          >
            {dates.map((date) => (
              <EventsData date={date} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Events;
