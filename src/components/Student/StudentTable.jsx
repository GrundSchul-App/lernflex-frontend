import React, { useContext} from "react";
import BodyTable from "./BodyTable";

import { Context } from "../../context/context";

function StudentTable(props) {
  const {openModale,students } = useContext(Context);






  return (
    <div className="rounded-2xl m-4 mt-0 py-4 bg-white max-h-[590px]   overflow-y-auto scrollbar-hide">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
              <div className="flex justify-end ">
                <button onClick={openModale} className="p-2  bg-green-600 hover:bg-green-800 m-4 mt-2 text-gray-100 rounded-xl shadow top-8 font-bold">
                  {" "}
                  + Student
                </button>
              </div>
              <form >
                <table  >
                  <thead className="bg-white border-b text-left">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-left text-sm text-gray-900 px-4 py-4 "
                      >
                        Vorname
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        NachName
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Klasse
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Gebutsdatum
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Geschlecht
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      students.map((student, index) => {
                        return (
                          <BodyTable
                            key={index}
                            student={student}
                            index={index}
                          />
                        );
                      })}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentTable;
