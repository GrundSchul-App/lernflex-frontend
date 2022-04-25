import React, { useState } from "react";
import Calendar from "react-calendar";

function CalendarComponent(props) {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="bg-white rounded-xl w-full mt-4 py-[25px] px-[25px] ">
        
      <Calendar onChange={onChange} value={date} locale="de-DE" className="text-gray-500"/>
    </div>
  );
}
export default CalendarComponent;

