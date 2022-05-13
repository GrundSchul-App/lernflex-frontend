import React, { useContext } from "react";
import { Context } from "../../context/context";

function HomeworksModalDelete({ homeworkToDelete, setShowDeleteHomeworkModal }) {
  const {
    setMessageBackend,
    deleteHomeworkById,
    databaseUpdated,
    setDatabaseUpdated,
  } = useContext(Context);

  function deleteHomework() {
    deleteHomeworkById(homeworkToDelete._id)
      .then((res) => {
        if (res.message === "success") {
          setMessageBackend("Datei gelöscht");
        }
        setDatabaseUpdated(!databaseUpdated);
      })
      .catch((err) => {
        console.log("err", err);
      });

      setShowDeleteHomeworkModal(false);
  }

  return (
    <div className="absolute inset-0 flex justify-center items-center ">
      <div className="flex flex-col p-4 bg-white justify-between items-center relative rounded-xl shadow-2xl">
        <button
          onClick={() => setShowDeleteHomeworkModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>

        <p className="p-4">
          Möchten Sie die Datei {homeworkToDelete.title} wirklich löschen?
        </p>
        <div className="flex center">
          <button
            className="flex  px-4 py-2 mr-2 rounded-2xl bg-gray-200 
            items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            onClick={() => setShowDeleteHomeworkModal(false)}
          >
            Abbrechen
          </button>
          <button
            className="flex  px-4 py-2 rounded-2xl bg-gray-200 
            items-center justify-center transition-all hover:bg-red-300 hover:shadow-lg"
            onClick={() => deleteHomework()}
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeworksModalDelete;
