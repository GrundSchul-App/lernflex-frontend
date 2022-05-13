import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";
import * as AiIcons from "react-icons/ai";
import AttendanceModalDelete from "./AttendanceModalDelete";

const MainTableAllAttendance = () => {
  const {
    messageBackend,
    attendanceList,
    allAttendanceList,
    setAllAttendanceList,
    getDatum,
    databaseUpdated,
  } = useContext(Context);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showStudentList, setShowStudentList] = useState(false);

  const [attendanceToDelete, setAttendanceToDelete] = useState("");

  const deleteAttendance = (list) => {
    setAttendanceToDelete(list);
    setShowDeleteModal(true);
  };

  useEffect(() => {
    attendanceList()
      .then((res) => {
        if (res.message === "success") {
          setAllAttendanceList(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [databaseUpdated]);

  return (
    <div className="rounded-2xl p-4 bg-white w-full mt-4">
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
                      Datum
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Klasse
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Fach
                    </th>

                    {/*   <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Lehrer/in
                    </th> */}
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      <div className="flex flex-row align-middle justify-start ">
                        <p>Abwesenden Studenten&nbsp;</p>
                        <button
                          type="button"
                          className=""
                          onClick={() => setShowStudentList(!showStudentList)}
                        >
                          {!showStudentList && (
                            <AiIcons.AiFillEye
                              title="Liste abwesenden Studenten zeigen"
                              className="w-5 h-5 text-green-500 "
                            />
                          )}
                          {showStudentList && (
                            <AiIcons.AiFillEyeInvisible
                              title="Liste abwesenden Studenten nicht mehr zeigen"
                              className="w-5 h-5 text-red-400"
                            />
                          )}
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allAttendanceList.length !== 0 &&
                    allAttendanceList.map((list, index) => {
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
                            {getDatum(list.date)}
                          </td>
                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {list.classId.className}
                          </td>
                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {list.subject.subject_code}
                          </td>

                          {/*  <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {list.teacher.lastName}
                          </td> */}
                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {!showStudentList && <p>...</p>}
                            {showStudentList &&
                              list.absent.map((student, index) => {
                                return (
                                  <p key={index}>
                                    {student.firstName} {student.lastName}
                                  </p>
                                );
                              })}
                          </td>

                          <td className="text-center">
                            <button
                              type="button"
                              className="text-red-500"
                              onClick={() => deleteAttendance(list)}
                            >
                              <AiIcons.AiFillDelete
                                title="Abwesenheitsliste löschen"
                                className="w-5 h-5 text-red mr-4 "
                              />
                            </button>
                            {showDeleteModal && (
                              <AttendanceModalDelete
                                attendanceToDelete={attendanceToDelete}
                                setShowDeleteModal={setShowDeleteModal}
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

export default MainTableAllAttendance;
