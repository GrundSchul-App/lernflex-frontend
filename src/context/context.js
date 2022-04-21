import { createContext,useState } from "react";
export const Context = createContext();


const ContextProvider = (props) => {

  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState("");
  const [className, setClassName] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [subjectName, setSubjectName] = useState("");

  const [teachers,setTeachers]=useState([])

  function getClassId() {
    setClassId(classId);
  }
  function getClassName() {
    setClassName(className);

    
  }
  function getSubjectId() {
    setSubjectId(subjectId);
  }
  function getSubjectName() {
    setSubjectName(subjectName);
  }




  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

async function getAllTeachers(){
  const res=await fetch(`${BACKEND_URL}/teacher`,{
    header:{
      Accept: 'application/json'
    }
  })
  const body= await res.json();
  return body
}

  async function getAllClasses() {
    const res = await fetch(`${BACKEND_URL}/classes`, {
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const body = await res.json();

    return body;
  }

  async function getAllSubjects() {
    const res = await fetch(`${BACKEND_URL}/subject`, {
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const body = await res.json();

    return body;
  }

  async function getStudentsByClassId(classId) {
    const res = await fetch(`${BACKEND_URL}/students/class/${classId}`, {
      headers: {
        Accept: "application/json",
      },
    });
    const body = await res.json();

    return body;
  }

  return (
    <Context.Provider
      value={{ getStudentsByClassId, getAllSubjects, getAllClasses,classes,setClasses,teachers,setTeachers,getAllTeachers,classId,setClassId,getClassId,getClassName,setSubjects,subjects,getSubjectId,getSubjectName,subjectName,className}}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
