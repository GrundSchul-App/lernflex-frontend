import React, { useContext, useEffect } from "react";
import EventsList from "../../components/Attendance/EventsList";

import CalendarComponent from "../../components/CalendarComponent";
import AddStudentModal from "../../components/Student/AddStudentModal";
import EditModalStudents from "../../components/Student/editModalStudents";
import StudentHomeWorkModal from "../../components/Student/selectStudentHomeWorks/StudentHomeWorkModal";

import StudentTab from "../../components/Student/studentTab/StudentTab";
import { Context } from "../../context/context";

function Students(props) {
  const {
    toggleModale,
    editToggleModale,
    getAllStudents,
    setStudents,
    refDataBase,
    attendanceList,
    setgetAnwiesenheitsListe,
    setList,
    toggleHomeworModal,
    
  } = useContext(Context);

  useEffect(() => {
    getAllStudents().then((res) => {
      if (res.message === "Success") {
        setStudents(res.data);
        // console.log("result", res.data);
      }
    });
  }, [refDataBase]);

  useEffect(() => {
    attendanceList().then((res) => {
      if (res.message === "success") {
        setList(res.data);
        // console.log("anwesenheit", res.data);
      }
    });
  }, [refDataBase]);

  return (
    <div className=" font-family-karla w-full  flex mx-4 ">
      <StudentTab />
      <div className="hidden flex-col xl:flex xl:w-1/4  ml-4">
        <CalendarComponent />
        <EventsList />
      </div>
      {toggleModale ? <AddStudentModal /> : ""}
      {editToggleModale ? <EditModalStudents /> : ""}
      { toggleHomeworModal ? <StudentHomeWorkModal /> : ""}
    </div>
  );
}
export default Students;
