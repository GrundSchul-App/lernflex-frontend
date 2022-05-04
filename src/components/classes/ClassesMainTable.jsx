import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import * as AiIcons from "react-icons/ai";
import ClassesModalDelete from "./ClassesModalDelete";

import ClassesModalUpdate from "./ClassesModalUpdate";

const ClassesMainTable = () => {
  const { messageBackend, classes } = useContext(Context);
  console.log(classes);

  const [showDeleteClassModal, setShowDeleteClassModal] = useState(false);
 
  const [showUpdateClassModal, setShowUpdateClassModal] = useState(false);

  const [classToDelete, setClassToDelete] = useState("");
  const [classToUpdate, setClassToUpdate] = useState("");

  const deleteClass = (classData) => {
    setClassToDelete(classData);
    setShowDeleteClassModal(true);
  };

  const updateClass = (classData) => {
    setClassToUpdate(classData);
    setShowUpdateClassModal(true);
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
                      Klasse
                    </th>
                    {/* <th className="font-medium text-gray-900  text-left">
                      Klassenlehrer/in
                    </th>
                    <th className="font-medium text-gray-900  text-left">
                      Fach - Lehrer/in
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {classes.map((classData, index) => {
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
                          {classData.className}
                        </td>
                      {/*   <td className="text-left font-light">
                          {classData.classTeacher.firstName}{" "}
                          {classData.classTeacher.lastName}
                        </td>

                        <td className="text-left font-light">
                          {classData.modules.map((modul, index) => {
                            return (
                              <ul
                                className="flex justify-between list-none"
                                key={index}
                              >
                                <li>
                                  {modul.subject.subject_code} -{" "}
                                  {modul.teacher.lastName}
                                </li>
                              </ul>
                            );
                          })}
                        </td> */}
                        <td className="text-center">
                          <button
                            type="button"
                            className="text-green-500"
                            onClick={() => updateClass(classData)}
                          >
                            <AiIcons.AiFillEdit
                              title="Klasse aktualisieren"
                              className="w-5 h-5 "
                            />
                          </button>
                          {showUpdateClassModal && (
                            <ClassesModalUpdate
                              classToUpdate={classToUpdate}
                              setShowUpdateClassModal={setShowUpdateClassModal}
                            />
                          )}

                          <button
                            type="button"
                            className="text-red-500"
                            onClick={() => deleteClass(classData)}
                          >
                            <AiIcons.AiFillDelete
                              title="Klasse löschen"
                              className="w-5 h-5 text-red ml-3 "
                            />
                          </button>
                          {showDeleteClassModal && (
                            <ClassesModalDelete
                              classToDelete={classToDelete}
                              setShowDeleteClassModal={setShowDeleteClassModal}
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

export default ClassesMainTable;
