import React, { useState,useContext} from "react";
import Calendar from "react-calendar";
import {Context} from '../context/context'

function CalendarComponent(props) {
const {selectDate,setSelectDate}=useContext(Context)
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  // console.log("select", selectDate);
  
  return (
    <div className="bg-white rounded-xl w-full mt-4 py-[25px] px-[25px] ">
        
      <Calendar onChange={onChange} value={date} locale="de-DE" className="text-gray-500" onClick={setSelectDate(date)}/>
    </div>
  );
}
export default CalendarComponent;

