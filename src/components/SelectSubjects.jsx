import React, { useState } from 'react';
import { ImBooks } from "react-icons/im";

const SelectSubjects = ({data, getClassId}) => {

 
  return (
    <div className="flex grow mt-4 rounded-2xl bg-white  h-[75px] items-center justify-center">
      <ImBooks className="w-7 h-7 mr-2"/> 
      <h3 className="mr-2">Fächer</h3>    
                                                        {/* falta el nombre de la clase */}
      <select className="" name="" id="" onSelect={(e) => getClassId(e.target.value)}>
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

export default SelectSubjects;