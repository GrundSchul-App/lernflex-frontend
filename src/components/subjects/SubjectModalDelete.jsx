import React, { useContext } from "react";
import { Context } from "../../context/context";

function SubjectModalDelete({ subject, setShowDeleteSubjectModal }) {
  const {
    setMessageBackend,
    deleteSubjectById,
    databaseUpdated,
    setDatabaseUpdated,
  } = useContext(Context);

  function deleteSubject() {
    deleteSubjectById(subject._id)
      .then((res) => {
        if (res.message === "success") {
          setMessageBackend("Fach gelöscht");
        }
        setDatabaseUpdated(!databaseUpdated);
      })
      .catch((err) => {
        console.log("err", err);
      });

    setShowDeleteSubjectModal(false);
  }

  return (
    <div className="absolute inset-0 bg-black bg-opacity-10  flex justify-center items-center ">
      <div className="flex flex-col p-4 bg-white justify-between items-center relative rounded-xl">
        <button
          onClick={() => setShowDeleteSubjectModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>

        <p className="p-4">
          Möchten Sie das Fach {subject.subject_title} wirklich löschen?
        </p>
        <div className="flex center">
          <button
            className="flex  px-4 py-2 mr-2 rounded-2xl bg-gray-200 
            items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            onClick={() => setShowDeleteSubjectModal(false)}
          >
            Abbrechen
          </button>
          <button
            className="flex  px-4 py-2 rounded-2xl bg-gray-200 
            items-center justify-center transition-all hover:bg-red-300 hover:shadow-lg"
            onClick={() => deleteSubject()}
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubjectModalDelete;
