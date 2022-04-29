import React, { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Context } from "../../context/context";

function TeacherTable(props) {
  const { teachers, openEditModale, BACKEND_URL, openModaleAdd,classId,subjectId,editTeacherModules , editExistTeacher,setTeachers,setRefDataBase,refDataBase} =
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
      console.log(body);
      // setTeachers(body)
    }
    // window.location.reload();
    setRefDataBase(!refDataBase)
  }

  return (
    <div className="rounded-2xl m-4 mt-0 py-4 bg-white ">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
              <form>
                <table className="min-w-full ">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className=" font-medium text-gray-900 px-6 py-4 "
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
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Klasse/Fach
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Add Klasse/Fach
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((teacher, index) => {
                      

                      return (
                        <tr key={index} className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                            {teacher.firstName}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {teacher.lastName}
                          </td>
                          <td className="text-left text-gray-900 font-light px-6 py-4 ">
                            {teacher.email}
                          </td>

                          <td className="text-center text-gray-900 font-light px-6 py-4 ">
                            {teacher.modules.map((modules,index) => {
                              return (
                                <div
                                  className="flex justify-between"
                                  key={index}
                                >
                                  <li>
                                    {modules.classes.className}/
                                    {modules.subjects.subject_code}
                                  </li>
                                  
                                </div>
                              );
                            })}

                           
                          </td>
                          <td className="text-center text-gray-900 font-light px-6 py-4 ">
                          <button onClick={()=>editTeacherModules(teacher._id)} type="button">
                                    <IoIosAddCircleOutline />
                                  </button>
                          </td>

                          <td className="text-center text-green-600">
                            <button onClick={()=>editExistTeacher(teacher)} type="button">
                              <AiFillEdit className="w-7 h-7 " />
                            </button>
                            <button
                              onClick={() => deleteTeacher(teacher._id)}
                              type="button"
                              className="text-red-600"
                            >
                              <AiFillDelete className="w-7 h-7 text-red ml-3 " />
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
