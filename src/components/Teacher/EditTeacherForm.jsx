import React, { useState, useContext } from "react";
import SelectClasses from "../Attendance/SelectClasses";
import SelectSubjects from "../Attendance/SelectSubjects";
import { Context } from "../../context/context";
import { IoIosPeople } from "react-icons/io";
import { ImBooks } from "react-icons/im";

export function EditTeacherForm(props) {
  const [editTeacher, setEditTeacher] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // modules: [{}],
  });
  const [editFirstNameTeacher,setEditFirstNameTeacher]=useState('')
  const [editLastNameTeacher,setEditLastNameTeacher]=useState('')
  const [editEmailTeacher,setEditEmailTeacher]=useState('')

  const {
    getClassIdAndName,
    BACKEND_URL,
    setClassId,
    setClassName,
    setSubjectId,
    teacherId,
    setSubjectName,
    classes,
    subjects,
    editExistTeacher,
    teachers,
    setRefDataBase,
    refDataBase
  } = useContext(Context);

  const getClassIdWithName = (e) => {
    setClassId(e.target.value);
    //  console.log(e.target.value);
    setClassName(e.target.options[e.target.selectedIndex].text);
    //  console.log(e.target.options[e.target.selectedIndex].text);
  };

  const getSubjectIdWithName = (e) => {
    //  console.log(e.target.value);
    // console.log(e.target.options[e.target.selectedIndex].text);
    setSubjectId(e.target.value);
    setSubjectName(e.target.options[e.target.selectedIndex].text);
  };

  async function updateTeacher(e) {
    e.preventDefault();
    //  editExistTeacher(teacherId);
  //   console.log("Id:", teacherId);
  //  console.log("result target put", e.target.firstName);
    //openModaleAdd()
    // const data= {

    // }
   
    const response = await fetch(`${BACKEND_URL}/update/${teacherId._id} `, {
      method: "PUT",
      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: editFirstNameTeacher || teacherId.firstName ,
        lastName: editLastNameTeacher || teacherId.lastName,
        email: editEmailTeacher || teacherId.email
        // modules: editTeacher.modules,
      }),
    });
    const content = await response.json();
    console.log("content:", content);
    setRefDataBase(!refDataBase)
    // setRefDataBase((prevData) => {
    //  return  prevData = !prevData
    // })
   
  }

  return (
    <div className="flex flex-col justify-center mt-4 border-solid border-2 w-[90%] h-[75%]">
      <form>
        <h1 className="text-3xl m-5"> Änderung der Lehrerdaten</h1>
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
          </div>
          {/* <SelectClasses /> */}

          <div className="flex grow p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
            <ImBooks className="w-7 h-7 mr-2" />
            <h3 className="mr-2">Fächer</h3>

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
              name=""
              id=""
              onChange={getSubjectIdWithName}
              defaultValue={"default"}
            >
              <option value={"default"} disabled>
                ...
              </option>
              {subjects.map((subject, index) => {
                return (
                  <option className="p-2" key={index} value={subject._id}>
                    {subject.subject_title}
                  </option>
                );
              })}
            </select>
          </div>
          {/* <SelectSubjects /> */}
        </div>
        <div className="m-4 ">
          <label className="mr-5">Vorname</label>
          <input
          onChange={(e) => {setEditFirstNameTeacher(e.target.value)}}
            className="border border-black rounded-md"
            name="firstName"
            defaultValue={teacherId.firstName}
            type="text"
          />
        </div>
        <div className="m-4">
          <label className="mr-2">Nachname</label>
          <input
          onChange={(e)=>{setEditLastNameTeacher(e.target.value)}}
            className="border border-black rounded-md"
            name="lastName"
            type="text"
            defaultValue={teacherId.lastName}
          />
        </div>
        <div className="m-4">
          <label className="mr-11">Email</label>
          <input
          onChange={(e)=>{setEditEmailTeacher(e.target.value)}}
            className="border border-black rounded-md"
            name="email"
            type="email"
            defaultValue={teacherId.email}
          />
        </div>

        <div className="flex justify-center">
          <button onClick={updateTeacher} type='button' className="bg-cyan-500 hover:bg-cyan-600  font-bold text-white px-2 py-1 rounded-xl mt-5 ">
            Speichern
          </button>
        </div>
      </form>
    </div>
  );
}
