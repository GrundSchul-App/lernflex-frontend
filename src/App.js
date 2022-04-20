// import EventsList from "./components/Attendance/EventsList";
import Header from "./components/Header";
// import Main from "./components/Attendance/Main";
import Sidebar from "./components/Sidebar";
// import CalendarComponents from "./components/CalendarComponent";
import { Routes, Route } from "react-router-dom";
import RemoteCourse from "./pages/TeacherFolder/RemoteCourse.jsx";
import AttendanceList from "./pages/TeacherFolder/AttendanceList";
import Students from "./pages/TeacherFolder/Students";
import Homeworks from "./pages/TeacherFolder/HomeWorks";
import Teachers from "./pages/TeacherFolder/Teachers";
import Subjects from "./pages/TeacherFolder/Subjects";
import Classes from "./pages/TeacherFolder/Classes";
import Events from "./pages/TeacherFolder/Events";
import Settings from "./pages/TeacherFolder/Settings";

function App() {
  return (
    <div className="p-4 bg-[#8DD4C3] max-w-[1420px] mx-auto">
      <Header />
      <div className="flex justify-start ">
        <Sidebar />

        {/* <Main /> */}
        <Routes>
          <Route path="/attendance" element={<AttendanceList />} />

          <Route path="/remote" element={<RemoteCourse />} />
          <Route path="/students" element={<Students />} />
          <Route path="/homeworks" element={<Homeworks />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <div>{/* <EventsList /> */}</div>
      </div>
    </div>
  );
}

export default App;
