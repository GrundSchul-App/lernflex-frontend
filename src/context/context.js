import { createContext, useEffect,useState } from "react";
export const Context = createContext();


const ContextProvider = (props) => {
const [teacher,setTeacher]=useState([]);



  const backendUrl = process.env.REACT_APP_BACKEND_URL 

  // useEffect(()=>{
  //   fetch(`${backendUrl}/teacher`)
  //   .then(res=>res.json())
  //   .then(json=>console.log(setTeacher(json)))
  // },[])


function loadTeachers(){
  fetch(`${backendUrl}/teacher`)
  .then(res=>res.json())
  .then(json=>console.log(setTeacher(json)))
}



  return <Context.Provider value={{teacher,setTeacher,loadTeachers}}>{props.children}</Context.Provider>;
};
export default ContextProvider;
