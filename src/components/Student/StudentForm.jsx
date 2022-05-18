import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import { IoIosPeople } from "react-icons/io";

function StudentForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [gender, setGender] = useState("");

  const {
    setClassId,
    classId,
    setClassName,
    classes,
    BACKEND_URL,
    students,
    setStudents,
    closeModale,
    setRefDataBase,
    refDataBase,
    messageBackend,
    setStudentsList,
    studentsList,
  } = useContext(Context);

  const getClassIdWithName = (e) => {
    setClassId(e.target.value);
    console.log(e.target.value);
    setClassName(e.target.options[e.target.selectedIndex].text);
  };

  const getSelectGender = (e) => {
    setGender(e.target.value);
  };

  async function addStudent(e) {
    e.preventDefault();

    const response = await fetch(`${BACKEND_URL}/students`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        birthDate: birthDate,
        gender: gender,
        classId: classId,
      }),
    });
    const content = await response.json();

    setStudents([...students, content.data]);
    setStudentsList([...studentsList, content.data]);

    closeModale();
    setRefDataBase(!refDataBase);
  }

  return (
    <div className="flex flex-col justify-center mt-4 border-solid border-2 w-[90%] h-[80%]">
      <form>
        <h1 className="text-3xl m-5"> Schüler/in hinzufügen</h1>
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
              name=""
              id=""
              onChange={getClassIdWithName}
              defaultValue={"default"}
            >
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
        <div className="m-4">
          <label className="mr-5">Gebutsdatum</label>
          <input
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
            className="border border-black rounded-md"
            name="birthday"
            type="date"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={addStudent}
            className="bg-cyan-500 hover:bg-cyan-600  font-bold text-white px-2 py-1 rounded-xl mt-5 "
          >
            Hinzufügen
          </button>
        </div>
      </form>
      <p className=" m-4 text-orange-500">{messageBackend}</p>
    </div>
  );
}
export default StudentForm;
