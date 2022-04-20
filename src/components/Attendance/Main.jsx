import React, { useEffect, useState } from "react";
import SelectClasses from "./SelectClasses";
import SelectSubjects from "./SelectSubjects";
import MainTable from "./MainTable";
import { getAllClasses, getStudentsByClassId, createAttendanceList } from "../functions/DatabaseAttendanceList";

const Main = () => {
  const dataArray = [
    {
      firstName: "pepe",
      lastName: "perez",
      birthDate: "2012-04-03",
      gender: "M",
    },
    { firstName: "Rosa", lastName: "Lu", birthDate: "2012-05-03", gender: "F" },
    { firstName: "Lola", lastName: "Li", birthDate: "2012-06-03", gender: "F" },
  ];
  //const classes = "1a";
  //const subject = "Englisch";

  const [classes, setClasses] = useState([]);
  //const [subjects, setSubjects] = useState([]);
  const [classId, setClassId] = useState("");
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    // getAllClasses(token, userId)
    getAllClasses().then((res) => {
      if (res.message === "success") {
        setClasses(res.data);
        console.log(res.data);
      }
    });
    /* getAllSubjects().then((res) => {
      if (res.message === "success") {
        setSubjects(res.data);
      }
    }); */
  }, []);

  function getClassId(classId) {
    setClassId(classId);
  }

  const onClickButton = () => {
   
    getStudentsByClassId(classId).then((res) => {
      if (res.message === "success") {
        setStudentsList(res.data);
        console.log(res.data);
      }
    });
  }
 

  return (
    <div className="flex-col w-[60%]">
      <div className="flex justify-between ml-4 mr-4 gap-4 flex-wrap">
        <SelectClasses
          
          data={classes}
          getClassId={getClassId} /* getClass={getClass} */
        />
        {/*  <MainTab title="Fächer" data={subjects}/> */}

        <button
          className="flex grow mt-4 
        rounded-2xl bg-green-200 h-[75px] 
        items-center justify-center transition-all
         hover:bg-white "
          onClick={onClickButton}
        >
          Anwesendheitsliste generieren
        </button>
      </div>
      {/*  <MainTable dataArray={studentsList} classes={classes} subject={subject} /> */}
    </div>
  );
};

export default Main;
