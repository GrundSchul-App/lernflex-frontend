import React, { useState,useContext} from "react";
import Calendar from "react-calendar";
import {Context} from '../context/context'

function CalendarComponent(props) {
const {selectDate,setSelectDate,getAllEventByDate, setEventList}=useContext(Context)
  const [date, setDate] = useState(new Date());
  const date1= selectDate ? new Date(selectDate).toLocaleDateString() : "";
  console.log("date1", date1);

 
    const dateSuche = date1.split("/").reverse().join("-");

  const onChange = (date) => {
    
    console.log(date);
    
    console.log(dateSuche);
    getAllEventByDate(dateSuche).then((res) => {
      if(res.message === "success"){
    setEventList(res.data);
    console.log("eventsList", res.data);
      }
    })
    setDate(date);
  };
  // console.log("select", selectDate);
  
  return (
    <div className="bg-white rounded-xl w-full mt-4 py-[25px] px-[25px]">
        
      <Calendar onChange={onChange} value={date} locale="de-DE" className="text-gray-500" onClick={setSelectDate(date)}/>
    </div>
  );
}
export default CalendarComponent;

