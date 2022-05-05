import React,{useContext} from 'react';
import {Context} from '../../context/context'
import AttendanceBodyTable from './AttendanceBodyTable';

function AttendanceListTable() {
  const {getAnwiesenheitsListe}=useContext(Context)
  return (
    <div className="rounded-2xl m-4 mt-0 py-4 bg-white ">
        
    <div className="flex flex-col ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
          <div className="overflow-hidden ">
            <div className="flex justify-end ">
             
            </div>
            <form  >
              <table >
                <thead className="bg-white border-b text-left   ">
                  <tr >
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
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Fach
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
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
                    <input type="checkbox" className="m-2" />
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    getAnwiesenheitsListe.map((list, index) => {
                       console.log("list", list);
                      
                      return (
                        
                        list.absent.map((student,index)=>{
                          // console.log("student", student.lastName);
                          // console.log("studentfirstname", student.firstName);
                          return (
                            <AttendanceBodyTable
                          key={index}
                          student={student}
                          index={index}
                          list={list}
                          anwiesList={getAnwiesenheitsListe}
                          
                        />
                          )
                        })
                        
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
  )
}

export default AttendanceListTable