import React from 'react';
import EventsList from '../../components/Attendance/EventsList';
import CalendarComponent from '../../components/CalendarComponent';
import StudentTab from '../../components/Student/studentTab/StudentTab';



 function Students(props) {
    

    return (
        <div className=" font-family-karla w-full h-screen flex ml-4" >
         <StudentTab/>  

         <div className="hidden flex-col xl:flex xl:w-1/4  ml-4">
        <CalendarComponent />
        <EventsList />
      </div> 
        </div>
    )
}
export default Students;
