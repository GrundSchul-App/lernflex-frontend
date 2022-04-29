import React, { useContext } from "react";
import SelectTeacher from "./SelectTeacher";
import { Context } from "../../context/context";
import SelectSubject from "./SelectSubject";

function ModuleSubjectTeacherSelect() {
  const { moduleSubjectTeacher, setModuleSubjectTeacher, option } =
    useContext(Context);

  const handleRemoveClick = (index) => {
    const list = [...moduleSubjectTeacher];
    list.splice(index, 1);
    setModuleSubjectTeacher(list);
  };

  const handleAddClick = () => {
    setModuleSubjectTeacher([...moduleSubjectTeacher, {}]);
  };

  return (
    <div>
      {moduleSubjectTeacher.map((modul, ind) => {
        return (
          <div className=" flex flex-row justify-between" key={ind}>
            <div className=" flex flex-row w-full">
              <SelectSubject ind={ind} />
              <SelectTeacher ind={ind} />
            </div>

            <div className="flex flex-row w-1/6 justify-end">
              {moduleSubjectTeacher.length !== 1 &&
                option !== "subjectTeacher" && (
                  <button
                    className="ml-2 bg-green-200 p-2 rounded mb-6
                     hover:bg-gray-200 transition-all hover:shadow-lg"
                    onClick={() => handleRemoveClick(ind)}
                  >
                    -
                  </button>
                )}

              {moduleSubjectTeacher.length - 1 === ind &&
                option !== "subjectTeacher" && (
                  <button
                    className="ml-2 bg-green-200 p-2 rounded mb-6
                     hover:bg-gray-200 transition-all hover:shadow-lg"
                    onClick={handleAddClick}
                  >
                    +
                  </button>
                )}
            </div>
          </div>
        );
      })}
      {/*  <div style={{ marginTop: 20 }}>
        {JSON.stringify(moduleSubjectTeacher)}
      </div> */}
    </div>
  );
}

export default ModuleSubjectTeacherSelect;
