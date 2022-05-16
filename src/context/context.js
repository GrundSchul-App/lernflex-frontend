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
  const [auth, setAuth] = useState({});
  // Ghania und Blanca Context

  const [remoteWeeks, setRemoteWeeks] = useState([]);
  const [allRemotes, setAllRemotes] = useState([]);
  const [infoDatas, setInfoDatas] = useState([]);
  const [infoDataId, setInfoDataId] = useState("");
  //const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [startDate, setStartDate] = useState("");
  const [homeworkId, setHomeworkId] = useState("");
  const [homeworkText, setHomeworkText] = useState("");
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [showDay, setShowDay] = useState(false);

  const [allAttendanceList, setAllAttendanceList] = useState([]);
  const [active, setActive] = useState(false);
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
  
  //setStudentChecked(!studentChecked
  const [studentChecked, setStudentChecked] = useState(false)

  const [teachers, setTeachers] = useState([]);

  const [teacherId, setTeacherId] = useState("");
  const [refDataBase, setRefDataBase] = useState(false);
  const [justTeacherId, setJustTeacherId] = useState("");

  const [messageBackend, setMessageBackend] = useState("");
  const [messageBackendModal, setMessageBackendModal] = useState("");
  const [databaseUpdated, setDatabaseUpdated] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [classTeacher, setClassTeacher] = useState("");

  // Student Anwiesenheitsliste

  const [getAnwiesenheitsListe, setgetAnwiesenheitsListe]=useState([])
  const [list, setList]=useState([])
  const [selectAttendId,setSelectAttendId]=useState('');
  const [selectAbsentId,setSelectAbsentId]=useState([]);

  /*  const [moduleSubjectTeacher, setModuleSubjectTeacher] = useState([
    { subject: "", teacher: "" },
  ]); */
  const [moduleSubjectTeacher, setModuleSubjectTeacher] = useState([{}]);
  const [option, setOption] = useState("");
  //date from Calender selectedEvent
  const [selectDate, setSelectDate] = useState("");

  const [homeworks, setHomeworks] = useState([]);
  const [allHomeworks, setAllHomeworks] = useState([]);
  const [homeworkDescription, setHomeworkDescription] = useState("");
  const [homeworkType, setHomeworkType] = useState("");
  /*  const [fileHomework, setFileHomework] = useState(""); */
  const [urlHomework, setUrlHomework] = useState("");
  const [fileNameHomework, setFileNameHomework] = useState("");
  const [homeworkUploaded, setHomeworkUploaded] = useState(false);
  const [homeWorkId,setHomeWorkId]=useState("");

  // Toggle modal teacher
  const [toggleModale, setToggleModale] = useState(false);
  const [editToggleModale, setEditToggleModale] = useState(false);
  const [toggleAddSubClassModale, setToggleAddSubClassModale] = useState(false);
  const [toggleHomeworModal,setToggleHomeworModale]=useState(false);
  const [eventList,setEventList]=useState([]);

  const closeModale = () => {
    setToggleModale(false);
  };
  const openModale = () => {
    //  console.log("hello modal")
    setToggleModale(true);
  };
  const closeHomeworkModale=()=>{
    setToggleHomeworModale(false)
  }
  const openHomeworkModale=()=>{
    setToggleHomeworModale(true)
  }
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
  const activeFilterArow = () => {
    setActive(active);
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
        return state.map((evt) => (evt.id === payload.id ? payload : evt));
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
  }, [selectedEvent]);

  async function eventToDB(data) {
    console.log(data);
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
  async function getAllEventByDate(date){
    const res= await fetch(`${BACKEND_URL}/calendar/date/${date}`,{
      header:{
        Accept: "application/json",
      },
    });
    
    const body=await res.json();
    console.log("body", body);
    
    return body
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
    setClassName(e.target.options[e.target.selectedIndex].text);
  };

  const getDatum = (date) => {
    let dateArray = date.split("T");
    return dateArray[0].split("-").reverse().join("-");
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
    // console.log("Bodyyy", body);
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

  /*   async function getAllHomeworks() {
    const res = await fetch(
      `${BACKEND_URL}/homeworks/626c00950c33c059f57b51c1`,
      {
        headers: {
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );
    const body = await res.json();

    return body;
  } */

  async function getAllHomeworks() {
    const res = await fetch(`${BACKEND_URL}/homeworks`, {
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const body = await res.json();

    return body;
  }

  async function getAllRemoteWeeks() {
    const res = await fetch(`${BACKEND_URL}/remoteWeek`, {
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const body = await res.json();

    return body;
  }

  async function addRemoteWeekToDatabase(data) {
    const res = await fetch(`${BACKEND_URL}/remoteWeek/${data.startWeekDate}`, {
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

  async function deleteRemoteById(remoteId) {
    const res = await fetch(`${BACKEND_URL}/remoteWeek/${remoteId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    return body;
  }

  async function getHomeworksByTeacherId(teacherId) {
    const res = await fetch(`${BACKEND_URL}/homeworks/teacher/${teacherId}`, {
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const body = await res.json();

    return body;
  }

  /*  async function  getHomeworksBySubjectId(subjectId) {
    const res = await fetch(
      `${BACKEND_URL}/homeworks/626c00950c33c059f57b51c1/subject/${subjectId}`,     
      {
        headers: {
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );
    const body = await res.json();

    return body;
  } */

  async function getHomeworksBySubjectId(subjectId) {
    const res = await fetch(`${BACKEND_URL}/homeworks/subject/${subjectId}`, {
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const body = await res.json();

    return body;
  }

  /*   async function  getHomeworksByType(type) {
    const res = await fetch(
      `${BACKEND_URL}/homeworks/626c00950c33c059f57b51c1/type/${type}`,     
      {
        headers: {
          Accept: "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );
    const body = await res.json();

    return body;
  } */

  async function getHomeworksByType(type) {
    const res = await fetch(`${BACKEND_URL}/homeworks/type/${type}`, {
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const body = await res.json();

    return body;
  }

  /*   async function addHomeworkToDatabase(data) {
    const res = await fetch(
      `${BACKEND_URL}/homeworks/626c00950c33c059f57b51c1/add`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const body = await res.json();
    return body;
  } */
  async function addHomeworkToDatabase(data) {
    const res = await fetch(`${BACKEND_URL}/homeworks`, {
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

  async function updateHomeworkToDatabase(data) {
    const res = await fetch(`${BACKEND_URL}/homeworks/${data._id}`, {
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

  async function deleteHomeworkById(homeworkId) {
    const res = await fetch(`${BACKEND_URL}/homeworks/${homeworkId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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

  async function getAttendanceByClassIdAndSubject(date, subjectId, classId) {
    //  console.log("date async",date)
    const res = await fetch(
      `${BACKEND_URL}/attendanceList/
    ${date}/${subjectId}/${classId}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("select****", date);
    const body = await res.json();

    return body;
  }

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

  async function attendanceList() {
    const res = await fetch(`${BACKEND_URL}/attendanceList`, {
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

  async function deleteAttendanceById(id) {
    const res = await fetch(`${BACKEND_URL}/attendanceList/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
    console.log("saveevent", savedEvents);
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

  function editHomeWorkStudent(id){
    setHomeWorkId(id)
   

  }

  //select id list and id absent 
  function selectAbsentAndAttendance(id){
    
    console.log("select id",id)
    // setSelectAttendId(id1)
    if (!(selectAbsentId.find((item)=>item===id))){
      
      const newArray=[...selectAbsentId,id]
      // setStudentChecked(!studentChecked)
      setSelectAbsentId(newArray)
      console.log("newArray", newArray);

    }else {
    
     
     console.log("student existiert schon"); 
    }


    
    // console.log("result id", selectAbsentId);
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
    setStudentId(student); // änderung
    openEditModale();
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
        getDatum,
        setAuth,
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
        closeHomeworkModale,
        openHomeworkModale,
        editTeacherModules,
        getClassesByClassTeacherId,
        getClassesByModule,

        getAttendanceByClassIdAndSubject,
        attendanceList,

        selectAbsentAndAttendance,

        deleteAttendanceById,


        /*  getTeacherAndSubjectsByClassId, */
        getAllHomeworks,
        addHomeworkToDatabase,
        updateHomeworkToDatabase,
        getHomeworksBySubjectId,
        getHomeworksByType,
        deleteHomeworkById,
        getHomeworksByTeacherId,

        // remoteWeeks
        getAllRemoteWeeks,
        addRemoteWeekToDatabase,
        deleteRemoteById,

        editHomeWorkStudent,
        getAllEventByDate,



        //URL
        BACKEND_URL,
        //useState

        //attendanceList
        allAttendanceList,
        setAllAttendanceList,

        classes,
        setClasses,
        teachers,
        setTeachers,
        setTeacherId,

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
        eventList,
        setEventList,

        databaseUpdated,
        setDatabaseUpdated,
        searchInput,
        setSearchInput,
        setgetAnwiesenheitsListe,
        getAnwiesenheitsListe,
        setList,
        list,
        studentChecked, 
        setStudentChecked,
        setSelectAttendId,
        setSelectAbsentId,
        homeWorkId,
        selectAbsentId,
        toggleHomeworModal,
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

        selectDate,
        setSelectDate,
        activeFilterArow,

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

        // Homeworks
        homeworks,
        setHomeworks,
        homeworkDescription,
        setHomeworkDescription,
        homeworkType,
        setHomeworkType,
        /*  fileHomework,
        setFileHomework, */
        urlHomework,
        setUrlHomework,
        fileNameHomework,
        setFileNameHomework,
        homeworkUploaded,
        setHomeworkUploaded,
        allHomeworks,
        setAllHomeworks,

        // Remote
        allRemotes,
        setAllRemotes,
        remoteWeeks,
        setRemoteWeeks,
        infoDatas,
        setInfoDatas,
        infoDataId,
        setInfoDataId,
        startDate,
        setStartDate,
        homeworkId,
        setHomeworkId,
        homeworkText,
        setHomeworkText,
        monday,
        setMonday,
        tuesday,
        setTuesday,
        wednesday,
        setWednesday,
        thursday,
        setThursday,
        friday,
        setFriday,
       showDay, setShowDay,

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
