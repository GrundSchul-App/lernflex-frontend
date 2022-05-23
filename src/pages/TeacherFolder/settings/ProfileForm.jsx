import React, { useState } from "react";

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
      <form className="w-[65%]">
        <h1 className="text-xl m-4 text-center">Benutzerdaten Aktualisieren</h1>
        <div className="m-4 w-full">
          <div className="mb-4 flex justify-between">
            <label className="mr-2">Vorname</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="border border-gray-500 rounded-md w-52 pl-2"
              name="firstName"
              type="text"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <label className="mr-2">Nachname</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="border border-gray-500 rounded-md w-52 pl-2"
              name="lastName"
              type="text"
            />
          </div>

          <div className="mb-4 flex justify-between">
            <label className="mr-4">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border border-gray-500 rounded-md w-52 pl-2"
              name="email"
              type="email"
            />
          </div>

          <div className="mb-4 flex justify-between">
            <label className="mr-4">Telefon.Nr</label>
            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="border border-black rounded-md w-52 pl-2"
              name="number"
              type="number"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <label className="mr-4">Geburtsdatum</label>
            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="border border-black rounded-md w-52 pl-2"
              name="number"
              type="date"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <label className="">Adresse</label>
            <textarea
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="border border-gray-500 rounded-md w-52 pl-2"
              name="number"
              type="email"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <label className="">Fächer</label>
            <textarea
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="border border-black rounded-md w-52 pl-2"
              name="number"
              type="email"
            />
          </div>

          <div className="flex justify-left">
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
