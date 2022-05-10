import React, { useContext, useEffect, useState } from "react";
import HomeworksMainTable from "./HomeworksMainTable";
import SearchHomeworks from "./SearchHomeworks";
import { Context } from "../../context/context";
import FilterHomeworks from "./FilterHomeworks";

import HomeworksModalCreate from "./HomeworksModalCreate";

function HomeworksMain() {
  const {
    
    setOption,
    getAllHomeworks,
    homeworks,
    setHomeworks,
    setAllHomeworks,
    setDatabaseUpdated,
    databaseUpdated,
    setSearchInput,
    setMessageBackend,
  } = useContext(Context);

  const [showCreateHomeworkModal, setShowCreateHomeworkModal] = useState(false);

  useEffect(() => {   
    
    getAllHomeworks()
      .then((res) => {
        if (res.message === "success") {
          /*  setClasses(res.data);
          setAllClasses(res.data); */
          /* let sortHomeworks = res.data;
          sortHomeworks.sort((a, b) =>
            a.subject.subject_code > b.subject.subject_code
              ? 1
              : b.subject.subject_code > a.subject.subject_code
              ? -1
              : 0
          ); */

          /* setHomeworks(sortHomeworks);
          setAllHomeworks(sortHomeworks); */
          setHomeworks(res.data);
          setAllHomeworks(res.data);
           console.log("allHomeworks", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [databaseUpdated]);

  return (
    <div className="flex-col w-full mr-4 sm:w-[100%] mt-4">
      <div className="flex justify-between ml-4 gap-4 flex-wrap w-full">
        <SearchHomeworks />
        <FilterHomeworks />

        <button
          className="flex grow  p-2
          rounded-2xl bg-green-200 h-[75px] 
          items-center justify-center transition-all
           hover:bg-white hover:shadow-xl"
          onClick={() => setShowCreateHomeworkModal(true)}
        >
          Datei hochladen
        </button>
        {showCreateHomeworkModal && (
          <HomeworksModalCreate
            setShowCreateHomeworkModal={setShowCreateHomeworkModal}
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
          Alle Hausaufgaben Dateien
        </button>
      </div>
      {homeworks.length !== 0 && <HomeworksMainTable />}
    </div>
  );
}

export default HomeworksMain;
