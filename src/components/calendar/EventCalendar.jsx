import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../../util";
import Month from "./Month";
import { Context } from "../../context/context";
import EventModal from "./EventModal";
import CalendarHeader from "./CalendarHeader";
import CalendarComponents from "../CalendarComponent";
import InfosOnlineCurse from "../RemoteCourse/InfosOnlineCurse";

function EventCalendar() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } =
    useContext(Context);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="flex mr-4 ">
        <div className="max-h-[824px] flex flex-col bg-white mx-4 mt-4 rounded-xl flex-auto ">
          <CalendarHeader />
          <div className="flex flex-1">
            <Month month={currenMonth} />
          </div>
        </div>
        <div className=" md:w-1/4 w-1/4 overflow-y-scroll scrollbar-hide">
          <CalendarComponents />
          <InfosOnlineCurse />
        </div>
      </div>
    </React.Fragment>
  );
}

export default EventCalendar;
