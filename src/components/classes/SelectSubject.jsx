import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../context/context";

function SelectSubject({ ind }) {
  const {
    getAllSubjects,
    subjects,
    setSubjects,
    moduleSubjectTeacher,
    setModuleSubjectTeacher,
  } = useContext(Context);

  const handleInputChange = (e, index) => {
    const list = [...moduleSubjectTeacher];
    list[index]["subject"] = e.target.value;
    setModuleSubjectTeacher(list);
  };

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
    <div className="md:flex md:items-center mb-6 w-full">
      <div>
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
          onChange={(e) => handleInputChange(e, ind)}
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            Fach...
          </option>

          {subjects.map((subject, index) => {
            return (
              <option
                className="p-2"
                key={index}
                name="subject"
                value={subject._id}
              >
                {subject.subject_title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectSubject;
