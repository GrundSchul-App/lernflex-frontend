import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../context/context";

function SelectClass() {
  const { getAllClasses, classes, setClasses, setClassId } =
    useContext(Context);

  useEffect(() => {
    
    getAllClasses()
      .then((res) => {
        if (res.message === "success") {
          setClasses(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/4">
        <label
          className="block text-gray-500 font-bold md:text-right 
                mb-1 md:mb-0 pr-4"
          htmlFor="inline-name"
        >
          Klasse
        </label>
      </div>
      <div className="md:w-3/4">
        <select
          className="form-select 
          block
          px-3
          py-1.5
          mr-2
          text-base
          font-normal
          text-gray-700
          bg-gray-200 bg-clip-padding bg-no-repeat
          border-solid border-gray-200 
          rounded
          transition
          ease-in-out
          m-0
          border-2
          focus:text-gray-700 focus:bg-white focus:border-green-500
          focus:outline-none w-full"
          name=""
          id=""
          onChange={(e) => setClassId(e.target.value)}
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            ...
          </option>

          {classes.map((classItem, index) => {
            return (
              <option
                className="p-2"
                key={index}
                name="class"
                value={classItem._id}
              >
                {classItem.className}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectClass;
