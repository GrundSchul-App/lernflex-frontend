import React from "react";

function DaysPlan(props) {
  const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

  return (
    <div className="bg-white border-solid rounded-xl flex min-h-[450px] justify-between p-4 mt-4 overflow-hidden w-full">
      {days.map((day) => {
        return (
          <div className="mx-auto">
            <button type="button" className="bg-teal-300 mt-2 rounded-lg p-3">
              {day} +{" "}
            </button>
            <div className="bg-teal-300 h-[85%]  w-[100%]] ml-[15px] mt-4 border-solid border-black border-2 rounded-xl "></div>
          </div>
        );
      })}

      <div></div>
    </div>
  );
}
export default DaysPlan;
