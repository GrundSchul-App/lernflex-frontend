import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../context/context";

function SelectTeacherUpdate({ ind, subjectTeacherData }) {
  const {
    getAllTeachers,
    moduleSubjectTeacher,
    setModuleSubjectTeacher,
    teachers,
    setTeachers,
  } = useContext(Context);

  const handleInputChange = (e, index) => {
    const list = [...moduleSubjectTeacher];
    list[index]["teacher"] = e.target.value;
    setModuleSubjectTeacher(list);
  };

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
    <div className="md:flex md:items-center mb-6 ml-2 w-full">
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
        >
          <option disabled>Lehrer/in...</option>
          {teachers.map((teacher, index) => {
            if (subjectTeacherData.teacher !== undefined) {
              if (subjectTeacherData.teacher._id === teacher._id) {
                return (
                  <option key={index} value={teacher._id} selected>
                    {teacher.firstName} {teacher.lastName}
                  </option>
                );
              } else {
                return (
                  <option className="p-2" key={index} value={teacher._id}>
                    {teacher.firstName} {teacher.lastName}
                  </option>
                );
              }
            } else {
              return (
                <option className="p-2" key={index} value={teacher._id}>
                  {teacher.firstName} {teacher.lastName}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectTeacherUpdate;
