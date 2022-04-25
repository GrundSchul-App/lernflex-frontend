import React, { useContext, useState } from "react";
import { Context } from "../../context/context";

function SubjectModalCreate({ setShowCreateSubjectModal }) {
  const {
    setMessageBackend,
    addSubjectToDatabase,
    databaseUpdated,
    setDatabaseUpdated,
  } = useContext(Context);

  const [subjectTitle, setSubjectTitle] = useState("");
  const [subjectCode, setSubjectCode] = useState("");

  function addSubject() {
    const data = {
      subject_code: subjectCode,
      subject_title: subjectTitle,
    };
    if (data.length !== 0) {
      addSubjectToDatabase(data)
        .then((res) => {
          if (res.message === "success") {
            setMessageBackend("Fach hinzugefügt!");
          } else {
            setMessageBackend(res.message);
          }
          setDatabaseUpdated(!databaseUpdated);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    setShowCreateSubjectModal(false);
  }

  return (
    <div className="absolute inset-0 bg-black bg-opacity-30  flex justify-center items-center ">
      <div className="flex flex-col p-4 bg-white justify-between items-center relative rounded-xl">
        <button
          onClick={() => setShowCreateSubjectModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">Neues Fach</h3>

        <form className="w-full max-w-sm mt-8" onSubmit={addSubject}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-code"
              >
                Fach Code
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-code"
                type="text"
                onChange={(e) => setSubjectCode(e.target.value)}
                value={subjectCode}
                placeholder="DE..."
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-title"
              >
                Fach
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-title"
                type="text"
                onChange={(e) => setSubjectTitle(e.target.value)}
                value={subjectTitle}
                placeholder="Deutsch..."
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={addSubject}
              className="flex  px-4 py-2 m-4 rounded-2xl bg-green-200 
           items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            >
              Fach Hinzufügen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubjectModalCreate;
