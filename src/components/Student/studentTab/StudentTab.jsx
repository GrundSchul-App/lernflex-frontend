import { useState , useContext,useEffect} from "react";

import StudentTable from "../StudentTable";
import SearchStudentBar from "../SearchStudentBar";
import './studentsTab.css'
import SelectClassesStudent from "../SelectClassesStudent";

import InputSearchStudent from "../InputSearchStudent";
import {Context} from '../../../context/context';



import SelectSubject from "../../AttendanceListStudent/SelectSubject";

import AttendanceListTable from "../../AttendanceListStudent/AttendanceListTable";



function StudentTab(){
  const [toggleState, setToggleState] = useState(1);
  const {getStudentsByClassId,classId,selectValue,getAllStudents,setStudents,students,attendanceList,setgetAnwiesenheitsListe,getAnwiesenheitsListe,selectDate}=useContext(Context);

  const date = selectDate
  ? new Date(selectDate).toLocaleDateString()
  : "";


  // console.log("date", selectDate);
  const toggleTab = (index) => {
    setToggleState(index);
  };


const onClickHandelStudent=()=>{
// setStudentsList([]);

if(selectValue === 'Klasse'){
  console.log("selectKlasse", selectValue);
getStudentsByClassId(classId).then((res) => {
  if (res.message === "success") {
    
    setStudents(res.data);
    console.log("*", res.data);
 
  } 
});

} if (selectValue ==='All'){
  console.log('Value:', selectValue);
 
  getAllStudents().then((res) => {
       if (res.message === "Success") {
                    setStudents(res.data);
                    console.log("students2", students);
           
                   console.log("result", res.data);
                 }
                });
              }
}
// console.log("anwesenheitlistestate", getAnwiesenheitsListe);

useEffect(()=>{
  attendanceList().then((res)=>{
    if(res.message === "success"){
      setgetAnwiesenheitsListe(res.data)
      // console.log("anwesenheit", res.data);
      
    }
  })
},[])


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
     
        
        <div >
      <div className="flex justify-around bg-[#8DD4C3]  items-center h-24 rounded-md ">
        <SearchStudentBar />
        <InputSearchStudent/>
        <SelectClassesStudent/>
        <button onClick={onClickHandelStudent} className="flex  px-4 py-2 rounded-2xl bg-green-200 
         items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"> Suche</button>
         {/* <button onClick={onClickHandelStudent} className="flex  px-1 py-1 rounded-2xl 
         items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"> <GrRefresh/></button> */}
      </div>
      
    </div>
    

        <StudentTable/>
        
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
       <div className="flex justify-around bg-[#8DD4C3]  items-center h-24 rounded-md ">
       
       <SelectClassesStudent/>
        <SelectSubject/>
        <button className="flex  px-4 py-2 rounded-2xl bg-green-200 
         items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg">Anwesenheitsliste suchen </button>
       </div>
       {/* <AttendanceListForm/> */}
       <div className=" border text-lg mt-2 rounded-md p-5 text-center">Die Liste der abwesenden Schülerinnen und Schüler am <input defaultValue={date} className="ml-5 text-blue-600"/>  </div>
        <AttendanceListTable/>
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

export default StudentTab