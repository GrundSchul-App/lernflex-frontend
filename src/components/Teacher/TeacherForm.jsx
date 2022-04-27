import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
// import SelectClasses from "../Attendance/SelectClasses";
// import SelectSubjects from "../Attendance/SelectSubjects";
import { IoIosPeople } from "react-icons/io";
import { ImBooks } from "react-icons/im";

function TeacherForm(props) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const {
    classId,
    setClassId,
    setClassName,
    
    teachers,
    setTeachers,
    BACKEND_URL,
    classes,subjects,
    setSubjectId,
    subjectId,
    setSubjectName,
    closeModale,
    setRefDataBase,
    refDataBase
  } = useContext(Context);

  const getClassIdWithName = (e) => {
    setClassId(e.target.value);
    // console.log(e.target.value);
    setClassName(e.target.options[e.target.selectedIndex].text);
    // console.log(e.target.options[e.target.selectedIndex].text);
  };

  const getSubjectIdWithName = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.options[e.target.selectedIndex].text);
    setSubjectId(e.target.value);
    setSubjectName(e.target.options[e.target.selectedIndex].text);
  };

  async function addTeacher(e) {
    
    e.preventDefault();

    const response = await fetch(`${BACKEND_URL}/addTeacher`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        modules: [{ classes: `${classId}`,subjects:`${subjectId}` }],
        // students:[{}]
      }),
    });
    const content = await response.json();
    console.log("content result", content);
    console.log(content);
    setTeachers([...teachers, content.data]);
    console.log("data:", content.data);
     closeModale();
    //  window.location.reload();
    setRefDataBase(!refDataBase)

  }
  return (
    <div className="flex flex-col justify-center mt-4 border-solid border-2 w-[90%] h-[75%]">
      <form onSubmit={addTeacher}>
        <h1 className="text-3xl m-5"> Lehrer hinzufügen</h1>
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
          {/* <SelectSubjects /> */}

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


        </div>
        <div className="m-4 ">
          <label className="mr-5">Vorname</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="border border-black rounded-md"
            name="firstName"
            type="text"
          />
        </div>
        <div className="m-4">
          <label className="mr-2">Nachname</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="border border-black rounded-md"
            name="lastName"
            type="text"
          />
        </div>
        <div className="m-4">
          <label className="mr-11">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border border-black rounded-md"
            name="email"
            type="email"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={addTeacher}
            className="bg-cyan-500 hover:bg-cyan-600  font-bold text-white px-2 py-1 rounded-xl mt-5 "
          >
            Hinzufügen
          </button>
        </div>
      </form>
    </div>
  );
}
export default TeacherForm;
