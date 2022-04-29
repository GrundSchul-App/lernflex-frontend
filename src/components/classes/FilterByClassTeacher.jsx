import React, { useContext } from "react";
import ClassTeacherSelect from "./ClassTeacherSelect";
import { Context } from "../../context/context";

function FilterByClassTeacher({ setShowModal }) {
  const {
    getClassesByClassTeacherId,
    setClasses,
    setMessageBackendModal,
    messageBackendModal,
    classTeacher,
    setClassTeacher,
    setOption,
  } = useContext(Context);

  const filterClassesByClassTeacher = (e) => {
    e.preventDefault();

    if (classTeacher === "") {
      setMessageBackendModal("Bitte füllen Sie das Feld aus");
      return;
    }
    getClassesByClassTeacherId(classTeacher)
      .then((res) => {
        if (res.message === "success") {
          setClasses(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setShowModal(false);
    setOption("");
    setClassTeacher("");
    setMessageBackendModal("");
  };

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-30  flex justify-center
         items-center "
    >
      <div
        className="flex flex-col p-4 w-1/2 bg-white justify-between items-center
           relative rounded-xl"
      >
        <button
          onClick={() => {
            setShowModal(false);
            setOption("");
            setClassTeacher("");
            setMessageBackendModal("");
          }}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all
               hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">Filter bei Klassenlehrer/in</h3>

        <div className="w-2/3 mt-6 ">
          <ClassTeacherSelect />
        </div>

        <div className="flex justify-end">
          <button
            onClick={(e) => filterClassesByClassTeacher(e)}
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

export default FilterByClassTeacher;
