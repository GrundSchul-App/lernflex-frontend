import React, { useContext } from "react";
import { Context } from "../../context/context";

import HomeworkType from "./HomeworkType";

function FilterByType({ setShowModal }) {
  const {
    homeworkType,
    setHomeworkType,
    setHomeworks,
    getHomeworksByType,
    setMessageBackendModal,
    messageBackendModal,
    setOption,
  } = useContext(Context);

  const filterHomeworksByType = (e) => {
    e.preventDefault();

    if (homeworkType === "") {
      setMessageBackendModal("Bitte füllen Sie das Feld aus");
      return;
    }
    getHomeworksByType(homeworkType)
      .then((res) => {
        if (res.message === "success") {
          setHomeworks(res.data);
          /*  console.log("hwType", res.data); */
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setShowModal(false);
    setOption("");
    setHomeworkType("");
    setMessageBackendModal("");
  };

  return (
    <div
      className="absolute inset-0 flex justify-center
         items-center "
    >
      <div
        className="flex flex-col p-4 w-1/2 bg-white justify-between items-center
           relative rounded-xl shadow-2xl"
      >
        <button
          onClick={() => {
            setShowModal(false);
            setOption("");
            setHomeworkType("");
            setMessageBackendModal("");
          }}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all
               hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">Filter bei Type</h3>

        <div className="w-2/3 mt-6 ">
          <HomeworkType />
        </div>

        <div className="flex justify-end">
          <button
            onClick={(e) => filterHomeworksByType(e)}
            className="flex  px-4 py-2 m-4 rounded-2xl bg-green-200 
               items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
          >
            Filtern
          </button>
        </div>

        <p className=" m-4 text-orange-500">{messageBackendModal}</p>
      </div>
    </div>
  );
}

export default FilterByType;
