import React, { useContext, useEffect } from "react";
import SelectTeacherUpdate from "./SelectTeacherUpdate";
import { Context } from "../../context/context";
import SelectSubjectUpdate from "./SelectSubjectUpdate";

function ModuleSubjectTeacherUpdateSelect({ subjectTeacherData }) {
  const { moduleSubjectTeacher, setModuleSubjectTeacher } = useContext(Context);

  const handleRemoveClick = (index) => {
    const list = [...moduleSubjectTeacher];
    list.splice(index, 1);
    setModuleSubjectTeacher(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setModuleSubjectTeacher([...moduleSubjectTeacher, {}]);
  };

  useEffect(() => {
    if (subjectTeacherData.length !== 0) {
      setModuleSubjectTeacher(subjectTeacherData);
    }  
  }, []);

  return (
    <div>
      {moduleSubjectTeacher.map((modul, ind) => {
        return (
          <div className=" flex flex-row justify-between" key={ind}>
            <div className=" flex flex-row w-full">
              <SelectSubjectUpdate ind={ind} subjectTeacherData={modul} />
              <SelectTeacherUpdate ind={ind} subjectTeacherData={modul} />
            </div>

            <div className="flex flex-row w-1/6 justify-end">
              {moduleSubjectTeacher.length !== 1 && (
                <button
                  className="ml-2 bg-green-200 p-2 rounded mb-6
                   hover:bg-gray-200 transition-all hover:shadow-lg"
                  onClick={() => handleRemoveClick(ind)}
                >
                  -
                </button>
              )}

              {moduleSubjectTeacher.length - 1 === ind && (
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
      {/* <div style={{ marginTop: 20 }}>
        {JSON.stringify(moduleSubjectTeacher)}
      </div>  */}
    </div>
  );
}

export default ModuleSubjectTeacherUpdateSelect;
