
import React, { createContext, useState, useEffect, useReducer, useMemo } from "react";
// import dayjs from "dayjs";

// export const Context = createContext({
//   monthIndex: 0,
//   setMonthIndex: (index) => {},
//   daySelected: null,
//   setDaySelected: (day) => {},
//   showEventModal: false,
//   setShowEventModal: () => {},
//   dispatchCalEvent: ({ type, payload }) => {},
//   savedEvents: [],
//   selectedEvent: null,
//   setSelectedEvent: () => {},
//   filteredEvents: [],
// });

// function savedEventsReducer(state, { type, payload }) {
//   switch (type) {
//     case "push":
//       return [...state, payload];
//     case "update":
//       return state.map((evt) => (evt.id === payload.id ? payload : evt));
//     case "delete":
//       return state.filter((evt) => evt.id !== payload.id);
//     default:
//       throw new Error();
//   }
// }


// function initEvents() {
//   const storageEvents = localStorage.getItem("savedEvents");
//   const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
//   return parsedEvents;
// }

// const ContextProvider = (props) => {
//   const [monthIndex, setMonthIndex] = useState(dayjs().month());
//   const [daySelected, setDaySelected] = useState(dayjs());
//   const [showEventModal, setShowEventModal] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [labels, setLabels] = useState([]);
//   const [savedEvents, dispatchCalEvent] = useReducer(
//     savedEventsReducer,
//     [],
//     initEvents
//   );

//   const filteredEvents = useMemo(() => {
//     return savedEvents.filter((evt) =>
//       labels
//         .filter((lbl) => lbl.checked)
//         .map((lbl) => lbl.label)
//         .includes(evt.label)
//     );
//   }, [savedEvents, labels]);

//   useEffect(() => {
//     localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
//   }, [savedEvents]);

//   useEffect(() => {
//     setLabels((prevLabels) => {
//       return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
//         const currentLabel = prevLabels.find((lbl) => lbl.label === label);
//         return {
//           label,
//           checked: currentLabel ? currentLabel.checked : true,
//         };
//       });
//     });
//   }, [savedEvents]);

//   useEffect(() => {
//     if (!showEventModal) {
//       setSelectedEvent(null);
//     }
//   }, [showEventModal]);

//   function updateLabel(label) {
//     setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
//   }


//   return (
//     <Context.Provider
//       value={{
//         monthIndex,
//         setMonthIndex,
//         daySelected,
//         setDaySelected,
//         showEventModal,
//         setShowEventModal,
//         dispatchCalEvent,
//         selectedEvent,
//         setSelectedEvent,
//         savedEvents,
//         labels,
//         updateLabel,
//         filteredEvents,
    
//       }}
// =======

export const Context = createContext()

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
