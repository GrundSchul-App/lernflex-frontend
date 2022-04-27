import React from "react";
import { BiFilterAlt } from "react-icons/bi";


function SearchStudentBar(props) {
  return (
    <div className="flex  p-[1%] rounded-xl bg-white max-w-[30%]   justify-center">
    
      <BiFilterAlt className="w-6 h-6 mr-3" />
      <h3 className="mr-[5px]">Filter nach</h3>

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
        name=""
        id=""
        defaultValue={"default"}
      >
        <option value={"default"} disabled>
          ...
        </option>
        <option value="Name">Name</option>
        <option value="Klasse">Klasse</option>
        <option value="">Lehrer</option>
      </select>

      
      </div>
  
  );
}
export default SearchStudentBar;
