import React, {
  useState,
  useContext,
  useEffect,
} from "react";

import { getMonth } from "../../util";
import Month from "./Month";
import { Context } from "../../context/context";
import EventModal from "./EventModal";
import CalendarHeader from "./CalendarHeader";

function EventCalendar() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(Context);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col bg-white m-4 rounded-xl flex-auto">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default EventCalendar;
