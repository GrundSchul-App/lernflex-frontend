import React from "react";
import MainTab from "../../components/Attendance/MainTab";
import TeacherTable from "../../components/Teacher/TeacherTable";
import CalendarComponents from '../../components/CalendarComponent'
import TeacherForm from "../../components/Teacher/TeacherForm";

function Teachers(props) {



  return (
    <div className="flex">
    <div className="relative">
      <div className="flex ml-8 justify-center">
        <MainTab  /> 
        <MainTab />
        
      </div>
      <button className="bg-green-500 rounded-xl p-[1%] mt-4 text-white font-bold  ">+ Teacher</button>
       
      <TeacherTable />
    </div>

    <div>
        <CalendarComponents/>
        <TeacherForm/>
    </div>
    </div>
  );
}
export default Teachers;
