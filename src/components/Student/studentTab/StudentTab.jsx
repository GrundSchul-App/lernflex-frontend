import { useState, useContext } from "react";

import StudentTable from "../StudentTable";
import SearchStudentBar from "../SearchStudentBar";
import "./studentsTab.css";
import SelectClassesStudent from "../SelectClassesStudent";

import InputSearchStudent from "../InputSearchStudent";
import { Context } from "../../../context/context";

import SelectSubject from "../../AttendanceListStudent/SelectSubject";

import AttendanceListTable from "../../AttendanceListStudent/AttendanceListTable";

function StudentTab() {
  const [toggleState, setToggleState] = useState(1);
  const {
    getStudentsByClassId,
    classId,
    selectValue,
    getAllStudents,
    setStudents,

    setList,
    selectDate,
    getAttendanceByClassIdAndSubject,
    subjectId,

    openHomeworkModale,
    getAllHomeworks,
    setAllHomeworks,
    setHomeworks,
  } = useContext(Context);

  const date = selectDate ? new Date(selectDate).toLocaleDateString() : "";

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const onClickHandelStudent = () => {
    if (selectValue === "Klasse") {
      getStudentsByClassId(classId).then((res) => {
        if (res.message === "success") {
          setStudents(res.data);
        }
      });
    }
    if (selectValue === "All") {
      getAllStudents().then((res) => {
        if (res.message === "Success") {
          setStudents(res.data);
        }
      });
    }
  };

  const getAllAttendanceListByClassIdAndSubjectId = () => {
    const date1 = selectDate ? new Date(selectDate).toLocaleDateString() : "";
    const date = date1.split("/").reverse().join("-");

    getAttendanceByClassIdAndSubject(date, subjectId, classId)
      .then((res) => {
        if (res.message === "success") {

          setList(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  /// hausaufgaben wählen

  const selectHausAufgaben = () => {
    getAllHomeworks()
      .then((res) => {
        if (res.message === "success") {
          setHomeworks(res.data);
          setAllHomeworks(res.data);
          console.log("data allHomeworks modale studenthomework ", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    openHomeworkModale();
  };

  return (
    <div className="container mb-4 ">
      <div className="bloc-tabs ">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Schüler/innen
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Abwesendheitsliste
        </button>
      </div>

      <div className="content-tabs ">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div>
            <div className="flex justify-around bg-[#8DD4C3]  items-center h-24 rounded-md ">
              <SearchStudentBar />

              <SelectClassesStudent />
              <InputSearchStudent />
              <button
                onClick={onClickHandelStudent}
                className="flex  px-4 py-2 rounded-2xl bg-green-200 
         items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
              >
                {" "}
                Suche
              </button>
            </div>
          </div>

          <StudentTable />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="flex justify-around bg-[#8DD4C3]  items-center h-24 rounded-md ">
            <SelectClassesStudent />
            <SelectSubject />
            <button
              onClick={getAllAttendanceListByClassIdAndSubjectId}
              className="flex  px-4 py-2 rounded-2xl bg-green-200 
         items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            >
              Abwesendheitsliste suchen{" "}
            </button>
          </div>
          {/* <AttendanceListForm/> */}
          <div className=" border text-lg mt-2 rounded-md p-5 text-center">
            Die Liste der abwesenden Schülerinnen und Schüler am{" "}
            <input defaultValue={date} className="ml-5 text-blue-600  " />{" "}
          </div>

          <AttendanceListTable />

          <button
            onClick={selectHausAufgaben}
            className="border rounded-md text-blue-600 p-5 text-lg font-bold"
          >
            Hausaufgaben wählen
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentTab;
