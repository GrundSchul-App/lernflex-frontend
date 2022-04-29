import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../context/context";

function ClassTeacherSelect() {
  const { getAllTeachers, setClassTeacher, teachers, setTeachers } =
    useContext(Context);

  useEffect(() => {
    // getAllClasses(token, userId)

    getAllTeachers()
      .then((res) => {
        if (res.message === "success") {
          setTeachers(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="inline-title"
        >
          Klassenlehrer/in
        </label>
      </div>
      <div className="md:w-2/3">
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
          onChange={(e) => setClassTeacher(e.target.value)}
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            Lehrer/in...
          </option>
          {teachers.map((teacher, index) => {
            return (
              <option className="p-2" key={index} value={teacher._id}>
                {teacher.firstName} {teacher.lastName}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default ClassTeacherSelect;
