import Header from "./components/Header";
import ContextProvider from "./context/context.js";
import {Routes,Route} from 'react-router-dom';
import ReactCalendar from "./components/ReactCalendar";
import Eventliste from "./components/EventListe";
import Sidebar from "./components/SideBar";
import Main from './components/Main.jsx'

function App() {
  return (
    <div className="h-screen p-4 bg-[#8DD4C3]">
      {/* <h1>This is our School App</h1> */}
      <Header />
      <div className="flex space-x-8 mt-3 ">
      <div className="w-[296px] bg-white rounded-md p-2 mt-3 h-[828px]"><Sidebar/></div>
      <div className=" rounded-md w-[1425px] mt-3"><Main/></div>
       <div>
      <div className="w-[296px] h-[215px] bg-white mt-3 rounded-md p-2">
        <ReactCalendar/>
      
      </div>
      <div className="w-[296px] h-[600px] bg-white mt-3 rounded-md p-2"><Eventliste/></div>
      </div>
      </div>
      
<ContextProvider>

  <Routes>
     
      {/* Sidebar */}
      {/* calendar */}
      {/* Main */}
      </Routes>
  </ContextProvider>
    </div>
  );
}

export default App;
