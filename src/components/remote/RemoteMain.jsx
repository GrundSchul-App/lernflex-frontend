import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import SearchRemote from "./SearchRemote";
import FilterRemote from "./FilterRemote";
import RemoteModalCreate from "./RemoteModalCreate";
import RemoteMainTable from "./RemoteMainTable";

function RemoteMain() {
  const {
    getAllRemoteWeeks,
    remoteWeeks,
    setOption,
    setRemoteWeeks,
    setAllRemotes,
    setDatabaseUpdated,
    databaseUpdated,
    setSearchInput,
    setMessageBackend,
  } = useContext(Context);

  const [showCreateRemoteModal, setShowCreateRemoteModal] = useState(false);

  useEffect(() => {
    getAllRemoteWeeks()
      .then((res) => {
        if (res.message === "success") {
          setRemoteWeeks(res.data);
          setAllRemotes(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [databaseUpdated]);

  return (
    <div className="flex-col w-full mr-4 sm:w-[100%] mt-4">
      <div className="flex justify-between ml-4 gap-4 flex-wrap w-full">
        <SearchRemote />
        {/*  <FilterRemote /> */}

        <button
          className="flex grow  p-2
          rounded-2xl bg-green-200 h-[75px] 
          items-center justify-center transition-all
           hover:bg-white hover:shadow-xl"
          onClick={() => setShowCreateRemoteModal(true)}
        >
          + Online Wochenplan
        </button>
        {showCreateRemoteModal && (
          <RemoteModalCreate
            setShowCreateRemoteModal={setShowCreateRemoteModal}
          />
        )}

        <button
          className="flex grow  p-2
        rounded-2xl bg-green-200 h-[75px] 
        items-center justify-center transition-all
         hover:bg-white hover:shadow-xl"
          onClick={() => {
            setDatabaseUpdated(!databaseUpdated);
            setSearchInput("");
            setMessageBackend("");
            setOption("");
          }}
        >
          Alle Online Wochenpläne
        </button>
      </div>
      {remoteWeeks.length !== 0 && <RemoteMainTable />}
    </div>
  );
}

export default RemoteMain;
