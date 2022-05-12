import React, { useEffect, useContext } from "react";

import RemoteMain from "../../components/remote/RemoteMain";
import EventsList from "../../components/Attendance/EventsList";

import CalendarComponent from "../../components/CalendarComponent";

import { Context } from "../../context/context";

function Remote() {
  const { setMessageBackend } = useContext(Context);
  useEffect(() => {
    setMessageBackend("");
  }, []);

  return (
    <div className="flex flex-row w-full justify-between mr-4 ">
      
      <RemoteMain />
      <div className="hidden flex-col xl:flex xl:w-1/4 xl:ml-4">
        <CalendarComponent />
        <EventsList />
      </div>
      
    </div>
  );
}


export default Remote;