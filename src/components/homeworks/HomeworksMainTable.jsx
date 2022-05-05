import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import * as AiIcons from "react-icons/ai";
import HomeworksModalDelete from "./HomeworksModalDelete";

import HomeworksModalUpdate from "./HomeworksModalUpdate";

const HomeworksMainTable = () => {
  const { messageBackend, homeworks } = useContext(Context);

  const [showDeleteHomeworkModal, setShowDeleteHomeworkModal] = useState(false);

  const [showUpdateHomeworkModal, setShowUpdateHomeworkModal] = useState(false);

  const [homeworkToDelete, setHomeworkToDelete] = useState("");
  const [homeworkToUpdate, setHomeworkToUpdate] = useState("");

  const deleteHomework = (homeworkData) => {
    setHomeworkToDelete(homeworkData);
    setShowDeleteHomeworkModal(true);
  };

  const updateHomework = (homeworkData) => {
    setHomeworkToUpdate(homeworkData);
    setShowUpdateHomeworkModal(true);
  };

  return (
    <div className="rounded-2xl m-4 p-4 bg-white w-full mr-4">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Lehrer/in
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Fach
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Datei
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {homeworks.length !== 0 &&
                    homeworks.map((homeworkData, index) => {
                      return (
                        <tr
                          key={index}
                          className={
                            (index + 1) % 2 === 0
                              ? "border-b"
                              : "bg-gray-100 border-b"
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap font-light text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {homeworkData.teacher.lastName}
                          </td>
                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {homeworkData.subject.subject_code}
                          </td>
                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {homeworkData.title}
                          </td>

                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {homeworkData.fileName}
                          </td>
                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {homeworkData.type}
                          </td>

                          <td className="text-center">
                            <button
                              type="button"
                              className="text-green-500"
                              onClick={() => updateHomework(homeworkData)}
                            >
                              <AiIcons.AiFillEdit
                                title="Hausaufgabe oder Datei aktualisieren"
                                className="w-5 h-5 "
                              />
                            </button>
                            {showUpdateHomeworkModal && (
                              <HomeworksModalUpdate
                                homeworkToUpdate={homeworkToUpdate}
                                setShowUpdateHomeworkModal={
                                  setShowUpdateHomeworkModal
                                }
                              />
                            )}

                            <button
                              type="button"
                              className="text-red-500"
                              onClick={() => deleteHomework(homeworkData)}
                            >
                              <AiIcons.AiFillDelete
                                title="Datei löschen"
                                className="w-5 h-5 text-red ml-3 "
                              />
                            </button>
                            {showDeleteHomeworkModal && (
                              <HomeworksModalDelete
                                homeworkToDelete={homeworkToDelete}
                                setShowDeleteHomeworkModal={
                                  setShowDeleteHomeworkModal
                                }
                              />
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
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

export default HomeworksMainTable;
