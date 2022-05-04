import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";

function HomeworkTypeUpdate({ homeworkTypeToUpdate }) {
  const { setHomeworkType } = useContext(Context);

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/4">
        <label
          className="block text-gray-500 font-bold md:text-right 
                mb-1 md:mb-0 pr-4"
          htmlFor="inline-name"
        >
          Type
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
          onChange={(e) => setHomeworkType(e.target.value)}
        >
          <option disabled>...</option>

          {homeworkTypeToUpdate === "info" && (
            <>
              <option defaultValue="info" className="p-2" selected>
                info
              </option>
              <option value="homework" className="p-2">
                homework
              </option>
              <option value="online" className="p-2">
                online
              </option>
            </>
          )}
          {homeworkTypeToUpdate === "homework" && (
            <>
              <option value="info" className="p-2">
                info
              </option>
              <option defaultValue="homework" className="p-2" selected>
                homework
              </option>
              <option value="online" className="p-2">
                online
              </option>
            </>
          )}
          {homeworkTypeToUpdate === "online" && (
            <>
              <option value="info" className="p-2">
                info
              </option>
              <option value="homework" className="p-2">
                homework
              </option>
              <option defaultValue="online" className="p-2 " selected>
                online
              </option>
            </>
          )}                      
        </select>
      </div>
    </div>
  );
}

export default HomeworkTypeUpdate;
