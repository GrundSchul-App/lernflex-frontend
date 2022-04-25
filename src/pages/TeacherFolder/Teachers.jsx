import React, { useState, useEffect, useContext } from "react";
import TeacherTable from "../../components/Teacher/TeacherTable";
import CalendarComponents from "../../components/CalendarComponent";
// import TeacherForm from "../../components/Teacher/TeacherForm";
import TeacherMain from "../../components/Teacher/TeacherMain";
import { Context } from "../../context/context";
import EventsList from "../../components/Attendance/EventsList";
import TeacherModale from '../../components/Teacher/TeacherModale'

function Teachers(props) {
  const [toggleModale, setToggleModale] = useState(false);

  const { getAllTeachers, setTeachers } = useContext(Context);

  useEffect(() => {
    getAllTeachers().then((res) => {
      if (res.message === "success") {
        setTeachers(res.data);
        console.log("result", res.data);
      }
    });
  }, []);

  return (
    <div className="flex w-full justify-between">
      <div className="relative w-full ">
        <div className="flex justify-between">
          <TeacherMain />
        </div>

        <TeacherTable />
      </div>

      <div className="hidden flex-col md:flex md:w-1/4 w-1/4">
        <CalendarComponents />
        <EventsList />
      </div>

      {toggleModale ? <TeacherModale /> : ""}
    </div>
  );
}
export default Teachers;
