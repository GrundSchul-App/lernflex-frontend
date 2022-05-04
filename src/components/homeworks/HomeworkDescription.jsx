import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";

function HomeworkDescription() {

    const {
        homeworkDescription,
        setHomeworkDescription,
      } = useContext(Context);

    

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/4">
        <label
          className="block text-gray-500 font-bold md:text-right 
                mb-1 md:mb-0 pr-4"
          htmlFor="text-area"
        >
          Beschreibung
        </label>
      </div>
      <div className="md:w-3/4">
        <textarea
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border-2 border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none
      "
          id="text-area"
          rows="3"
          placeholder="..."
          value={homeworkDescription}
          onChange={(e) => setHomeworkDescription(e.target.value)}
        ></textarea>

    
      </div>
    </div>
  );
}

export default HomeworkDescription;
