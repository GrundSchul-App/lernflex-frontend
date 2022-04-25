import React, { useEffect, useContext, useState } from "react";
import TeacherTable from "../../components/Teacher/TeacherTable";
import CalendarComponents from "../../components/CalendarComponent";
// import TeacherForm from "../../components/Teacher/TeacherForm";
import TeacherMain from "../../components/Teacher/TeacherMain";
import { Context } from "../../context/context";
import EventsList from "../../components/Attendance/EventsList";
import TeacherModale from "../../components/Teacher/TeacherModale";
import EditTeacherModal from "../../components/Teacher/EditTeacherModal";
import AddSubjAndKlassModale from "../../components/Teacher/AddSubjAndKlassModale";
// import {GrUserAdd} from "react-icons/gr"

function Teachers(props) {
  const {
    openModale,
    toggleModale,
    getAllTeachers,
    setTeachers,
    editToggleModale,
    toggleAddSubClassModale,
    refDataBase
  

  } = useContext(Context);
  //  const [editToggleModale, setEditToggleModale] = useState(false);

  //  const closeEditModale=()=>{
  //    setEditToggleModale(false);
  // }
  //  const openEditModale=()=>{
  //    setEditToggleModale(true);
  // }

  useEffect(() => {
    getAllTeachers().then((res) => {
      if (res.message === "success") {
        setTeachers(res.data);
        console.log("result", res.data);
      }
    });
  }, [refDataBase]);

  return (
    <div className="flex flex-row w-full justify-between">
      <div className="relative w-full">
        <div className="flex ">
          <TeacherMain />
        </div>

        <div className="flex justify-end ">
          <button
            className="p-2  bg-red-700 m-4 mt-9 text-gray-100 rounded-xl shadow top-8 font-bold"
            onClick={openModale}
          >
            {" "}
            + Teacher
          </button>
          
        </div>

        <TeacherTable />
      </div>

      <div className="hidden flex-col md:flex">
        <CalendarComponents />
        <EventsList />
      </div>
      {toggleAddSubClassModale ? <AddSubjAndKlassModale /> : ""}

      {toggleModale ? <TeacherModale /> : ""}
      {editToggleModale ? <EditTeacherModal /> : ""}
     
    </div>
  );
}
export default Teachers;
