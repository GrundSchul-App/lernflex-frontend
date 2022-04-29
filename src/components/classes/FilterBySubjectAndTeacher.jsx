import React, { useContext } from "react";
import ModuleSubjectTeacherSelect from "./ModuleSubjectTeacherSelect";
import { Context } from "../../context/context";

function FilterBySubjectAndTeacher({ setShowModal }) {
  const {
    setClasses,
    getClassesByModule,
    setOption,
    setModuleSubjectTeacher,
    moduleSubjectTeacher,
    setMessageBackendModal,
    messageBackendModal,
  } = useContext(Context);

  const filterClassesBySubjectAndTeacher = (e) => {
    e.preventDefault();

    const subjectId = moduleSubjectTeacher[0].subject;
    const teacherId = moduleSubjectTeacher[0].teacher;

    if (subjectId === undefined || teacherId === undefined) {
      setMessageBackendModal("Bitte füllen Sie die Felder aus");
      return;
    }

    getClassesByModule(subjectId, teacherId)
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
    setModuleSubjectTeacher([{}]);
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
            setModuleSubjectTeacher([{}]);
            setMessageBackendModal("");
          }}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all
               hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">Filter bei Fach - Lehrer/in</h3>

        <div className="w-2/3 mt-6 ">
          <ModuleSubjectTeacherSelect />
        </div>

        <div className="flex justify-end">
          <button
            onClick={(e) => filterClassesBySubjectAndTeacher(e)}
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

export default FilterBySubjectAndTeacher;
