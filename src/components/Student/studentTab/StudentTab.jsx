import { useState , useContext} from "react";

import StudentTable from "../StudentTable";
import SearchStudentBar from "../SearchStudentBar";
import './studentsTab.css'
import SelectClassesStudent from "../SelectClassesStudent";

import InputSearchStudent from "../InputSearchStudent";
import {Context} from '../../../context/context';
import {GrRefresh} from 'react-icons/gr'


function StudentTab(){
  const [toggleState, setToggleState] = useState(1);
  const {setStudentsList,getStudentsByClassId,classId,selectValue,getAllStudents,setStudents,students}=useContext(Context);

  const toggleTab = (index) => {
    setToggleState(index);
  };


const onClickHandelStudent=()=>{
setStudentsList([]);

if(selectValue === 'Klasse'){
  console.log("selectKlasse", selectValue);
getStudentsByClassId(classId).then((res) => {
  if (res.message === "success") {
    
    setStudentsList(res.data);
    console.log("*", res.data);
 
  }
  
});
// if(selectValue ==='All'){
//   console.log('Value:', selectValue);
//   console.log("Hello All");
//      getAllStudents().then((res) => {
//           if (res.message === "success") {
//             setStudentsList(res.data);
//             console.log(students);
   
//            console.log("result", res.data);
//          }
//         });
//       }


 }else if(selectValue === 'All'){ // a ecrire plutart dans refrech button
  console.log("hello All");
  getAllStudents().then((res) => {
              if (res.message === "success") {
                setStudentsList(res.data);
                console.log(students);
       
               console.log("result", res.data);
             }
            });
          }

}
  




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
        Anwesenheitliste
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
         <button onClick={onClickHandelStudent} className="flex  px-1 py-1 rounded-2xl 
         items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"> <GrRefresh/></button>
      </div>
      
    </div>
    

        <StudentTable/>
        
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <h2>Content 2</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptatum qui adipisci.
        </p>
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