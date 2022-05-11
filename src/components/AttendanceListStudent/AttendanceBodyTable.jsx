import React, { useContext } from "react";
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";
// import {Context} from "../../context/context"
import { Context } from "../../context/context";


function AttendanceBodyTable({ index, item, student, list, check }) {
  const { setSelectAbsentId,selectAbsentAndAttendance,homeworks,studentChecked,setStudentChecked} = useContext(Context);

  const date = list[0].date ? new Date(list[0].date).toLocaleDateString() : "";
  // const selectAbsentAndAttendance=()=>{
  //   setSelectAttendId(list._id)
  //   setSelectAbsentId(item._id)
    
  // }
  // const checked = (id1,id2) => {
  //   setStudentChecked(!studentChecked);
  //   console.log("checked", studentChecked);
  //   selectAbsentAndAttendance(id1,id2)

  // };
  // const checked = () => {
  //   setStudentChecked(!studentChecked);
  //   console.log("checked", studentChecked);
  // }
   

  return (
    <tr key={index} className="bg-gray-100 border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>
      <td className="text-center px-1 py-4 whitespace-nowrap text-sm font-light text-gray-900  ">
        {date}
      </td>
      <td className="text-center px-1 py-4 whitespace-nowrap text-sm font-light text-gray-900  ">
        {item.firstName}
      </td>
      <td className="text-sm text-center text-gray-900 font-light px-1 py-4 whitespace-nowrap  ">
        {item.lastName}
      </td>
      <td
        className="text-sm text-center text-g<BodyTableAttendance
                          key={index}
                          list={list}
                          index={index}
                        />ray-900 font-light px-1 py-4 whitespace-nowrap  "
      >
        {list[0].classId.className}
      </td>
      <td
        className="text-sm text-center text-g<BodyTableAttendance
                          key={index}
                          list={list}
                          index={index}
                        />ray-900 font-light px-1 py-4 whitespace-nowrap  "
      >
        {list[0].subject.subject_code}
      </td>

      <td className="text-sm text-center text-gray-900 font-light px-1 py-4 ">
        {item.gender}
      </td>
      <td className="text-sm text-center text-gray-900 font-light px-1 py-4 ">
        {item.email}
      </td>

      <td>
        {}
        <input type="checkbox" className="m-2" onChange={()=>selectAbsentAndAttendance(item._id)}   />
       
      </td>
    </tr>
  );
}

export default AttendanceBodyTable;
