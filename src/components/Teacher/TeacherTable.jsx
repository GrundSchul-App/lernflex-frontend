import React, {useContext,useState} from "react";
import { AiFillDelete ,AiFillEdit} from "react-icons/ai";
import {Context} from '../../context/context'
import EditTeacherModal from "./EditTeacherModal";


function TeacherTable(props) {
  const [editToggleModale, setEditToggleModale] = useState(false);
 const {teachers,openEditModale}=useContext(Context)


//    const closeEditModale=()=>{
//      setEditToggleModale(false);
//   }
//    const openEditModale=()=>{
//      setEditToggleModale(true);
//   }

  return (
    <div className="rounded-2xl m-4 mt-0 p-4 bg-white ">
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
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                      {teachers.map((teacher,index)=>{
                        //  {console.log('FirstName', teacher.classes[0].className);}
                        
                          return(
                            <tr key={index} className="bg-gray-100 border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">{teacher.firstName} </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{teacher.lastName} </td>
                            <td className="text-left text-gray-900 font-light px-6 py-4 ">{teacher.email}</td>
                            <td className="text-center text-gray-900 font-light px-6 py-4 ">not found</td>
                            {/* {teacher.classes[0].className} */}
                            <td className="text-center text-green-600">
                              <button onClick={openEditModale} type="button" >
                                <AiFillEdit className="w-7 h-7 "/>
                              </button>
                              <button  type="button" className="text-red-600">
                                <AiFillDelete className="w-7 h-7 text-red ml-3 "/>
                              </button>
                            </td>
                          </tr>
                          

                          )
                         ; 
                      })}
                    {/* <tr className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900">Maria </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Schmidt </td>
                      <td className="text-left text-gray-900 font-light px-6 py-4 ">test@hotmail.com</td>
                      <td className="text-center text-gray-900 font-light px-6 py-4 ">1c </td>

                      <td className="text-center text-green-600">
                        <button  type="button" >
                          <AiFillEdit className="w-7 h-7 "/>
                        </button>
                        <button  type="button" className="text-red-600">
                          <AiFillDelete className="w-7 h-7 text-red ml-3 "/>
                        </button>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </form>
      {/* {editToggleModale ? <EditTeacherModal closeFunction={props.closeEditModale}/>:''} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeacherTable;
