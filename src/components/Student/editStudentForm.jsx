import React ,{useContext,useState} from 'react'
import { IoIosPeople } from "react-icons/io";
import {Context} from '../../context/context'

export function EditStudentForm(props) {
    const [gender, setGender]=useState("");


    //sate zu student update
    const [editFirstNameStudent,setEditFirstNameStudent]=useState('')
  const [editLastNameStudent,setEditLastNameStudent]=useState('')
  const [editEmailStudent,setEditEmailStudent]=useState('')
 
  const[editClassStudent,setClassStudent]=useState('')
  const[editBirthDate,setEditBirthDate]=useState('')
  const [editGender,setEditGender]=useState('')
  
  


    const {setClassId,setClassName,classes,studentId,BACKEND_URL,setRefDataBase,refDataBase,student} = useContext(Context)


    const getClassIdWithName = (e) => {
        setClassId(e.target.value);
         console.log(e.target.value);
         setClassName(e.target.options[e.target.selectedIndex].text);
         console.log(e.target.options[e.target.selectedIndex].text);
      };
      const getSelectGender=(e)=>{
        setGender(e.target.value)
        console.log("Gender", e.target.value);
     
           }

 async function updateStudent(e){
 e.preventDefault();
// console.log("editStudentId", studentId);
console.log("EditfirstName student", editFirstNameStudent);

const data= {

  firstName:editFirstNameStudent || studentId.firstName,
  lastName:editLastNameStudent || studentId.lastName ,
  email:editEmailStudent || studentId.email,}
  console.log("data", data);
 const response= await fetch(`${BACKEND_URL}/students/${studentId._id}`,{
     method:"PUT",
     header:{
         Accept: "application/json",
         "Content-Type": "application/json",
     },
     body: JSON.stringify(
       data
     ),

 })
 const content = await response.json()
 console.log("conten edit student", content);
 setRefDataBase(!refDataBase)
}    




    return (
        <div className="flex flex-col justify-center mt-4 border-solid border-2 w-[90%] h-[80%]">
      <form >
        <h1 className="text-3xl m-5">  Änderung der Schülerdaten</h1>
        <div className="m-4 flex">
          <div className="flex grow  p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
            <IoIosPeople className="w-8 h-8 mr-2" />
            <h3 className="mr-2">Klassen</h3>

            <select
              className="form-select 
      block
      
      px-3
      py-1.5
      mr-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
       border border-solid border-gray-300 
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-green-600
       focus:outline-none"
              /*  aria-label="Default select example" */
              name=""
              id=""
              /*  value="state.classId" */
              onChange={getClassIdWithName}
              defaultValue={"default"}
            >
              {/* <option selected>Klassen...</option> */}
              <option value={"default"} disabled>
                ...
              </option>
              {classes.map((classes, index) => {
                return (
                  <option className="p-2" key={index} value={classes._id}>
                    {classes.className}
                  </option>
                );
              })}
            </select>
            {/* select gender  */}
            <div className="flex  p-[1%] rounded-xl bg-white max-w-[30%] mx-8   justify-center">
    
  
    <h3 className="my-2 m-2">Geschlecht</h3>

    <select
    onChange={getSelectGender}
      className="form-select 
    block
    
    px-3
    py-1.5
    mr-2
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
     border border-solid border-gray-300 
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-green-600
     focus:outline-none"
      name=""
      id=""
      defaultValue={"default"}
    
    >
      <option value={"default"} disabled>
        ...
      </option>
      <option value="W">Weiblich</option>
      <option value="M">Männlich</option>
      
    </select>

    
    </div>


            {/* select gender  */}
          </div>

          {/* <SelectClasses /> */}
          {/* <SelectSubjects /> */}

         


        </div>


        <div className="m-4 ">
          <label className="mr-5">Vorname</label>
          <input
          onChange={(e)=>setEditFirstNameStudent(e.target.value  )}
            
            className="border border-black rounded-md"
            name="firstName"
            type="text"
            defaultValue={studentId.firstName}
          />
        </div>
        <div className="m-4">
          <label className="mr-2">Nachname</label>
          <input
            onChange={(e) => 
              setEditLastNameStudent(e.target.value)
            }
            className="border border-black rounded-md"
            name="lastName"
            type="text"
            defaultValue={studentId.lastName}
          />
        </div>
        <div className="m-4">
          <label className="mr-11">Email</label>
          <input
            onChange={(e) => 
              setEditEmailStudent(e.target.value)
            }
            className="border border-black rounded-md"
            name="email"
            type="email"
            defaultValue={studentId.email}
          />
        </div>
        <div className="m-4">
          <label className="mr-5">Gebutsdatum</label>
          <input
            onChange={(e) => {
              setEditBirthDate(e.target.value);
            }}
            className="border border-black rounded-md"
            name="birthday"
            type="date"
            defaultValue={studentId.birthday}
          />
        </div>
        {/* <div className="m-4">
          <label className="mr-5">Klasse</label>
          <input
            onChange={(e) => {
              setClassStudent(e.target.value);
            }}
            className="border border-black rounded-md"
            name="birthday"
            type="text"
          />
        </div> */}

        {/* <div className="m-4">
          <label className="mr-5">Geschlecht</label>
          <input
            onChange={(e) => {
              setEditGender(e.target.value);
            }}
            className="border border-black rounded-md"
            name="gender"
            type="text"
          />
        </div> */}

        <div className="flex justify-center">
          <button
            onClick={updateStudent}
            className="bg-cyan-500 hover:bg-cyan-600  font-bold text-white px-2 py-1 rounded-xl mt-5 "
          >
            Speichern
          </button>
        </div>
      </form>
      {/* <p className=" m-4 text-orange-500">{messageBackend}</p> */}
        
      
    </div>
    )
}
