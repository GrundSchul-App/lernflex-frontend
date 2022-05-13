import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import * as AiIcons from "react-icons/ai";
import RemoteModalDelete from "./RemoteModalDelete";
import RemoteModalUpdate from "./RemoteModalUpdate";
import RemoteModalShow from "./RemoteModalShow";

const RemoteMainTable = () => {
  const { messageBackend, remoteWeeks, getDatum } = useContext(Context);

  const [showDeleteRemoteModal, setShowDeleteRemoteModal] = useState(false);
  const [showUpdateRemoteModal, setShowUpdateRemoteModal] = useState(false);
  const [showRemoteModal, setShowRemoteModal] = useState(false);
  const [remoteToDelete, setRemoteToDelete] = useState("");
  const [remoteToUpdate, setRemoteToUpdate] = useState("");
  const [remoteToShow, setRemoteToShow] = useState("");

  const deleteRemote = (remoteData) => {
    setRemoteToDelete(remoteData);
    setShowDeleteRemoteModal(true);
  };

  const updateRemote = (remoteData) => {
    setRemoteToUpdate(remoteData);
    setShowUpdateRemoteModal(true);
  };

  const showRemote = (remoteData) => {
    setRemoteToShow(remoteData);
    setShowRemoteModal(true);
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
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-6 py-4 text-left"
                    >
                      Woche Anfang
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {remoteWeeks.length !== 0 &&
                    remoteWeeks.map((remoteData, index) => {
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
                            {remoteData.classId.className}
                          </td>
                          <td className="text-gray-900  px-6 py-4 whitespace-nowrap font-light">
                            {getDatum(remoteData.startWeekDate)}
                          </td>

                          <td className="text-center">
                            <button
                              type="button"
                              className="text-green-500"
                              onClick={() => showRemote(remoteData)}
                            >
                              <AiIcons.AiFillEye
                                title="Wochenplan zeigen"
                                className="w-5 h-5 "
                              />
                            </button>

                            <button
                              type="button"
                              className="text-green-500 "
                              onClick={() => updateRemote(remoteData)}
                            >
                              <AiIcons.AiFillEdit
                                title="Wochenplan aktualisieren"
                                className="w-5 h-5 ml-3 "
                              />
                            </button>

                            <button
                              type="button"
                              className="text-red-500"
                              onClick={() => deleteRemote(remoteData)}
                            >
                              <AiIcons.AiFillDelete
                                title="Wochenplan löschen"
                                className="w-5 h-5 text-red ml-3 "
                              />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              {showRemoteModal && (
                <RemoteModalShow
                  remoteToShow={remoteToShow}
                  setShowRemoteModal={setShowRemoteModal}
                />
              )}
              {showUpdateRemoteModal && (
                <RemoteModalUpdate
                  remoteToUpdate={remoteToUpdate}
                  setShowUpdateRemoteModal={setShowUpdateRemoteModal}
                />
              )}
              {showDeleteRemoteModal && (
                <RemoteModalDelete
                  remoteToDelete={remoteToDelete}
                  setShowDeleteRemoteModal={setShowDeleteRemoteModal}
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

export default RemoteMainTable;
