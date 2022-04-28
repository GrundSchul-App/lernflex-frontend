import React,{useContext,useEffect} from "react";
import EventsList from "../../components/Attendance/EventsList";

import CalendarComponent from "../../components/CalendarComponent";
import AddStudentModal from "../../components/Student/AddStudentModal";

import StudentTab from "../../components/Student/studentTab/StudentTab";
import { Context} from '../../context/context'

function Students(props) {
  const {toggleModale}=useContext(Context)

// useEffect(() =>
// getAllStudents().then((res)=>{
//   if (res.message === "success"){
//     setStudents(res.data);
//     console.log("student:", res.data);
//   }
// }),[])




  return (
    <div className=" font-family-karla w-full  flex ml-4">
      
    <StudentTab />
      <div className="hidden flex-col xl:flex xl:w-1/4  ml-4">
        <CalendarComponent />
        <EventsList />
      </div>
      {toggleModale ? <AddStudentModal/>: ''}
    </div>
  );
}
export default Students;
