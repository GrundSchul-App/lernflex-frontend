import Calendar from "./components/Calendar";
import EventsList from "./components/EventsList";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen p-4 bg-[#8DD4C3] max-w-[1420px]">
      <Header />
      <div className="flex justify-start">
        <Sidebar />
        <Main />
        <div>
          <Calendar />
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
