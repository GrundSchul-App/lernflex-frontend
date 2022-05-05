import React from 'react'
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";
// import {Context} from "../../context/context"

function AttendanceBodyTable({student,index,list}) {
  // const {BACKEND_URL,setRefDataBase,refDataBase}=useContext(Context)
  
  const date = list.date
  ? new Date(list.date).toLocaleDateString()
  : "";








  
    

  return (
    <tr key={index} className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-center px-1 py-4 whitespace-nowrap text-sm font-light text-gray-900  ">
                            {date}
                          </td>
                          <td className="text-center px-1 py-4 whitespace-nowrap text-sm font-light text-gray-900  ">
                            {student.firstName}
                          </td>
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 whitespace-nowrap  ">
                            {student.lastName}
                          </td>
                          <td className="text-sm text-center text-g<BodyTableAttendance
                          key={index}
                          list={list}
                          index={index}
                        />ray-900 font-light px-1 py-4 whitespace-nowrap  ">
                            {list.classId.className}
                          </td>
                          <td className="text-sm text-center text-g<BodyTableAttendance
                          key={index}
                          list={list}
                          index={index}
                        />ray-900 font-light px-1 py-4 whitespace-nowrap  ">
                            {list.subject.subject_code}
                          </td>
                          
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 ">
                            {student.gender}
                          </td>
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 ">
                            {student.email}
                          </td>
                          
                          


                          <td>
                          <input type="checkbox" className="m-2" />
                          </td>
                          
                        </tr>
  )
}

export default AttendanceBodyTable