import React, { useContext } from "react";
import { Context } from "../../context/context";

function RemoteModalDelete({ remoteToDelete, setShowDeleteRemoteModal }) {
  const {
    getDatum,
    setMessageBackend,
    deleteRemoteById,
    databaseUpdated,
    setDatabaseUpdated,
  } = useContext(Context);

  function deleteRemote() {
    deleteRemoteById(remoteToDelete._id)
      .then((res) => {
        if (res.message === "success") {
          setMessageBackend("Wochenplan gelöscht");
        }
        setDatabaseUpdated(!databaseUpdated);
      })
      .catch((err) => {
        console.log("err", err);
      });

    setShowDeleteRemoteModal(false);
  }

  return (
    <div
      className="absolute inset-0 flex justify-center
    items-center "
    >
      <div className="flex flex-col p-4 bg-white justify-between items-center relative rounded-xl shadow-3xl">
        <button
          onClick={() => setShowDeleteRemoteModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>

        <p className="p-4">
          Möchten Sie den Wochenplan Klasse {remoteToDelete.classId.className} -
          Woche {getDatum(remoteToDelete.startWeekDate)} wirklich löschen?
        </p>
        <div className="flex center">
          <button
            className="flex  px-4 py-2 mr-2 rounded-2xl bg-gray-200 
            items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            onClick={() => setShowDeleteRemoteModal(false)}
          >
            Abbrechen
          </button>
          <button
            className="flex  px-4 py-2 rounded-2xl bg-gray-200 
            items-center justify-center transition-all hover:bg-red-300 hover:shadow-lg"
            onClick={() => deleteRemote()}
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoteModalDelete;
