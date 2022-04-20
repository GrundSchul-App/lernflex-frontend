import React, { useContext, useEffect, useState } from "react";
import SelectClasses from "./SelectClasses";
import SelectSubjects from "./SelectSubjects";
import MainTable from "./MainTable";
import { Context } from "../../context/context";
/* import {
  getAllClasses,
  getAllSubjects,
  getStudentsByClassId,
  createAttendanceList,
} from "../../functions/DatabaseAttendanceList"; */

const Main = () => {
  const { getAllClasses,
    getAllSubjects,
    getStudentsByClassId,setClasses,classId,setSubjects,className,subjectName } = useContext(Context);

  // const dataArray = [
  //   {
  //     firstName: "pepe",
  //     lastName: "perez",
  //     birthDate: "2012-04-03",
  //     gender: "M",
  //   },
  //   { firstName: "Rosa", lastName: "Lu", birthDate: "2012-05-03", gender: "F" },
  //   { firstName: "Lola", lastName: "Li", birthDate: "2012-06-03", gender: "F" },
  // ];
  //const classes = "1a";
  //const subject = "Englisch";

  // const [classes, setClasses] = useState([]);
  // const [subjects, setSubjects] = useState([]);
  // const [classId, setClassId] = useState("");
  // const [className, setClassName] = useState("");
  // const [subjectId, setSubjectId] = useState("");
  // const [subjectName, setSubjectName] = useState("");
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    // getAllClasses(token, userId)
    getAllClasses().then((res) => {
      if (res.message === "success") {
        setClasses(res.data);
        console.log(res.data);
      }
    });
    getAllSubjects().then((res) => {
      if (res.message === "success") {
        setSubjects(res.data);
        console.log(res.data);
      }
    });
  }, []);

  // function getClassId(classId) {
  //   setClassId(classId);
  // }

  // function getClassName(className) {
  //   setClassName(className);
  // }

  // function getSubjectId(subjectId) {
  //   setSubjectId(subjectId);
  // }

  // function getSubjectName(subjectName) {
  //   setSubjectName(subjectName);
  // }

  const onClickButton = () => {
    getStudentsByClassId(classId).then((res) => {
      if (res.message === "success") {
        setStudentsList(res.data);
        console.log(res.data);
      }
    });
  };

  return (
    <div className="flex-col w-full mr-0 sm:w-[100%] sm:mr-4 mt-4">
      <div className="flex justify-between ml-4  gap-4 flex-wrap">
        <SelectClasses
          // data={classes}
          // getClassId={getClassId}
          // getClassName={getClassName} /* getClass={getClass} */
        />
        <SelectSubjects
          // data={subjects}
          // getSubjectId={getSubjectId}
          // getSubjectName={getSubjectName}
        />

        <button
          className="flex grow  p-2
        rounded-2xl bg-green-200 h-[75px] 
        items-center justify-center transition-all
         hover:bg-white "
          onClick={onClickButton}
        >
          Abwesendheitsliste generieren
        </button>
      </div>
      {/* { studentsList.length > 0 && <MainTable studentList={studentsList} className={className} subjectName={subjectName} /> } */}
    </div>
  );
};

export default Main;
