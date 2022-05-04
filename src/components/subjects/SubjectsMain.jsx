import React, { useContext, useEffect, useState } from "react";
import SubjectsMainTable from "./SubjectsMainTable";
import Search from "./Search";
import { Context } from "../../context/context";
import SubjectModalCreate from "./SubjectModalCreate";

function SubjectsMain() {
  const {
    getAllSubjects,
    setSubjects,
    subjects,
    setDatabaseUpdated,
    databaseUpdated,
    setSearchInput,
    setMessageBackend,
  } = useContext(Context);

  const [showCreateSubjectModal, setShowCreateSubjectModal] = useState(false);

  useEffect(() => {
    // getAllClasses(token, userId)

    getAllSubjects()
      .then((res) => {
        if (res.message === "success") {
          setSubjects(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [databaseUpdated]);

  return (
    <div className="flex-col w-full mr-4 sm:w-[100%] mt-4">
      <div className="flex justify-between ml-4 gap-4 flex-wrap w-full">
        <Search />
        <button
          className="flex grow  p-2
          rounded-2xl bg-green-200 h-[75px] 
          items-center justify-center transition-all
           hover:bg-white hover:shadow-xl"
          onClick={() => setShowCreateSubjectModal(true)}
        >
          + Fach
        </button>
        {showCreateSubjectModal && (
          <SubjectModalCreate
            setShowCreateSubjectModal={setShowCreateSubjectModal}
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
          }}
        >
          Alle Fächer
        </button>
      </div>
      {subjects.length !== 0 && <SubjectsMainTable />}
    </div>
  );
}

export default SubjectsMain;
