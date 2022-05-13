import React, { useContext, useEffect } from "react";
import { Context } from "../../context/context";

import SelectInfoData from "./SelectInfoData";
import SelectClass from "./SelectClass";
import StartDate from "./StartDate";
import Week from "./Week";

function RemoteModalCreate({ setShowCreateRemoteModal }) {
  const {
    databaseUpdated,
    setDatabaseUpdated,
    setMessageBackend,
    messageBackendModal,
    setMessageBackendModal,
    classId,
    startDate,
    infoDataId,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    setMonday,
    setTuesday,
    setWednesday,
    setThursday,
    setFriday,
    setStartDate,
    setInfoDataId,
    setClassId,
    addRemoteWeekToDatabase,
  } = useContext(Context);

  function addRemoteWeek(e) {
    e.preventDefault();

    if (classId === "" || startDate === "") {
      setMessageBackendModal("Bitte füllen Sie die Felder aus");

      return;
    }

    const data = {
      classId: classId,
      startWeekDate: startDate,
      monday: monday || [],
      tuesday: tuesday || [],
      wednesday: wednesday || [],
      thursday: thursday || [],
      friday: friday || [],
    };

    if (infoDataId.length !== 0) {
      data.infoData = infoDataId;
    }

    if (data.length !== 0) {
      addRemoteWeekToDatabase(data)
        .then((res) => {
          if (res.message === "success") {
            setMessageBackend("Neue Wochenplan hinzugefügt!");
          } else {
            setMessageBackend(res.message);
          }
          setDatabaseUpdated(!databaseUpdated);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    setShowCreateRemoteModal(false);
    setMessageBackend("");
    setMonday([]);
    setTuesday([]);
    setWednesday([]);
    setThursday([]);
    setFriday([]);
    setClassId("");
    setStartDate("");
    setInfoDataId("");

    setMessageBackendModal("");
  }

  useEffect(() => {
    setMessageBackendModal("");
    setMessageBackend("");
  }, []);

  return (
    <div
      className="absolute inset-0  flex justify-center
     items-center "
    >
      <div
        className="flex flex-col p-4 w-1/2 bg-white justify-between items-center
       relative rounded-xl shadow-2xl"
      >
        <button
          onClick={() => setShowCreateRemoteModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all
           hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">Neue Online Wochenplan</h3>

        <form className="w-full max-w-xl mt-8">
          <SelectInfoData />

          <SelectClass />

          <StartDate />

          <Week />

          <div className="flex justify-end">
            <button
              onClick={(e) => addRemoteWeek(e)}
              className="flex  px-4 py-2 m-4 rounded-2xl font-semibold bg-green-200 
           items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
            >
              Wochenplan speichern
            </button>
          </div>
        </form>

        <p className=" m-4 text-orange-500">{messageBackendModal}</p>
      </div>
    </div>
  );
}

export default RemoteModalCreate;
