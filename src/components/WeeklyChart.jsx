import React from "react";

function WeeklyChart({ weeklyData }) {
  const days = ["일","월","화","수","목","금","토"];
  return (
    <div className="flex justify-between items-end h-32 gap-1">
      {weeklyData.map((v,i)=>(
        <div key={i} className="flex flex-col items-center">
          <div className="bg-blue-500 w-6 rounded" style={{height:`${v}px`}}></div>
          <span className="text-xs">{days[i]}</span>
        </div>
      ))}
    </div>
  );
}

export default WeeklyChart;
