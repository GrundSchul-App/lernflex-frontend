import React, { useContext } from 'react';
import { ImBooks } from "react-icons/im";
import { Context } from "../../context/context";

const SelectSubjects = () => {
const {subjects,getSubjectId,getSubjectName}=useContext(Context)


  const getSubjectIdAndName = (e) => {
    console.log(e.target.value);
    console.log(e.target.options[e.target.selectedIndex].text);
    getSubjectId(e.target.value);
    getSubjectName(e.target.options[e.target.selectedIndex].text);
  };

  return (
    <div className="flex grow p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
      <ImBooks className="w-7 h-7 mr-2"/> 
      <h3 className="mr-2">Fächer</h3>    
                                                      
      <select className="form-select 
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
        name="" id="" onChange={getSubjectIdAndName}>
        {subjects.map((subject, index) => {
          return (
            <option className="p-2" key={index} value={subject._id}>
              {subject.subject_title}
            </option>
          )
        })}
        
      </select>
    </div>
  );
}

export default SelectSubjects;