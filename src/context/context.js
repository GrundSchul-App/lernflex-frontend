import { createContext, useEffect,useState } from "react";
export const Context = createContext();


const ContextProvider = (props) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
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
      value={{ getStudentsByClassId, getAllSubjects, getAllClasses }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
