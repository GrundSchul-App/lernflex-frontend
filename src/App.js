// import EventsList from "./components/Attendance/EventsList";
import Header from "./components/Header";

import Main from "./components/Attendance/Main";
import Sidebar from "./components/Sidebar";
// import CalendarComponents from "./components/CalendarComponent";
import { Routes, Route, useLocation } from "react-router-dom";
import RemoteCourse from "./pages/TeacherFolder/RemoteCourse.jsx";
import AttendanceList from "./pages/TeacherFolder/AttendanceList";
import Students from "./pages/TeacherFolder/Students";
import Homeworks from "./pages/TeacherFolder/Homeworks";
import Teachers from "./pages/TeacherFolder/Teachers";
import Subjects from "./pages/TeacherFolder/Subjects";
import Classes from "./pages/TeacherFolder/Classes";
import Events from "./pages/TeacherFolder/Events";
import Settings from "./pages/TeacherFolder/Settings";

import EventCalendar from "./components/calendar/EventCalendar";
import ContextProvider from "./context/context";
import Landing from "./pages/Landing";

function App() {
  const location = useLocation();
  return (
    <div className=" bg-[#8DD4C3] max-w-[1420px] mx-auto">
      <ContextProvider>
        {location.pathname === "/landing" ? "" : <Header />}
        <div className="flex justify-start ">
          {location.pathname === "/landing" ? "" : <Sidebar />}

          {/*   <Main />  */}
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/attendance" element={<AttendanceList />} />
            <Route path="/remote" element={<RemoteCourse />} />
            <Route path="/students" element={<Students />} />
            <Route path="/homeworks" element={<Homeworks />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/events" element={<Events />} />
            <Route path="/calendar" element={<EventCalendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;
