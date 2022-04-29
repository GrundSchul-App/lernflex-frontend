import React from "react";

import InfosOnlineCurse from "../../components/RemoteCourse/InfosOnlineCurse"
import CalendarComponents from "../../components/CalendarComponent";
import DaysPlan from "../../components/RemoteCourse/DaysPlan"
import TableRemotePlan from "../../components/RemoteCourse/TableRemotePlan";

function RemoteCourse(props) {
  return (
    <div className="flex justify-between mx-auto ">
      <div className="px-4">
        <TableRemotePlan />
        <DaysPlan />
      </div>
      <div className=" md:w-1/4 w-1/4">
        <CalendarComponents />
        <InfosOnlineCurse />
      </div>

    </div>
  );
}
export default RemoteCourse;
