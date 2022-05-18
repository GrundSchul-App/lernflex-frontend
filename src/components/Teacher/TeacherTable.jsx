import React, { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import {AiOutlineMinusCircle} from "react-icons/ai"
import { Context } from "../../context/context";

function TeacherTable(props) {
  const { teachers, BACKEND_URL,editTeacherModules , editExistTeacher,setRefDataBase,refDataBase} =
    useContext(Context);

    
  async function deleteTeacher(id) {
    const option = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    if (window.confirm("Are you sure you want to delete")) {
      const result = await fetch(`${BACKEND_URL}/removeTeacher/${id}`, option);
      if (result.message === "success") {
        // toast.success(result);
        console.log("Success", result);
      }
      const body = await result.json();
    
    }
   
    setRefDataBase(!refDataBase)
  }

  return (
    <div className="rounded-2xl m-4 mt-0 py-4 bg-white max-h-[675px]  overflow-y-auto scrollbar-hide ">
      <div className="flex flex-col items-center">
        <div className="overflow-x-auto sm:-mx-4 lg:-mx-4">
          <div className="py-2 inline-block min-w-full sm:px-4 lg:px-4 ">
            <div className="overflow-hidden   ">
              <form>
                <table >
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-4 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className=" font-medium text-sm text-gray-900 px-5 py-4 "
                      >
                        Vorname
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-5 py-4 text-left"
                      >
                        NachName
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-5 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-5 py-4 text-left"
                      >
                        Klasse/Fach
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-5 py-5 text-left"
                      >
                        Add Klasse/Fach
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-5 py-4 text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((teacher, index) => {
                      

                      return (
                        <tr key={index} className="bg-gray-100 border-b">
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-md font-light text-gray-900">
                            {teacher.firstName}
                          </td>
                          <td className="text-md text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                            {teacher.lastName}
                          </td>
                          <td className="text-left text-gray-900 font-light px-4 py-4 ">
                            {teacher.email}
                          </td>

                          <td className="text-center text-gray-900 font-light p-4 ">
                            {teacher.modules.map((modules,index) => {
                              return (
                                <div
                                  className="flex justify-between "
                                  key={index}
                                >
                                  <li className="text-sm">
                                    {modules.classes.className}/{modules.subjects.subject_code}
                                  </li>
                                  
                                </div>
                              );
                            })}

                           
                          </td>
                          <td className="text-center text-gray-900 font-light px-6 py-4 mx-5 ">
                          <button onClick={()=>editTeacherModules(teacher._id)} type="button">
                                    <IoIosAddCircleOutline className="text-green-600" />
                                  </button>
                                  <button type='button'><AiOutlineMinusCircle className="ml-2 text-red-600"/></button>
                          </td>

                          <td className="text-center text-green-600">
                            <button onClick={()=>editExistTeacher(teacher)} type="button">
                              <AiFillEdit className="w-6 h-6 shadow-lg " />
                            </button>
                            <button
                              onClick={() => deleteTeacher(teacher._id)}
                              type="button"
                              className="text-red-600"
                            >
                              <AiFillDelete className="w-6 h-6 text-red ml-3 shadow-lg" />
                            </button>
                          </td>
                          
                        </tr>
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
export default TeacherTable;
