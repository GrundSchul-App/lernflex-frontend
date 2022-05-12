import React, { useState, useContext } from "react";
import Day from "./Day";
import { Context } from "../../context/context";

function Week() {
  const { setShowDay } = useContext(Context);

  const weekDays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
  const [createDay, setCreateDay] = useState(undefined);
  const [buttonOn, setButtonOn] = useState(false);

  function onClick(e, index) {
    e.preventDefault();
    setShowDay(true);
    setCreateDay(index);
  }

  return (
    <>
      <div className="flex justify-between">
        {weekDays.map((day, index) => {
          return (
            <div key={index}>
              <button
                className="flex px-2 py-2  rounded-2xl bg-green-200 
        items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg
        active:bg-green-300 active:shadow-lg"
                onClick={(e) => onClick(e, index)}
              >
                + {day}
              </button>
            </div>
          );
        })}
      </div>

      {createDay !== undefined && <Day createDay={createDay} />}
    </>
  );
}

export default Week;
