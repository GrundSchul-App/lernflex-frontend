import React, { useEffect, useContext } from "react";
import EventsList from "../../components/Attendance/EventsList";
import Main from "../../components/Attendance/Main";
import CalendarComponent from "../../components/CalendarComponent";
import { Context } from "../../context/context";


const AttendanceList = () => {
  const {setMessageBackend, setStudentsList} = useContext(Context);

  useEffect(() => {
    setMessageBackend("");
    setStudentsList([]);
  }, []);


  return (
    <div className="flex flex-row w-full justify-between mx-4">
      <Main />
      <div className="hidden flex-col xl:flex xl:w-1/4 xl:ml-4">
        <CalendarComponent />
        <EventsList />
      </div>
    </div>
  );
};

export default AttendanceList;
