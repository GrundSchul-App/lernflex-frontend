import React, { useContext } from "react";
import { Context } from "../../context/context";

function ClassesModalDelete({ classToDelete, setShowDeleteClassModal }) {
  const {
    setMessageBackend,
    deleteClassById,
    databaseUpdated,
    setDatabaseUpdated,
  } = useContext(Context);

  function deleteClass() {
    deleteClassById(classToDelete._id)
      .then((res) => {
        if (res.message === "success") {
          setMessageBackend("Klasse gelöscht");
        }
        setDatabaseUpdated(!databaseUpdated);
      })
      .catch((err) => {
        console.log("err", err);
      });

    setShowDeleteClassModal(false);
  }

  return (
    <div className="absolute inset-0 flex justify-center items-center ">
      <div className="flex flex-col p-4 bg-white justify-between items-center relative rounded-xl shadow-3xl">
        <button
          onClick={() => setShowDeleteClassModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>

        <p className="p-4">
          Möchten Sie die Klasse {classToDelete.className} wirklich löschen?
        </p>
        <div className="flex center">
          <button
            className="flex  px-4 py-2 mr-2 rounded-2xl bg-gray-200 
            items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            onClick={() => setShowDeleteClassModal(false)}
          >
            Abbrechen
          </button>
          <button
            className="flex  px-4 py-2 rounded-2xl bg-gray-200 
            items-center justify-center transition-all hover:bg-red-300 hover:shadow-lg"
            onClick={() => deleteClass()}
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassesModalDelete;
