import React from "react";
import top from "../../resources/images/top.png";
import bottom from "../../resources/images/Bottom.png";

function InsightsData({ Title1, Title2, Import, lineImage, textColor }) {
  const bgColor = lineImage + " w-80 h-full pb-2";
  const textnewColor = textColor + " my-2 text-2xl font-bold text-left ";
  return (
    <div className={bgColor}>
      <div className="h-full p-2 bg-white shadow-2xl w-80">
        <div className="relative h-64 bg-red-200 w-54">
          <img className="w-full h-full " src={Import} alt="image" />
          <div className="absolute top-0">
            <img className="w-24 h-24" src={top} />
          </div>
          <div className="absolute bottom-0 right-0">
            <img className="w-24 h-24" src={bottom} />
          </div>
        </div>

        <div className={textnewColor}>
          <p>{Title1}</p>
          <p>{Title2}</p>
        </div>
      </div>
    </div>
  );
}

export default InsightsData;
