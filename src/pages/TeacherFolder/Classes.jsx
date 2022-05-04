import React, { useEffect, useContext } from "react";
import EventsList from "../../components/Attendance/EventsList";
import ClassesMain from "../../components/classes/ClassesMain";
import CalendarComponent from "../../components/CalendarComponent";
import { Context } from "../../context/context";

function Classes() {
  const { setMessageBackend } = useContext(Context);
  useEffect(() => {
    setMessageBackend("");
  }, []);

  return (
    <div className="flex flex-row w-full justify-between mr-4">
      <ClassesMain />
      <div className="hidden flex-col xl:flex xl:ml-4 xl:w-1/4 ">
        <CalendarComponent />
        <EventsList />
      </div>
    </div>
  );
}
export default Classes;
