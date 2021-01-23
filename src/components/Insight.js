import React from "react";
import card1 from "../resources/images/Card1.png";
import card2 from "../resources/images/Card2.png";
import card3 from "../resources/images/Card3.png";
import InsightsData from "./Data/InsightsData";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Insight() {
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
    <div className="w-full h-full bg-gray-100">
      <div className="h-full max-w-5xl p-2 mx-auto bg-gray-100">
        <div className="my-2 ml-2 text-left">
          <h1 className="text-2xl font-medium">ACME Insight</h1>
          <p className="text-sm">
            How are factors being used around the world?
          </p>
        </div>
        <div className="">
          <Carousel
            responsive={responsive}
            swipeable={true}
            partialVisbile={true}
            showDots={true}
          >
            <InsightsData
              Import={card1}
              Title1="Global factor "
              Title2="Investing Study"
              lineImage="bg-blue-500"
              textColor="text-blue-600"
            />
            <InsightsData
              Import={card2}
              Title1="2019"
              Title2="Outlook"
              lineImage="bg-green-500"
              textColor="text-green-500"
            />
            <InsightsData
              Import={card3}
              Title1="Capital Market"
              Title2="Assumption"
              lineImage="bg-blue-500"
              textColor="text-blue-600"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Insight;
