
import Header from "./components/Header";


import Sidebar from "./components/Sidebar";


import { Routes, Route, useLocation } from "react-router-dom";

import Remote from "./pages/TeacherFolder/Remote.jsx";
import AttendanceList from "./pages/TeacherFolder/AttendanceList";
import Students from "./pages/TeacherFolder/Students";
import Homeworks from "./pages/TeacherFolder/Homeworks";
import Teachers from "./pages/TeacherFolder/Teachers";
import Subjects from "./pages/TeacherFolder/Subjects";
import Classes from "./pages/TeacherFolder/Classes";

import Settings from "./pages/TeacherFolder/Settings";

import EventCalendar from "./components/calendar/EventCalendar";
import ContextProvider from "./context/context";
import Landing from "./pages/Landing";

function App() {
  const location = useLocation();
  return (
    <div className=" bg-[#8DD4C3] max-w-[1420px] mx-auto max-h-screen">
      <ContextProvider>
        {location.pathname !== '/' ? <Header /> : '' }
        <div className="flex justify-start ">
          {location.pathname !== '/' ? <Sidebar /> : '' }
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/attendance" element={<AttendanceList />} />
          
           <Route path="/remote" element={<Remote />} />
            <Route path="/students" element={<Students />} />
            <Route path="/homeworks" element={<Homeworks />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/classes" element={<Classes />} />
           
            <Route path="/calendar" element={<EventCalendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;
