import React, { useContext } from "react";
import { Context } from "../../context/context";

export default function AttendanceModalDelete({
  attendanceToDelete,
  setShowDeleteModal,
}) {
  const {
    getDatum,
    setDatabaseUpdated,
    databaseUpdated,
    setMessageBackend,
    deleteAttendanceById,
  } = useContext(Context);

  function deleteAttendance() {
    deleteAttendanceById(attendanceToDelete._id)
      .then((res) => {
        if (res.message === "success") {
          setMessageBackend("AbwesenheitsListe gelöscht!");
        }
        setDatabaseUpdated(!databaseUpdated);
      })
      .catch((err) => {
        console.log("err", err);
      });

    setShowDeleteModal(false);
  }

  return (
    <div className="absolute inset-0 flex justify-center items-center ">
      <div className="flex flex-col p-4 bg-white justify-between items-center relative rounded-xl shadow-3xl">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>

        <p className="p-4">
          Möchten Sie die Abwesenheitliste{" "}
          {attendanceToDelete.classId.className}-
          {attendanceToDelete.subject.subject_code} von&nbsp;
          {getDatum(attendanceToDelete.date)} wirklich löschen?
        </p>
        <div className="flex center">
          <button
            className="flex  px-4 py-2 mr-2 rounded-2xl bg-gray-200 
                items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            onClick={() => setShowDeleteModal(false)}
          >
            Abbrechen
          </button>
          <button
            className="flex  px-4 py-2 rounded-2xl bg-gray-200 
                items-center justify-center transition-all hover:bg-red-300 hover:shadow-lg"
            onClick={() => deleteAttendance()}
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
}
