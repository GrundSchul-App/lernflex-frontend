import dayjs from "dayjs";
import "dayjs/locale/de";



import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";


export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } =
    useContext(Context);


  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().locale("de-DE").format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  useEffect(() => {
    const events = savedEvents.filter((evt) => {
      return (
        dayjs(evt.date).format("DD-MM-YY") === day.format("DD-MM-YY")
      );
    });
    setDayEvents(events);
  }, [savedEvents, day]);

  return (
    <div className="border border-gray-200 flex flex-col px-1 h-36 ">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("dddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer h-[100px] overflow-y-auto overflow-hidden"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-gray-200 p-1 mb-1 mx-auto text-gray-600 text-sm rounded-lg h-fit overflow-y-hidden overflow-y-auto `}
          >
            <h2 className="text-md font-bold">{evt.title} </h2>
            <p className="truncate h-auto text-xs">{evt.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
