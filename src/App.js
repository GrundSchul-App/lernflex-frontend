
import EventsList from "./components/EventsList";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import CalendarComponent from './components/CalendarComponent'

function App() {
  return (
    <div className="h-screen p-4 bg-[#8DD4C3] max-w-[1420px] mx-auto">
      <Header />
      <div className="flex justify-start">
        <Sidebar />
        <Main />
        <div>
          <CalendarComponent />
          <EventsList />
        </div>
        {/* <Sidebar /> */}
      </div>
      {/* calendar */}
      {/* Main */}
    
    </div>
  );
}

export default App;
