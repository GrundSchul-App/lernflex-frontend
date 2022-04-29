import React,{useContext} from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {Context} from '../../context/context'

function BodyTable({student,index}) {
  const {editStudent}=useContext(Context)
    
    const date = student.birthDate
    ? new Date(student.birthDate).toLocaleDateString()
    : "";

    



    return (
        <tr key={index} className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-center px-1 py-4 whitespace-nowrap text-sm font-light text-gray-900  ">
                            {student.firstName}
                          </td>
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 whitespace-nowrap  ">
                            {student.lastName}
                          </td>
                          <td className=" text-gray-900 font-light px-1 py-4 text-center text-sm ">
                            {date}
                          </td>
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 ">
                            {student.gender}
                          </td>
                          <td className="text-sm text-center text-gray-900 font-light px-1 py-4 ">
                            {student.email}
                          </td>
                          

                          <td className="text-center text-green-600">
                            <button onClick={()=>editStudent(student)} type="button">
                              <AiFillEdit className="w-6 h-6 " />
                            </button>
                            <button
                              
                              type="button"
                              className="text-red-600"
                            >
                              <AiFillDelete className="w-6 h-6 text-red ml-3 " />
                            </button>
                          </td>
                          
                        </tr>
    )
}
export default BodyTable