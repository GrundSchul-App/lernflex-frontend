import React, { useEffect, useContext } from "react";
import EventsList from "../../components/Attendance/EventsList";
import HomeworksMain from "../../components/homeworks/HomeworksMain";
import CalendarComponent from "../../components/CalendarComponent";
import { Context } from "../../context/context";

function Homeworks() {
  const { setMessageBackend } = useContext(Context);
  useEffect(() => {
    setMessageBackend("");
  }, []);

  return (
    <div className="flex flex-row w-full justify-between mr-4">
      
      <HomeworksMain />
      {/* <div className="hidden flex-col xl:flex xl:ml-4 xl:w-1/4 ">
        <CalendarComponent />
        <EventsList />
      </div> */}
    </div>
  );
}


export default Homeworks;