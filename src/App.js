import Header from "./components/Header";
import ContextProvider from "./context/context.js";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="h-screen p-4 bg-[#8DD4C3]">
      {/* <h1>This is our School App</h1> */}
      <Header />
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
