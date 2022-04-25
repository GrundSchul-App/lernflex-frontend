import React, {  useEffect ,useContext ,useState} from "react";
import TeacherTable from "../../components/Teacher/TeacherTable";
import CalendarComponents from "../../components/CalendarComponent";
// import TeacherForm from "../../components/Teacher/TeacherForm";
import TeacherMain from "../../components/Teacher/TeacherMain";
import { Context } from "../../context/context";
import EventsList from "../../components/Attendance/EventsList";
import TeacherModale from '../../components/Teacher/TeacherModale'
import EditTeacherModal from "../../components/Teacher/EditTeacherModal";
// import {GrUserAdd} from "react-icons/gr"



function Teachers(props) {
  const {openModale,toggleModale,getAllTeachers,setTeachers,editToggleModale} =useContext(Context)
  //  const [editToggleModale, setEditToggleModale] = useState(false);

  //  const closeEditModale=()=>{
  //    setEditToggleModale(false);
  // }
  //  const openEditModale=()=>{
  //    setEditToggleModale(true);
  // }

  

  useEffect(() => {
    getAllTeachers().then((res) => {
      if (res.message === "success") {
        setTeachers(res.data);
        console.log("result", res.data);
      }
    });
  }, []);

  return (
    <div className="flex flex-row w-full justify-between">

      <div className="relative w-full">
        <div className="flex justify-between">
          <TeacherMain />

        </div>
        
        <div className="flex justify-end ">
           <button className="p-2  bg-red-700 m-4 mt-9 text-gray-100 rounded-xl shadow top-8 font-bold"onClick={openModale}> + Teacher</button></div>
       
        
        <TeacherTable />
      </div>

      <div className="hidden flex-col md:flex md:w-1/4 w-1/4">
        <CalendarComponents />
        <EventsList />
      </div>


      {toggleModale ? <TeacherModale />: ''}
      {editToggleModale ? <EditTeacherModal />:''}

      {toggleModale ? <TeacherModale closeFunk={closeModale}/>: ''}

    </div>
  );
}
export default Teachers;
