import React from "react";

export default function ShowTotals({ icon, title, value }) {
  return (
    <div className="flex flex-1 items-center justify-between gap-8 px-8 py-10 bg-white shadow-1 rounded-lg mb-8">
      <div className="flex items-center">
        <div className="flex flex-shrink-0 flex-grow-0 items-center justify-center basis-[58px] h-[58px] rounded-full bg-blue">
          <img src={icon} alt="icon" />
        </div>
        <span className="text-13 ml-5 font-medium">{title}</span>
      </div>
      <div className="text-35 font-semibold">{value}</div>
    </div>
  );
}
