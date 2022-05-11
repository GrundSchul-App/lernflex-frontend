import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../context/context";

function SelectSubjectUpdate({ subjectToUpdate }) {
  const { getAllSubjects, subjects, setSubjects, setSubjectId } =
    useContext(Context);

  useEffect(() => {
    // getAllClasses(token, userId)

    getAllSubjects()
      .then((res) => {
        if (res.message === "success") {
          setSubjects(res.data);
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
          Fach
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
          onChange={(e) => setSubjectId(e.target.value)}
        >
          <option disabled>...</option>

          {subjects.map((subject, index) => {
            if (subjectToUpdate._id === subject._id) {
              return (
                <option
                  className="p-2"
                  key={index}
                  defaultValue={subject._id}
                  selected
                >
                  {subject.subject_title}
                </option>
              );
            } else {
              return (
                <option className="p-2" key={index} value={subject._id}>
                  {subject.subject_title}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectSubjectUpdate;
