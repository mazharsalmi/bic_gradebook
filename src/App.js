import Navbar from "./Components/Navbar";
import Dashbord from "./Pages/Dashbord";
import Grades from "./Pages/Grades";
import Prepare from "./Pages/Prepare";
import Reporting from "./Pages/Repoting";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import app from "../src/App.css"
import Classes from "./Pages/Classes";
import Subject from "./Pages/Subject";
import Alluser from "./Pages/Alluser";
import MenuAssign from "./Pages/MenuAssign";

function App() {
  return (
    <div className="app">
      <Sidebar>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/prepare" element={<Prepare />} />
          <Route path="/class" element={<Classes/>}/>
          <Route path="/subjects" element={<Subject/>}/>
          <Route path="/menuassignation" element={<Prepare/>}/>
          <Route path="/allusers" element={<Alluser/>}/>
          
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
