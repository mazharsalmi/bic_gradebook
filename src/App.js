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
import ScrollToTop from "./Components/ScroolBar"
import DatePickers from "./Table/Calendar.js"
import Teacher from "./Pages/Teacher"
import UserGroup from "./Pages/UserGroup";
import Exame from "./Pages/Exame";
import StudentTime from "./Pages/StudentTime";
import University from "./Pages/University";
import OfferProgram from "./Pages/OfferProgram"
import ClassList from "./Pages/ClassList"

function App() {
  return (
    <div className="app">  
    <ScrollToTop />
      <Sidebar>
      
      <Navbar/>
      <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/prepare" element={<Prepare />} />
          <Route path="/class" element={<ClassList/>}/>
          <Route path='/teachertiming' element={<Teacher/>}/>
          <Route path="/subjects" element={<Subject/>}/>
          <Route path="/menuassignation" element={<Prepare/>}/>
          <Route path="/usergroup" element={<UserGroup/>}/>
          <Route path="/allusers" element={<Alluser/>}/>
          <Route path="/exam" element={<Exame/>}/>
          <Route path="/studenttiming" element={<StudentTime/>}/>
          <Route path="/university" element={<University/>}/>
          <Route path="/offerprogram" element={<OfferProgram/>}/>
          
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
