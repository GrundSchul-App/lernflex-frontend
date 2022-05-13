import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
/* import ClassTeacherUpdateSelect from "./ClassTeacherUpdateSelect";
import ModuleSubjectTeacherUpdateSelect from "./ModuleSubjectTeacherUpdateSelect"; */

function ClassesModalUpdate({ classToUpdate, setShowUpdateClassModal }) {
  const {
    setMessageBackend,
    updateClassToDatabase,
    databaseUpdated,
    setDatabaseUpdated,
  /*  classTeacher,
    setClassTeacher, */ /* 
    moduleSubjectTeacher,
    setModuleSubjectTeacher, */
    messageBackendModal,
    setMessageBackendModal,
  } = useContext(Context);

  const [className, setClassName] = useState("");

  function updateClass(e) {
    e.preventDefault();
    if (
      (className === "" && classToUpdate.className === "") /*  ||
      (classTeacher === "" && classToUpdate.classTeacher === "") */ /*||
      (moduleSubjectTeacher === [{}] && classToUpdate.mudules === [{}]) ||
      (moduleSubjectTeacher.length !== 0 && moduleSubjectTeacher.includes({})) */
    ) {
      setMessageBackendModal("Bitte füllen Sie das Feld aus");

      return;
    }

    const data = {
      _id: classToUpdate._id,
      className: className || classToUpdate.className ,
      /* classTeacher: classTeacher || classToUpdate.classTeacher, *//*
      modules: moduleSubjectTeacher || classToUpdate.modules, */
    };
   
    if (data.length !== 0) {
      updateClassToDatabase(data)
        .then((res) => {
          if (res.message === "success") {
            setMessageBackend("Klasse aktualisiert!");
          } else {
            setMessageBackend(res.message);
          }
          setDatabaseUpdated(!databaseUpdated);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    setShowUpdateClassModal(false);
    /* setModuleSubjectTeacher([{}]); */
    setMessageBackend("");
    setClassName("");
   /*  setClassTeacher(""); */
  }

  return (
    <div
      className="absolute inset-0 flex justify-center
     items-center "
    >
      <div
        className="flex flex-col p-4 w-1/2 bg-white justify-between items-center
       relative rounded-xl shadow-2xl"
      >
        <button
          onClick={() => setShowUpdateClassModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all
           hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">Klasse aktualisieren</h3>

        <form className="w-full max-w-md mt-8">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right 
                mb-1 md:mb-0 pr-4"
                htmlFor="inline-name"
              >
                Klassenname
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 
                border-gray-200 rounded w-full py-2 px-4
                 text-gray-700 leading-tight focus:outline-none 
                 focus:bg-white focus:border-green-500"
                id="inline-name"
                type="text"
                onChange={(e) => setClassName(e.target.value)}
                defaultValue={classToUpdate.className}
              />
            </div>
          </div>

        {/*   <ClassTeacherUpdateSelect
            classTeacherData={classToUpdate.classTeacher}
          /> */}
          {/* 
          <ModuleSubjectTeacherUpdateSelect
            subjectTeacherData={classToUpdate.modules}
          /> */}

          <div className="flex justify-end">
            <button
              onClick={(e) => updateClass(e)}
              className="flex  px-4 py-2 m-4 rounded-2xl bg-green-200 
           items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            >
              Klasse aktualisieren
            </button>
          </div>
        </form>

        <p className=" m-4 text-orange-500">{messageBackendModal}</p>
      </div>
    </div>
  );
}

export default ClassesModalUpdate;
