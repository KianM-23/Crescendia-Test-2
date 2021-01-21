import React from "react";
import card1 from "../resources/images/Card1.png";
import InsightsData from "./Data/InsightsData";

function Insight() {
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="h-full max-w-5xl p-2 mx-auto bg-gray-100">
        <div className="my-2 ml-2 text-left">
          <h1 className="text-2xl font-medium">ACME Insight</h1>
          <p className="text-sm">
            How are factors being used around the world?
          </p>
        </div>
        <div className="flex items-center justify-around">
          <InsightsData
            Import={card1}
            Title1="Global factor "
            Title2="Investing Study"
            lineImage="bg-blue-500"
            textColor="text-blue-600"
          />
          <InsightsData
            Import={card1}
            Title1="2019"
            Title2="Outlook"
            lineImage="bg-green-500"
            textColor="text-green-500"
          />
          <InsightsData
            Import={card1}
            Title1="Capital Market"
            Title2="Assumption"
            lineImage="bg-blue-500"
            textColor="text-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

export default Insight;
