import React, { useContext } from "react";
import { Context } from "../../context/context";

function HomeworkText() {
  const { setHomeworkText, homeworkText } = useContext(Context);

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/4">
        <label
          className="block text-gray-500 font-bold md:text-right 
        mb-1 md:mb-0 pr-4"
          htmlFor="inline-name"
        >
          Hausaufgabe Beschreibung
        </label>
      </div>
      <div className="md:w-3/4">
        <input
          className="bg-gray-200 appearance-none border-2 
        border-gray-200 rounded w-full py-2 px-4
         text-gray-700 leading-tight focus:outline-none 
         focus:bg-white focus:border-green-500"
          id="inline-name"
          type="text"
          onChange={(e) => setHomeworkText(e.target.value)}
          value={homeworkText}
          placeholder="Mathe Buch, Seite 5..."
        />
      </div>
    </div>
  );
}

export default HomeworkText;
