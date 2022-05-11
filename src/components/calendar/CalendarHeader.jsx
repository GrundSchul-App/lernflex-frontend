import dayjs from "dayjs";
import "dayjs/locale/de";


import React, { useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Context } from "../../context/context.js";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(Context);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().locale("de-DE").month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Heute
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <FaChevronLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <FaChevronRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex))
          .locale("de-DE")
          .format("MMMM YYYY")}
      </h2>
    </header>
  );
}
