import React, { useContext } from "react";
import EventsList from "../../components/Attendance/EventsList";
import SubjectsMain from "../../components/subjects/SubjectsMain";
import CalendarComponent from "../../components/CalendarComponent";
import { Context } from "../../context/context";


const Subjects = () => {
  const {setMessageBackend,  getAllStudents,setStudents } = useContext(Context);
 

  // useEffect(()=>{

  //   getAllStudents().then((res) => {
       
  //         if (res.message === "success") {
  //           setStudents(res.data);
  //           console.log("result", res.data);
  //         }
  //       });
  //     },[]); 




  return (
    <div className="flex flex-row w-full justify-between mr-4">
      <SubjectsMain />
      <div className="hidden flex-col lg:flex lg:ml-4 lg:w-1/4 ">
        <CalendarComponent />
        <EventsList />
      </div>
    </div>
  );
};

export default Subjects;
