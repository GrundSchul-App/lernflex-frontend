import React, { useContext, useEffect } from "react";
import SelectClasses from "../Attendance/SelectClasses";
import SelectSubjects from "../Attendance/SelectSubjects";
import { Context } from "../../context/context";
import { FcSearch } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";

function TeacherMain(props) {
  const {
    getAllClasses,
    getAllSubjects,
    setClasses,
    setSubjects,
    classId,
    subjectId,
    getTeacherByClassIdAndSubjectId,
    setTeachers,
    getAllTeachers,
  } = useContext(Context);

  const getAllTeacherByClassAndSubject = () => {
    getTeacherByClassIdAndSubjectId(classId, subjectId)
      .then((res) => {
        if (res.message === "success") {
          // console.log("res.data teacher by class and id", res.data);

          setTeachers(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
    // console.log(classId , subjectId);
  };

  const allTeacher = () => {
    getAllTeachers().then((res) => {
      if (res.message === "success") {
        setTeachers(res.data);
        // console.log("result", res.data);
      }
    });
  };

  useEffect(() => {
    // getAllClasses(token, userId)
    getAllClasses().then((res) => {
      if (res.message === "success") {
        setClasses(res.data);
        // console.log(res.data);
      }
    });
    getAllSubjects().then((res) => {
      if (res.message === "success") {
        setSubjects(res.data);
        // console.log('result2', res.data);
      }
    });
  }, []);

  return (
    <div className="flex-col  sm:w-[100%] sm:mr-4 mt-4">
      <div className="flex justify-between ml-4  gap-2 flex-wrap">
        <SelectClasses />
        <SelectSubjects />

        <button
          onClick={getAllTeacherByClassAndSubject}
          type="button"
          className="flex grow  
        rounded-2xl bg-green-200 h-[75px] 
        items-center justify-center transition-all
         hover:bg-green-500 text-black-800  text-l "
        >
          <FcSearch className="m-2" />
          Suchen
        </button>
        <button
          onClick={allTeacher}
          className="flex grow  
        rounded-2xl bg-green-200 h-[75px]  text-s items-center justify-center transition-all hover:bg-green-500 "
        >
          <GiTeacher className="w-6 h-6 mr-2 " />
          Alle Lehrer/innen
        </button>
      </div>
    </div>
  );
}
export default TeacherMain;
