import EventsList from "./components/EventsList";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import CalendarComponent from "./components/CalendarComponent";
// import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="h-screen p-4 bg-[#8DD4C3] max-w-[1420px] mx-auto">
      <Header />
      <div className="flex justify-start h-screen">
        <Sidebar />
        <Main />
        <div className="w-[15%]">
          <CalendarComponent />
          <EventsList />
        </div>
       
      </div>
      
    </div>
  );
}

export default App;
