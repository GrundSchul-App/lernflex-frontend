import React, { useContext } from "react";
import { IoIosPeople } from "react-icons/io";
import { Context } from "../../context/context";

const SelectClasses = ({ messageClass, setMessageClass }) => {
  const { classes, getClassIdAndName } = useContext(Context);

  return (
    <div className="flex grow flex-col p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
      <div className="flex grow  p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
        <IoIosPeople className="w-8 h-8 mr-2" />
        <h3 className="mr-2">Klassen</h3>

        <select
          className="form-select 
      block
      
      
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
          /*  aria-label="Default select example" */
          name=""
          id=""
          /*  value="state.classId" */
          onChange={(e) => {
            getClassIdAndName(e);
            setMessageClass("");
          }}
          defaultValue={"default"}
        >
          {/* <option selected>Klassen...</option> */}
          <option value={"default"} disabled>
            ...
          </option>
          {classes.map((classes, index) => {
            return (
              <option className="p-2" key={index} value={classes._id}>
                {classes.className}
              </option>
            );
          })}
        </select>
      </div>
      <p className=" text-red-400">{messageClass}</p>
    </div>
  );
};

export default SelectClasses;
