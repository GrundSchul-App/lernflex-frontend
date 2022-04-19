import React , {useState} from 'react';
import Calendar from 'react-calendar';

 function CalendarComponent(props) {
    const [date,setDate]=useState(new Date());

    const onChange=date=>{ setDate(date);}

    return (
        <div className="bg-white rounded-xl  w-[296px]">
         <Calendar onChange={onChange} value={date}/> 
        </div>
    )
}
export default CalendarComponent
//import * as AiIcons from "react-icons/ai";