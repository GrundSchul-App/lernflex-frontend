import React,  from 'react';
import { IoIosPeople } from "react-icons/io";


const SelectClasses = ({data, getClassId}) => {

  const getClassIdAndName = (e) =>{
    getClassId(e.target.value); 
    //getClassName(data.className);
  }

 
  return (
    <div className="flex grow mt-4 rounded-2xl bg-white  h-[75px] items-center justify-center">
      <IoIosPeople className="w-7 h-7 mr-2"/> 
      <h3 className="mr-2">Klassen</h3>    
                                                      
      <select className="" name="" id="" onSelect={getClassIdAndName}>
        {data.map((data, index) => {
          return (
            <option key={index} value={data.id}>
              {data.className}
            </option>
          )
        })}
        
      </select>
    </div>
  );
}

export default SelectClasses;