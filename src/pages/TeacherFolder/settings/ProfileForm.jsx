import React, { useContext, useState } from "react";
import { Context } from "../../../context/context";

function ProfileForm() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ number, setNumber ] = useState('');

  // async function addTeacher(e) {
  //   e.preventDefault();

    // const response = await fetch(`${BACKEND_URL}/addTeacher`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     modules: [{ classes: `${classId}`, subjects: `${subjectId}` }],
    //     // students:[{}]
    //     //  main_teacher:teacherChecked
    //   }),
    // });
    // const content = await response.json();
    // console.log("content result", content);

    // setTeachers([...teachers, content.data]);
    // console.log("data:", content.data);
    // closeModale();
    // //  window.location.reload();
    // setRefDataBase(!refDataBase);
  // }
  return (
    <div className="flex justify-center mt-4 border-solid border-2 w-[100%] absolute inset-0 top-1/4  bg-white">
      <form className="">
        <h1 className="text-xl m-4">Benutzerdaten Aktualisieren</h1>
        <div className="m-4 justify-between">
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
            <label className="">Telefonnummer</label>
            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="border border-black rounded-md"
              name="number"
              type="email"
            />
          </div>
          <div className="m-4">
            <label className="">Telefonnummer</label>
            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="border border-black rounded-md"
              name="number"
              type="email"
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-teal-500 hover:bg-green-600  font-bold text-white px-2 py-1 rounded-xl  ">
              Aktualisieren
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ProfileForm;
