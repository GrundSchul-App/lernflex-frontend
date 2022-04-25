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
  const { monthIndex, showEventModal } = useContext(Context);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="flex">
        <div className="h-fit flex flex-col bg-white m-4 rounded-xl flex-auto ">
          <CalendarHeader />
          <div className="flex flex-1">
            <Month month={currenMonth} />
          </div>
        </div>
        <div className=" md:w-1/4 w-1/4">
          <CalendarComponents />
          <InfosOnlineCurse />
        </div>
      </div>
    </React.Fragment>
  );
}

export default EventCalendar;
