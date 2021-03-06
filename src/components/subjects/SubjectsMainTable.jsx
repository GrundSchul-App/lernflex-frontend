import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import * as AiIcons from "react-icons/ai";
import SubjectModalDelete from "./SubjectModalDelete";

import SubjectModalUpdate from "./SubjectModalUpdate";

const SubjectsMainTable = () => {
  const { messageBackend, subjects } = useContext(Context);

  const [ShowDeleteSubjectModal, setShowDeleteSubjectModal] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState("");
  const [subjectToUpdate, setSubjectToUpdate] = useState("");

  const [showUpdateSubjectModal, setShowUpdateSubjectModal] = useState(false);

  function deleteSubject(subject) {
    setSubjectToDelete(subject);
    setShowDeleteSubjectModal(true);
  }

  const updateSubject = (subject) => {
    setSubjectToUpdate(subject);
    setShowUpdateSubjectModal(true);
  };

  return (
    <div className="rounded-2xl m-4 p-4 bg-white w-full mr-4 max-h-[590px]   overflow-y-auto scrollbar-hide">
     

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Code
                    </th>
                    <th className="font-medium text-gray-900  text-left">
                      Fachtitle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subjectData, index) => {
                    return (
                      <tr
                        key={index}
                        className={
                          (index + 1) % 2 === 0
                            ? "border-b"
                            : "bg-gray-100 border-b"
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-gray-900  px-6 py-4 whitespace-nowrap">
                          {subjectData.subject_code}
                        </td>
                        <td className="text-left">
                          {subjectData.subject_title}
                        </td>
                        <td className="text-center">
                          <button
                            type="button"
                            className="text-green-500"
                            onClick={() => updateSubject(subjectData)}
                          >
                            <AiIcons.AiFillEdit
                              title="Fach aktualisieren"
                              className="w-5 h-5 "
                            />
                          </button>

                          <button
                            type="button"
                            className="text-red-500"
                            onClick={() => deleteSubject(subjectData)}
                          >
                            <AiIcons.AiFillDelete
                              title="Fach l??schen"
                              className="w-5 h-5 text-red ml-3 "
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {showUpdateSubjectModal && (
                <SubjectModalUpdate
                  subject={subjectToUpdate}
                  setShowUpdateSubjectModal={setShowUpdateSubjectModal}
                />
              )}

              {ShowDeleteSubjectModal && (
                <SubjectModalDelete
                  subject={subjectToDelete}
                  setShowDeleteSubjectModal={setShowDeleteSubjectModal}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className=" m-4 text-orange-500">{messageBackend}</p>
      </div>
    </div>
  );
};

export default SubjectsMainTable;
