import React from "react";
import EventsList from "../../components/Attendance/EventsList";
import SubjectsMain from "../../components/subjects/SubjectsMain";
import CalendarComponent from "../../components/CalendarComponent";



const Subjects = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <SubjectsMain />
      <div className="hidden flex-col xl:flex xl:ml-4">
        <CalendarComponent />
        <EventsList />
      </div>
    </div>
  );
};

export default Subjects;
