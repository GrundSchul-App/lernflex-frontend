import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";

const SelectClasses = ({ data, getClassId, getClassName }) => {
  const getClassIdAndName = (e) => {
    console.log({
      classId: e.target.value,
      className: e.target.options[e.target.selectedIndex].text,
    });
    console.log(e.target.value);
    console.log(e.target.options[e.target.selectedIndex].text);
    getClassId(e.target.value);
    getClassName(e.target.options[e.target.selectedIndex].text);
  };

  return (
    <div className="flex grow  p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
      <IoIosPeople className="w-8 h-8 mr-2" />
       <h3 className="mr-2">Klassen</h3>

      <select
        className="form-select 
      block
      
      px-3
      py-1.5
      mr-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
       border border-solid border-gray-300 
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-green-600
       focus:outline-none"
       /*  aria-label="Default select example" */
        name=""
        id=""
       /*  value="state.classId" */
        onChange={getClassIdAndName}
      >
        {/* <option selected>Klassen...</option> */}
        {data.map((data, index) => {
          return (
            <option className="p-2" key={index} value={data._id}>
              {data.className}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectClasses;
