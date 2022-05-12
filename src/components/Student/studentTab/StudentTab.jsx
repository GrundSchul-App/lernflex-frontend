import { useState, useContext } from "react";

import StudentTable from "../StudentTable";
import SearchStudentBar from "../SearchStudentBar";
import "./studentsTab.css";
import SelectClassesStudent from "../SelectClassesStudent";

import InputSearchStudent from "../InputSearchStudent";
import { Context } from "../../../context/context";

import SelectSubject from "../../AttendanceListStudent/SelectSubject";

import AttendanceListTable from "../../AttendanceListStudent/AttendanceListTable";
// import { format } from 'date-fns'

function StudentTab() {
  const [classSubjectList, setClassSubjectList] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const {
    getStudentsByClassId,
    classId,
    selectValue,
    getAllStudents,
    setStudents,
    students,
    attendanceList,
    setgetAnwiesenheitsListe,
    list,
    setList,
    selectDate,
    getAttendanceByClassIdAndSubject,
    subjectId,
    activeFilterArow,
    setActive,
    active,
    openModale,
    openHomeworkModale,
    getAllHomeworks,
    setAllHomeworks,
    setHomeworks
  } = useContext(Context);

  const date = selectDate ? new Date(selectDate).toLocaleDateString() : "";

  // console.log("date", selectDate);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const onClickHandelStudent = () => {
    // setStudentsList([]);

    if (selectValue === "Klasse") {
      console.log("selectKlasse", selectValue);
      getStudentsByClassId(classId).then((res) => {
        if (res.message === "success") {
          setStudents(res.data);
          console.log("*", res.data);
        }
      });
    }
    if (selectValue === "All") {
      console.log("Value:", selectValue);

      getAllStudents().then((res) => {
        if (res.message === "Success") {
          setStudents(res.data);
          console.log("students2", students);

          console.log("result", res.data);
        }
      });
    }
  };
  // console.log("anwesenheitlistestate", getAnwiesenheitsListe);
  const getAllAttendanceListByClassIdAndSubjectId = () => {
    // const ghania=format(selectDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    // console.log("ghania", ghania)
    const date1 = selectDate ? new Date(selectDate).toLocaleDateString() : "";
    const date = date1.split("/").reverse().join("-");
    // console.log("dateeeeeeee", date);

    // console.log("subjectId and classID und date", subjectId , classId, date);

    getAttendanceByClassIdAndSubject(date, subjectId, classId)
      .then((res) => {
        if (res.message === "success") {
           console.log("result set anwiesent", res.data);
          setList(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  // console.log("mein list", list);

  // const resetButton = () => {
  //   attendanceList().then((res) => {
  //     if (res.message === "success") {
  //       setList(res.data);
  //       // console.log("anwesenheit", res.data);
  //     }
  //   });
  //   // console.log("list8777", list);
  // };


   /// hausaufgaben wählen 

   const selectHausAufgaben=()=>{


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
    openHomeworkModale()

   }









  // useEffect(()=>{
  //   attendanceList().then((res)=>{
  //     if(res.message === "success"){
  //       setgetAnwiesenheitsListe(res.data)
  //        console.log("anwesenheit", res.data);

  //     }
  //   })
  // },[])

  return (
    <div className="container">
      <div className="bloc-tabs">
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
          Anwesenheitsliste
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs">
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
              {/* <button onClick={onClickHandelStudent} className="flex  px-1 py-1 rounded-2xl 
         items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"> <GrRefresh/></button> */}
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
              Anwesenheitsliste suchen{" "}
            </button>
            {/* <button className="bg-green-800" onClick={resetButton}>
              refrech
            </button> */}
          </div>
          {/* <AttendanceListForm/> */}
          <div className=" border text-lg mt-2 rounded-md p-5 text-center">
            Die Liste der abwesenden Schülerinnen und Schüler am{" "}
            <input defaultValue={date} className="ml-5 text-blue-600  " />{" "}
          </div>

          <AttendanceListTable />

          <button onClick={selectHausAufgaben} className="border rounded-md text-blue-600 p-5 text-lg font-bold">
            Hausaufgaben wählen
          </button>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentTab;
