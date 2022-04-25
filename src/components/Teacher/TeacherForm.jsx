import React, { useContext,useState } from "react";
import { Context } from "../../context/context";
import SelectClasses from "../Attendance/SelectClasses";
import SelectSubjects from "../Attendance/SelectSubjects";

function TeacherForm(props) {
  const [modules,setModules]=useState([{}]);
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const {classId,className, teachers,setTeachers, BACKEND_URL } = useContext(Context);



  async function addTeacher(e) {
;
    e.preventDefault();
    const response = await fetch(`${BACKEND_URL}/addTeacher`, {

      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        email: email,
        // modules:[{classes:'5555555', subjects:'6666666'}],
        // students:[{}]
    
      })
      
    }
   );
    const content=await response.json();
    console.log("content result", content);
    console.log(content);
    setTeachers([...teachers,content.data])
    console.log("data:", content.data);

  }
  return (
    <div className="flex flex-col justify-center mt-4 border-solid border-2 w-[90%] h-[75%]">
      <form onSubmit={addTeacher}>
        <h1 className="text-3xl m-5"> Lehrer hinzufügen</h1>
        <div className="m-4 flex">
          <SelectClasses />
          <SelectSubjects />
        </div>
        <div className="m-4 ">
          <label  className="mr-5">Vorname</label>
          <input onChange={(e)=>{setFirstName(e.target.value)}}
            className="border border-black rounded-md"
            name='firstName'
            
            type="text" 
          />
        </div>
        <div className="m-4">
          <label className="mr-2">Nachname</label>
          <input onChange={(e)=>{setLastName(e.target.value)}}
            className="border border-black rounded-md"
            name='lastName'
            
            type="text"
            
          />
        </div>
        <div className="m-4">
          <label className="mr-11">Email</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} 
            className="border border-black rounded-md"
            name='email'
         
            type="email"
          />
        </div>
       

        <div className="flex justify-center">
          <button onClick={addTeacher} className="bg-cyan-500 hover:bg-cyan-600  font-bold text-white px-2 py-1 rounded-xl mt-5 ">
            Hinzufügen
          </button>
        </div>
      </form>
    </div>
  );
}
export default TeacherForm;
