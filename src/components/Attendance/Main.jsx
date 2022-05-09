import React, { useContext, useEffect, useState } from "react";
import SelectClasses from "./SelectClasses";
import SelectSubjects from "./SelectSubjects";
import MainTable from "./MainTable";
import MainTableAllAttendance from "./MainTableAllAttendance";
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

    setMessageBackend,
    attendanceList,
  } = useContext(Context);

  const [classAndSubjectName, setClassAndSubjectName] = useState("");
  const [allAttendance, setAllAttendance] = useState([]);
  const [messageClass, setMessageClass] = useState("");
  const [messageSubject, setMessageSubject] = useState("");

  useEffect(() => {
    // getAllClasses(token, userId)
    getAllClasses()
      .then((res) => {
        if (res.message === "success") {
          setClasses(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

  const onClickButton = () => {
    setStudentsList([]);
    setAllAttendance([]);
    if (classId.length === 0 && subjectName.length === 0) {
      setMessageClass("Bitte eine Klasse auswählen!");
      setMessageSubject("Bitte ein Fach auswählen!");
      return;
    } else if (classId.length === 0) {
      setMessageClass("Bitte eine Klasse auswählen!");
      return;
    } else if (subjectName.length === 0) {
      setMessageSubject("Bitte ein Fach auswählen!");
      return;
    }

    getStudentsByClassId(classId).then((res) => {
      if (res.message === "success") {
        setStudentsList(res.data);

        setClassAndSubjectName(`${className} - ${subjectName}`);
        setMessageBackend("");
      }
    });
  };

  const onClickButtonShowAllAttendance = () => {
    setAllAttendance([]);
    setStudentsList([]);

    attendanceList().then((res) => {
      if (res.message === "success") {
        setAllAttendance(res.data);

        setMessageBackend("");
      }
    });
  };

  return (
    <div className="flex-col w-full  sm:w-[100%] mt-4 flex-auto">
      <div className="flex grow gap-4  flex-wrap w-full">
        <SelectClasses
          messageClass={messageClass}
          setMessageClass={setMessageClass}
        />
        <SelectSubjects
          messageSubject={messageSubject}
          setMessageSubject={setMessageSubject}
        />

        <button
          className="flex grow  p-2 
        rounded-2xl bg-green-200 h-[75px] 
        items-center justify-center transition-all
         hover:bg-white hover:shadow-xl"
          onClick={onClickButton}
        >
          <p> Abwesendheitsliste generieren</p>
        </button>

        <button
          className="flex grow  p-2
        rounded-2xl bg-green-200 h-[75px] 
        items-center justify-center transition-all
         hover:bg-white hover:shadow-xl"
          onClick={onClickButtonShowAllAttendance}
        >
          Abwesendheitslisten zeigen
        </button>
      </div>

      {studentsList.length !== 0 && (
        <MainTable classAndSubjectName={classAndSubjectName} />
      )}
      {allAttendance.length !== 0 && <MainTableAllAttendance />}
    </div>
  );
};

export default Main;
