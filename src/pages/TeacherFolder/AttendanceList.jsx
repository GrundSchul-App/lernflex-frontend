import React from "react";
import EventsList from "../../components/Attendance/EventsList";
import Main from "../../components/Attendance/Main";
import CalendarComponent from "../../components/CalendarComponent";

const AttendanceList = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <Main />
      <div className="hidden flex-col md:flex">
        <CalendarComponent />
        <EventsList />
      </div>
    </div>
  );
};

export default AttendanceList;
