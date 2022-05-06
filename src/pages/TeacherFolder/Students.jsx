import React, { useContext, useEffect } from "react";
import EventsList from "../../components/Attendance/EventsList";

import CalendarComponent from "../../components/CalendarComponent";
import AddStudentModal from "../../components/Student/AddStudentModal";
import EditModalStudents from "../../components/Student/editModalStudents";

import StudentTab from "../../components/Student/studentTab/StudentTab";
import { Context } from "../../context/context";

function Students(props) {
  const { toggleModale, editToggleModale, getAllStudents, setStudents,refDataBase ,attendanceList,setgetAnwiesenheitsListe} =
    useContext(Context);

  useEffect(() => {
    getAllStudents().then((res) => {
      if (res.message === "Success") {
        setStudents(res.data);
        console.log("result", res.data);
      }
    });
  }, [refDataBase]);

  useEffect(()=>{
    attendanceList().then((res)=>{
      if(res.message === "success"){
        setgetAnwiesenheitsListe(res.data)
         console.log("anwesenheit", res.data);
        
      }
    })
  },[])

  return (
    <div className=" font-family-karla w-full  flex ml-4">
      <StudentTab />
      <div className="hidden flex-col xl:flex xl:w-1/4  ml-4">
        <CalendarComponent />
        <EventsList />
      </div>
      {toggleModale ? <AddStudentModal /> : ""}
      {editToggleModale ? <EditModalStudents /> : ""}
    </div>
  );
}
export default Students;
