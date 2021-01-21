import React from "react";

function InsightsData({ Title1, Title2, Import, lineImage, textColor }) {
  const bgColor = lineImage + " w-80 h-full pb-2";
  const textnewColor = textColor + " my-2 text-2xl font-bold text-left ";
  return (
    <div className={bgColor}>
      <div className="h-full p-2 bg-gray-100 shadow-2xl w-80">
        <div className="h-64 bg-red-200 w-54">
          <img className="w-full h-full" src={Import} alt="image" />
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
