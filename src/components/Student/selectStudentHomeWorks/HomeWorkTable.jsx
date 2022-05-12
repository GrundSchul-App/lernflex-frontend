import React, { useContext } from "react";

import { Context } from "../../../context/context";
import { IoIosAddCircleOutline } from "react-icons/io";




function HomeWorkTable(props) {
  const { homeworks,editHomeWorkStudent,setHomeworks,homeWorkId,BACKEND_URL,selectAbsentId,studentChecked } = useContext(Context);


async function HomeWorkSendButton(){
  console.log("selectId", selectAbsentId);
   editHomeWorkStudent(homeWorkId)
   console.log("HomeWorkStudentId", homeWorkId);


    const homeWorkData=homeworks.find((homeWork)=>{
      console.log("homeWork", homeWork);
        //  if (homeWork.students.find((item)=>item===selectAbsentId)){
        //    console.log("Student existiert schon");
        //  }
          return homeWork._id === homeWorkId
        

     


    })
    if (homeWorkData.students.find((item)=>item === selectAbsentId)){
      console.log("dieser Student existiert ");
    }
    
    console.log("HOMEWORK DATA", homeWorkData);
    const data = {students:selectAbsentId}
    console.log("data",data);
    console.log("studentchecked", studentChecked);
    

    
  await fetch (`${BACKEND_URL}/homeworks/updateStudentHomework/${homeWorkId}`,{
    
   method: 'PUT',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json'},
   body:JSON.stringify(data),
  })
  
  .then((res) => {
    if (res.message === "success") {
    setHomeworks(res.data);
    console.log("homeworks result", res.data);
    }
    })
    .catch((err) => {
    console.log(err);
    }); 
  
  


  }

  return (
    <div className="rounded-2xl m-4 p-4 bg-white w-full mr-4">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-wh"  >
                  <tr>
                   <th   className="font-medium  text-gray-900 px-4 py-4 text-left">#</th>
                      
                      
                   
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-4 py-4 text-left"
                    >
                      Lehrer/in
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-4 py-4 text-left"
                    >
                      Fach
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-4 py-4 text-left"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-4 py-4 text-left"
                    >
                      Datei
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-4 py-4 text-left"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="font-medium  text-gray-900 px-4 py-4 text-left"
                    >
                      Schüler/innen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {homeworks.length !== 0 &&
                    homeworks.map((homeworkData, index) => {
                      return (
                        <tr
                          key={index}
                          className={
                            (index + 1) % 2 === 0
                              ? "border-b"
                              : "bg-gray-100 border-b"
                          }
                        >
                          <td className="px-4 py-4 whitespace-nowrap font-light text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-gray-900  px-4 py-4 whitespace-nowrap font-light">
                            {homeworkData.teacher.lastName}
                          </td>
                          <td className="text-gray-900  px-4 py-4 whitespace-nowrap font-light">
                            {homeworkData.subject.subject_code}
                          </td>
                          <td className="text-gray-900  px-4 py-4 whitespace-nowrap font-light">
                            {homeworkData.title}
                          </td>

                          <td className="text-gray-900  px-4 py-4 whitespace-nowrap font-light">
                            {homeworkData.fileName}
                          </td>
                          <td className="text-gray-900  px-4 py-4 whitespace-nowrap font-light">
                            {homeworkData.type}
                          </td>
                          <td className="text-gray-900  px-4 py-4 whitespace-nowrap font-light">
                            {homeworkData.absent}
                          </td>
                          <td className="text-gray-900  px-4 py-4 whitespace-nowrap font-light">
                          <button onClick={()=> editHomeWorkStudent(homeworkData._id) } type="button">
                                    <IoIosAddCircleOutline className="text-green-600" />
                                  </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={HomeWorkSendButton}>HausAufgaben senden</button>
    </div>
  );
}
export default HomeWorkTable;
