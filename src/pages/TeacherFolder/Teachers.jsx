import React, { useEffect, useContext } from "react";
import TeacherTable from "../../components/Teacher/TeacherTable";
import CalendarComponents from "../../components/CalendarComponent";
// import TeacherForm from "../../components/Teacher/TeacherForm";
import TeacherMain from "../../components/Teacher/TeacherMain";
import { Context } from "../../context/context";
import EventsList from "../../components/Attendance/EventsList";
import TeacherModale from "../../components/Teacher/TeacherModale";
import EditTeacherModal from "../../components/Teacher/EditTeacherModal";
import AddSubjAndKlassModale from "../../components/Teacher/AddSubjAndKlassModale";
// import {GrUserAdd} from "react-icons/gr"

function Teachers(props) {
  const {
    openModale,
    toggleModale,
    getAllTeachers,
    setTeachers,
    editToggleModale,
    toggleAddSubClassModale,
    refDataBase
  

  } = useContext(Context);
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
  }, [refDataBase]);

  return (
    <div className="flex flex-row w-full justify-between mr-4">
      <div className="relative w-full flex-1">
        <div className="flex justify-between ">
          <TeacherMain />
        </div>

        <div className="flex justify-end ">
          <button
            className="p-2  bg-green-600 hover:bg-green-800 m-4 mt-9 text-gray-100 rounded-xl shadow top-8 font-bold"
            onClick={openModale}
          >
            {" "}
            + Lehrer/in
          </button>
          
        </div>

        <TeacherTable />
      </div>

      <div className="hidden flex-col md:flex md:w-1/4 w-1/4 ">
        <CalendarComponents />
        <EventsList />
      </div>
      {toggleAddSubClassModale ? <AddSubjAndKlassModale /> : ""}


     
     


      {toggleModale ? <TeacherModale />: ''}
      {editToggleModale ? <EditTeacherModal />:''}

      {/* {toggleModale ? <TeacherModale closeFunk={closeModale}/>: ''} */}


    </div>
  );
}
export default Teachers;
