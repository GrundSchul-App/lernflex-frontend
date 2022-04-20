import React from "react";

import InfosOnlineCurse from "../../components/RemoteCourse/InfosOnlineCurse"
import CalendarComponents from "../../components/CalendarComponent";
import DaysPlan from "../../components/RemoteCourse/DaysPlan"
import TableRemotePlan from "../../components/RemoteCourse/TableRemotePlan";

function RemoteCourse(props) {
  return (
    <div className="flex justify-between ">
        <div className=" ">
        <TableRemotePlan />
        <div className="w-[100%]"><DaysPlan/></div>
        
        </div>
      

      <div className="w-[25%]">
        <CalendarComponents />
        <InfosOnlineCurse />
      </div>
    </div>
  );
}
export default RemoteCourse;
