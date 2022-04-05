import Navbar from "./Components/Navbar";
import Dashbord from "./Pages/Dashbord";
import Grades from "./Pages/Grades";
import Prepare from "./Pages/Prepare";
import Reporting from "./Pages/Repoting";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import app from "../src/App.css"
function App() {
  return (
    <div className="app">
      <Sidebar>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/prepare" element={<Prepare />} />
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
