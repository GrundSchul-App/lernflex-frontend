import React from 'react'
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";
// import {Context} from "../../context/context"

function AttendanceBodyTable({index,item,student,list}) {
  // const {BACKEND_URL,setRefDataBase,refDataBase}=useContext(Context)
  
  // const date = list[0].date
  // ? new Date(student.date).toLocaleDateString()
  // : "";



  return (
    <tr key={index} className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-center px-1 py-4 whitespace-nowrap text-sm font-light text-gray-900  ">
                            {list[0].date}
                          </td>
                          <td className="text-center px-1 py-4 whitespace-nowrap text-sm font-light text-gray-900  ">
                            {item.firstName}
                          </td>
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 whitespace-nowrap  ">
                            {item.lastName}
                          </td>
                          <td className="text-sm text-center text-g<BodyTableAttendance
                          key={index}
                          list={list}
                          index={index}
                        />ray-900 font-light px-1 py-4 whitespace-nowrap  ">
                            {list[0].classId.className}
                          </td>
                          <td className="text-sm text-center text-g<BodyTableAttendance
                          key={index}
                          list={list}
                          index={index}
                        />ray-900 font-light px-1 py-4 whitespace-nowrap  ">
                            {list[0].subject.subject_code}
                          </td>
                          
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 ">
                            {item.gender}
                          </td>
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 ">
                            {item.email}
                          </td>
                          
                          


                          <td>
                          <input type="checkbox" className="m-2" />
                          </td>
                          
                        </tr>
  )
}

export default AttendanceBodyTable