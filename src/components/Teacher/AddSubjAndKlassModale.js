import React, { useContext, useState } from "react";
import SelectClasses from "../Attendance/SelectClasses";
import SelectSubjects from "../Attendance/SelectSubjects";
import { GrFormClose } from "react-icons/gr";
import { Context } from "../../context/context";
import { IoIosPeople } from "react-icons/io";
import { ImBooks } from "react-icons/im";

function AddSubjAndKlassModale(props) {
  const [addModule, setAddModule] = useState([]);
  const {
    closeModaleAdd,
    classId,
    setClassId,
    setClassName,
    subjectId,
    setSubjectId,
    setSubjectName,
    BACKEND_URL,
    classes,
    subjects,
    editTeacherModules,
    teacherId,
    setTeachers,
    teachers,
    justTeacherId,
  } = useContext(Context);

  const getClassIdWithName = (e) => {
    setClassId(e.target.value);
    //  console.log(e.target.value);
    setClassName(e.target.options[e.target.selectedIndex].text);
    //  console.log(e.target.options[e.target.selectedIndex].text);
  };

  const getSubjectIdWithName = (e) => {
    //  console.log(e.target.value);
    // console.log(e.target.options[e.target.selectedIndex].text);
    setSubjectId(e.target.value);
    setSubjectName(e.target.options[e.target.selectedIndex].text);
  };

  async function addTeacherModules(){
      editTeacherModules(justTeacherId)
    console.log('Id:',justTeacherId );
    // findet der Teacher mit gleichen Id 

    const teacherData=teachers.find((teacher)=>{
       return teacher._id === justTeacherId;
    })
    console.log("teacherdata", teacherData)
  //openModaleAdd()
  const response = await fetch(`${BACKEND_URL}/update/${justTeacherId} `, {
    method: "PUT",
    headers: {
      Accept: "application/json",
       
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     modules: [...teacherData.modules,{ classes: `${classId}`,subjects:`${subjectId}` }],
    }),
  });
  const content = await response.json();
  console.log('content:', content);
  setTeachers(content.data)



 }
  




  return (
    <div className="absolute inset-0 bg-black bg-opacity-75   flex justify-center items-center ">
      <div className="w-[600px] h-[500px] bg-white  flex justify-center items-center relative rounded-xl">
        <button
          onClick={closeModaleAdd}
          className="absolute top-[10px] right-[10px]"
        >
          <GrFormClose />
        </button>

        <div className="flex flex-col justify-center mt-3 border-solid border-2 w-[90%] h-[75%]">
          <form>
            <h1 className="text-3xl m-4"> Klasse & Fach hinzufügen </h1>
            <div className="m-4 flex">
              <div className="flex grow  p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
                <IoIosPeople className="w-8 h-8 mr-2" />
                <h3 className="mr-2">Klassen</h3>

                <select
                  className="form-select 
      block
      
      px-3
      py-1.5
      mr-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
       border border-solid border-gray-300 
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-green-600
       focus:outline-none"
                  /*  aria-label="Default select example" */
                  name=""
                  id=""
                  /*  value="state.classId" */
                  onChange={getClassIdWithName}
                  defaultValue={"default"}
                >
                  {/* <option selected>Klassen...</option> */}
                  <option value={"default"} disabled>
                    ...
                  </option>
                  {classes.map((classes, index) => {
                    return (
                      <option className="p-2" key={index} value={classes._id}>
                        {classes.className}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* <SelectClasses /> */}

              <div className="flex grow p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
                <ImBooks className="w-7 h-7 mr-2" />
                <h3 className="mr-2">Fächer</h3>

                <select
                  className="form-select 
      block
      
      px-3
      py-1.5
      mr-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
       border border-solid border-gray-300 
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-green-600
       focus:outline-none"
                  name=""
                  id=""
                  onChange={getSubjectIdWithName}
                  defaultValue={"default"}
                >
                  <option value={"default"} disabled>
                    ...
                  </option>
                  {subjects.map((subject, index) => {
                    return (
                      <option className="p-2" key={index} value={subject._id}>
                        {subject.subject_title}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* <SelectSubjects /> */}
            </div>

            <div  className="flex justify-center">
              <button onClick={addTeacherModules} type="button" className="bg-cyan-500 hover:bg-cyan-600  font-bold text-white px-2 py-1 rounded-xl mt-5 ">
                Speichern 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddSubjAndKlassModale;
