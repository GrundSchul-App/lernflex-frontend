import React, { useContext } from "react";
import { Context } from "../../context/context";
import AttendanceBodyTable from "./AttendanceBodyTable";

function AttendanceListTable() {
  const {
    
   
    list,
    studentChecked,
    setStudentChecked,selectAbsentAndAttendance
  } = useContext(Context);
  // console.log("getAnwiesenheitsListe****", getAnwiesenheitsListe );
  // console.log("listeeeeeeeeeeee", list);
  // console.log("55555", classListSubj);

  // const checked = () => {
  //   setStudentChecked(!studentChecked);
  //   console.log("checked", studentChecked);
   

  // };

  return (
    <div className="rounded-2xl m-4 mt-0 py-4 bg-white ">
      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
              <div className="flex justify-end "></div>
              <form>
                <table>
                  <thead className="bg-white border-b text-left   ">
                    <tr>
                      <th
                        scope="col"
                        className=" text-sm text-gray-900 px-3 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-left text-sm   text-gray-900 px-3 py-4 "
                      >
                        Datum
                      </th>
                      <th
                        scope="col"
                        className="text-left text-sm   text-gray-900 px-6 py-4 "
                      >
                        Vorname
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        NachName
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Klasse
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Fach
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        Geschlecht
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>

                      <th>
                       <input type="checkbox" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.length !== 0 &&
                      list[0].absent.map((item, index) => {

                        console.log('listeeee', list);
                        
                        console.log("liste[index]absent id", item._id);


                        
                        return (
                          <AttendanceBodyTable
                            key={index}
                            list={list}
                            index={index}
                            item={item}
                            // check={checked}
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

export default AttendanceListTable;
