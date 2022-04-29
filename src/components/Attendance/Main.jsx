import React, { useContext, useEffect, useState } from "react";
import SelectClasses from "./SelectClasses";
import SelectSubjects from "./SelectSubjects";
import MainTable from "./MainTable";
import { Context } from "../../context/context";

const Main = () => {
  const {
    getAllClasses,
    getAllSubjects,
    getStudentsByClassId,
    setClasses,
    classId,
    setSubjects,
    studentsList,
    setStudentsList,
    className,
    subjectName,
    setMessageBackend 
  } = useContext(Context);

  const [ classAndSubjectName, setClassAndSubjectName] = useState("");

  useEffect(() => {
    // getAllClasses(token, userId)
    getAllClasses().then((res) => {
      if (res.message === "success") {
        setClasses(res.data);
        console.log(res.data);
      }
    }).catch((err) => {
      console.log(err);
    });
    getAllSubjects().then((res) => {
      if (res.message === "success") {
        setSubjects(res.data);
        console.log(res.data);
      }
    }).catch((err) => {
        console.log(err);
    });
  }, []);

  const onClickButton = () => {
    setStudentsList([]);

    

    getStudentsByClassId(classId).then((res) => {
      if (res.message === "success") {
        
        setStudentsList(res.data);
        console.log("*", res.data);
        setClassAndSubjectName(`${className} - ${subjectName}`);
        setMessageBackend("")
      }
    });
  };

  return (
    <div className="flex-col w-full mr-4 sm:w-[100%] mt-4 flex-auto">
      <div className="flex justify-between ml-4 gap-4  flex-wrap w-full">
        <SelectClasses />
        <SelectSubjects />

        <button
          className="flex grow  p-2 mr-4
        rounded-2xl bg-green-200 h-[75px] 
        items-center justify-center transition-all
         hover:bg-white hover:shadow-xl"
          onClick={onClickButton}
        >
          Abwesendheitsliste generieren
        </button>
      </div>
      {studentsList.length !== 0 && (
        <MainTable classAndSubjectName={classAndSubjectName} />
      )}
    </div>
  );
};

export default Main;
