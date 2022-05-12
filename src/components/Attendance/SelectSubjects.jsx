import React, { useContext } from "react";
import { ImBooks } from "react-icons/im";
import { Context } from "../../context/context";

const SelectSubjects = ({ messageSubject, setMessageSubject }) => {
  const { subjects, setSubjectId, setSubjectName } = useContext(Context);

  const getSubjectIdAndName = (e) => {
    setSubjectId(e.target.value);
    setSubjectName(e.target.options[e.target.selectedIndex].text);
  };

  return (
    <div className="flex grow flex-col p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
      <div className="flex grow p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
        <ImBooks className="w-7 h-7 mr-2" />
        <h3 className="mr-2">Fächer</h3>

        <select
          className="form-select 
      block
      
      px-2
      py-1.5
    
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
          onChange={(e) => {
            getSubjectIdAndName(e);
            setMessageSubject("");
          }}
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            ...
          </option>
          {subjects.map((subject, index) => {
            return (
              <option className="p-2" key={index} value={subject._id}>
                {subject.subject_title}
              </option>
            );
          })}
        </select>
      </div>
      <p className=" text-red-400">{messageSubject}</p>
    </div>
  );
};

export default SelectSubjects;
