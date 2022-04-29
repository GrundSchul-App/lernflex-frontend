import React, { useContext, useEffect, useState } from "react";
import ClassesMainTable from "./ClassesMainTable";
import SearchClasses from "./SearchClasses";
import { Context } from "../../context/context";
import FilterClasses from "./FilterClasses";
import ClassesModalCreate from "./ClassesModalCreate";

function ClassesMain() {
  const {
    getAllClasses,
    classes,
    setClasses,
    setAllClasses,
    setDatabaseUpdated,
    databaseUpdated,
    setSearchInput,
    setMessageBackend,
   
  } = useContext(Context);

  const [showCreateClassModal, setShowCreateClassModal] = useState(false);

  useEffect(() => {
    // getAllClasses(token, userId)
    getAllClasses()
      .then((res) => {
        if (res.message === "success") {
          setClasses(res.data);
          setAllClasses(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [databaseUpdated]);

  return (
    <div className="flex-col w-full mr-4 sm:w-[100%] mt-4">
      <div className="flex justify-between ml-4 gap-4 flex-wrap w-full">
        <SearchClasses />
        <FilterClasses />

        <button
          className="flex grow  p-2
          rounded-2xl bg-green-200 h-[75px] 
          items-center justify-center transition-all
           hover:bg-white hover:shadow-xl"
          onClick={() => setShowCreateClassModal(true)}
        >
          + Klasse
        </button>
        {showCreateClassModal && (
          <ClassesModalCreate
            setShowCreateClassModal={setShowCreateClassModal}          />
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
          }}
        >
          Alle Klassen
        </button>

      
      </div>
      {classes.length !== 0 && <ClassesMainTable />}
    </div>
  );
}

export default ClassesMain;
