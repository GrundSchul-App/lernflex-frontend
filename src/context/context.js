import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import dayjs from "dayjs";
import "dayjs/locale/de";
import axios from "axios";

export const Context = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  filteredEvents: [],
});

// function initEvents() {

//   const storageEvents = localStorage.getItem("savedEvents");
//   const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
//   return parsedEvents;
// }

const ContextProvider = (props) => {
  // Ghania und Blanca Context

  const [classes, setClasses] = useState([]);
  const [allClasses, setAllClasses] = useState([]);
  const [classId, setClassId] = useState("");
  const [className, setClassName] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [subjectName, setSubjectName] = useState("");

  const [studentsList, setStudentsList] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  const [studentId, setStudentId] = useState([]);

  const [teachers, setTeachers] = useState([]);

  const [teacherId, setTeacherId] = useState("");
  const [refDataBase, setRefDataBase] = useState(false);
  const [justTeacherId, setJustTeacherId] = useState("");

  const [messageBackend, setMessageBackend] = useState("");
  const [messageBackendModal, setMessageBackendModal] = useState("");
  const [databaseUpdated, setDatabaseUpdated] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [classTeacher, setClassTeacher] = useState("");
  /*  const [moduleSubjectTeacher, setModuleSubjectTeacher] = useState([
    { subject: "", teacher: "" },
  ]); */
  const [moduleSubjectTeacher, setModuleSubjectTeacher] = useState([{}]);
  const [option, setOption] = useState("");

  // Toggle modal teacher
  const [toggleModale, setToggleModale] = useState(false);
  const [editToggleModale, setEditToggleModale] = useState(false);
  const [toggleAddSubClassModale, setToggleAddSubClassModale] = useState(false);

  const closeModale = () => {
    setToggleModale(false);
  };
  const openModale = () => {
    // console.log("hello modal")
    setToggleModale(true);
  };
  // Toggle modal edit teacher modal

  const closeEditModale = () => {
    setEditToggleModale(false);
  };
  const openEditModale = () => {
    setEditToggleModale(true);
  };
  const openModaleAdd = () => {
    setToggleAddSubClassModale(true);
  };
  const closeModaleAdd = () => {
    setToggleAddSubClassModale(false);
  };
  // Zaki Context + Hooks Events
  // const initEvents = {
  //   loading: true,
  //   events: [],
  //   error: ''
  // }

  function savedEventsReducer(state, { type, payload }) {
    switch (type) {
      case "FETCH_SUCCESS":
        return payload;
      case "FETCH_ERROR":
        return {
          events: {},
          error: "fetch not successfull",
        };
      case "push":
        return [...state, payload];
      case "update":
        console.log("my state ", state, "my payload", payload);
        return [...state.map((evt) => (evt.id === payload.id ? payload : evt))];
      case "delete":
        console.log(state, type, payload);
        return state.filter((evt) => evt.id !== payload.id);
      default:
        throw new Error();
    }
  }

  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, []);

  // zaki hooks end

  // FUNCTIONS BACKEND

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${BACKEND_URL}/calendar`)
        .then((response) => {
          dispatchCalEvent({
            type: "FETCH_SUCCESS",
            payload: response.data.data,
          });
        })
        .catch((error) => {
          dispatchCalEvent({ type: "FETCH_ERROR" });
        });
    };
    fetchData();
  }, [savedEvents]);

  async function eventToDB(data) {
    const res = await fetch(`${BACKEND_URL}/calendar`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    return body;
  }

  async function updateEvent(data) {
    const res = await fetch(`${BACKEND_URL}/calendar/${data.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    return body;
  }

  async function deleteEvent(data) {
    const res = await fetch(`${BACKEND_URL}/calendar/${data.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    return body;
  }

  async function getAllTeachers() {
    const res = await fetch(`${BACKEND_URL}/teacher`, {
      header: {
        Accept: "application/json",
      },
    });
    const body = await res.json();
    return body;
  }

  const getClassIdAndName = (e) => {
    setClassId(e.target.value);
    console.log(e.target.value);
    setClassName(e.target.options[e.target.selectedIndex].text);
    console.log(e.target.options[e.target.selectedIndex].text);
  };

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

  async function getAllStudents() {
    const res = await fetch(`${BACKEND_URL}/students`, {
      header: {
        Accept: "application/json",
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

  async function getStudentsByClassId() {
    const res = await fetch(`${BACKEND_URL}/students/class/${classId}`, {
      headers: {
        Accept: "application/json",
      },
    });
    const body = await res.json();

    return body;
  }

  async function getTeacherByClassIdAndSubjectId() {
    const res = await fetch(`${BACKEND_URL}/teacher/${classId}/${subjectId}`, {
      headers: {
        Accept: "application/json",
      },
    });
    const body = await res.json();

    return body;
  }

 /*  async function getTeacherAndSubjectsByClassId(classId) {
    const res = await fetch(`${BACKEND_URL}/teacher/${classId}`, {
      headers: {
        Accept: "application/json",
      },
    });
    const body = await res.json();

    return body;
  }
 */
  async function getClassesByModule(subjectId, teacherId) {
    const res = await fetch(
      `${BACKEND_URL}/classes/module/${subjectId}/${teacherId}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const body = await res.json();

    return body;
  }

  async function getClassesByClassTeacherId() {
    const res = await fetch(`${BACKEND_URL}/classes/teacher/${classTeacher}`, {
      headers: {
        Accept: "application/json",
      },
    });
    const body = await res.json();

    return body;
  }

  async function addAttendanceList(data) {
    const res = await fetch(`${BACKEND_URL}/attendanceList/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    return body;
  }

  async function deleteSubjectById(subjectId) {
    const res = await fetch(`${BACKEND_URL}/removeSubject/${subjectId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    return body;
  }

  async function addSubjectToDatabase(data) {
    const res = await fetch(`${BACKEND_URL}/addSubject`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    return body;
  }

  async function addClassToDatabase(data) {
    const res = await fetch(`${BACKEND_URL}/classes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    return body;
  }

  async function updateSubjectToDatabase(data) {
    const res = await fetch(`${BACKEND_URL}/updateSubject/${data._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    return body;
  }

  async function updateClassToDatabase(data) {
    const res = await fetch(`${BACKEND_URL}/classes/${data._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await res.json();
    return body;
  }

  async function deleteClassById(classId) {
    const res = await fetch(`${BACKEND_URL}/classes/${classId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    return body;
  }

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  // neu Fach und klasse zu teacher hinzufügen
  function editTeacherModules(id) {
    console.log("Id:", id);
    setJustTeacherId(id);
    openModaleAdd();
  }
  // edit Teacher modale open
  function editExistTeacher(teacher, id) {
    console.log("id Teacher edit:", teacher);
    setTeacherId(teacher);
    openEditModale();
  }
  // edit student modale open
  function editStudent(student, id) {
    console.log("id Student edit", student);
    setStudentId(student);
    openModale();
  }

  // function updateLabel(label) {
  //   setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  // }

  // useEffect(() => {
  //   localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  // }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  return (
    <Context.Provider
      value={{
        getClassIdAndName,
        getStudentsByClassId,
        getAllSubjects,
        getAllClasses,
        getAllTeachers,
        addAttendanceList,
        getTeacherByClassIdAndSubjectId,
        deleteSubjectById,
        addSubjectToDatabase,
        addClassToDatabase,
        updateClassToDatabase,
        updateSubjectToDatabase,
        deleteClassById,
        closeModale,
        openModale,
        closeEditModale,
        openEditModale,
        editTeacherModules,
        getClassesByClassTeacherId,
        getClassesByModule,
       /*  getTeacherAndSubjectsByClassId, */

        //URL
        BACKEND_URL,
        //useState
        classes,
        setClasses,
        teachers,
        setTeachers,

        classId,
        setClassId,
        setSubjects,
        subjects,
        subjectName,
        setSubjectName,
        className,
        setClassName,
        subjectId,
        setSubjectId,
        studentsList,
        setStudentsList,
        messageBackend,
        setMessageBackend,
        getAllStudents,
        students,
        setStudents,
        selectValue,
        setSelectValue,
        editStudent,
        studentId,
        setStudentId,

        databaseUpdated,
        setDatabaseUpdated,
        searchInput,
        setSearchInput,

        toggleModale,
        setToggleModale,
        editToggleModale,
        setEditToggleModale,
        toggleAddSubClassModale,
        setToggleAddSubClassModale,
        openModaleAdd,
        closeModaleAdd,
        teacherId,
        editExistTeacher,
        refDataBase,
        setRefDataBase,
        setJustTeacherId,
        justTeacherId,

        // classen
        classTeacher,
        setClassTeacher,
        moduleSubjectTeacher,
        setModuleSubjectTeacher,
        messageBackendModal,
        setMessageBackendModal,
        option,
        setOption,
        allClasses,
        setAllClasses,

        // Events
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        labels,
        // updateLabel,
        filteredEvents,
        updateEvent,
        deleteEvent,
        eventToDB,
        // getAllEvents
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
