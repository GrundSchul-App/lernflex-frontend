import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'

function SelectDate(props) {
    

    return (
        <div className="flex flex-col justify-center ">
            <div className="flex   p-[1%] rounded-xl bg-white h-19  items-center ">
                <BsCalendarDate className="w-5 h-5 mr-2 "/>
                <span className="w-full">Datum</span>
                <input
            
            className="
            
            
            m-2
            w-full
            border border-gray-300  rounded-md"
            name="birthday"
            type="date"
          />  
            </div>
           
        </div>
    )
}
export  default SelectDate;
