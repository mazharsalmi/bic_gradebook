import React, { useState } from "react";
import { motion } from "framer-motion";
import sidebar from "../Components/Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import GridViewIcon from "@mui/icons-material/GridView";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logowhite.png";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ListIcon from "@mui/icons-material/List";
import Navbar from "../Components/Navbar";
import { padding } from "@mui/system";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropclass ,setDropclass]=useState(false);
  const [dropsubject ,setDropsubject] =useState(false);
  const [dropunilive, setDropunilive]=useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
    setDropclass(false);
    setDropsubject(false);
    setDropunilive(false);
  };
  const handleDropdown1 = () => {
    setDropclass(!dropclass);
    setDropdown(false);
    setDropsubject(false);
    setDropunilive(false);
  };
  const handleDropdown2 = () => {
    setDropsubject(!dropsubject);
    setDropdown(false);
    setDropclass(false);
    
    setDropunilive(false);
  };
  const handleDropdown3 = () => {
    setDropunilive(!dropunilive);
    setDropdown(false);
    setDropclass(false);
    setDropsubject(false);
    
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
    
  };
  const RemoveMenu=()=>{
    setDropdown(false);
    setDropclass(false);
    setDropsubject(false);
    setDropunilive(false);
  }

  return (
    <div className="main">
      {isOpen ? (
        <motion.div animate={{ width: "220px" }} className="sidebar">
          <div className="top_section">
            <span onClick={handleClick} className="bars">
              <MenuIcon />
            </span>
            <img src={logo} alt="logo" />
          </div>
          <section className="routes">
            <NavLink to="/" className="link" onClick={RemoveMenu}>
              <div className="icon">
                <GridViewIcon />
              </div>
              <div className="link_text">DashBoard</div>
            </NavLink>
            <div className="heading">
              {" "}
              <li>GRADEBOOK</li>
            </div>

            <NavLink to="/grades" className="link" onClick={RemoveMenu}>
              <div className="icon">
                <MessageIcon />
              </div>
              <div className="link_text">Grades Entry</div>
            </NavLink>
            <NavLink to="/prepare" className="link" onClick={RemoveMenu}>
              <div className="icon">
                <DateRangeIcon />
              </div>
              <div className="link_text">Prepare Result</div>
            </NavLink>
            <div className="link" onClick={handleDropdown } >
            <div className="icon">
                <AutoGraphIcon />
              </div>
              <div className="link_text">
                Reporting <ArrowRightIcon className="arrow" />
              </div></div>
            
            {dropdown ? (
              <motion.div>
                <ul
                className="menu-drop"
                  
                >
                <li><NavLink to="/" className="dropdown" onClick={RemoveMenu}>
                DashBoard
             </NavLink>
             </li>
             <li><NavLink to="/grades" className="dropdown" onClick={RemoveMenu}>
                Grades
             </NavLink>
             </li>
             <li><NavLink to="/prepare" className="dropdown" onClick={RemoveMenu}>
                Prepare
             </NavLink>
             </li>
                  
                </ul>
              </motion.div>
            ) : (
              ""
            )}
            <div className="heading">TIMETABLE</div>
            <NavLink to="/teachertiming" className="link link-teacher" onClick={RemoveMenu}>
              <div className="icon">
                <MessageIcon />
              </div>
              <div className="link_text">Teacher Timetable</div>
            </NavLink>
            <NavLink to="/studenttiming" className="link link-teacher" onClick={RemoveMenu}>
              <div className="icon">
                <DateRangeIcon />
              </div>
              <div className="link_text">Student Timetable</div>
            </NavLink>
            <div className="heading">SETUP</div>
            <div className="link" onClick={handleDropdown1}>
            <div className="icon">
                <PersonIcon />
              </div>
              <div className="link_text">
                Class
                <ArrowRightIcon className="arrow" />
              </div></div> 
            
            {dropclass ? (
              <div>
                <ul
                className="menu-drop"
                  
                >
                <li><NavLink to="/class" className="dropdown" onClick={RemoveMenu}>
                Class
             </NavLink>
             </li>
             <li><NavLink to="/grades" className="dropdown" onClick={RemoveMenu}>
                Grades
             </NavLink>
             </li>
             <li><NavLink to="/prepare" className="dropdown" onClick={RemoveMenu}>
                Prepare
             </NavLink>
             </li>
                  
                </ul>
              </div>
            ) : (
              ""
            )}
            <div className="link" onClick={handleDropdown2} >
            <div className="icon">
                <PersonIcon />
              </div>
              <div className="link_text">
                Subjects
                <ArrowRightIcon className="arrow" />
              </div></div> 
            
            {dropsubject ? (
              <div>
                <ul
                className="menu-drop"
                  
                >
                <li><NavLink to="/subjects" className="dropdown" onClick={RemoveMenu}>
                Subjects
             </NavLink>
             </li>
             <li><NavLink to="/grades" className="dropdown" onClick={RemoveMenu}>
                Grades
             </NavLink>
             </li>
             <li><NavLink to="/prepare" className="dropdown" onClick={RemoveMenu}>
                Prepare
             </NavLink>
             </li>
                  
                </ul>
              </div>
            ) : (
              ""
            )}
            <NavLink to="/exam" className="link" onClick={RemoveMenu}>
              <div className="icon">
                <ListIcon />
              </div>
              <div className="link_text">Exams</div>
            </NavLink>
            <div className="link" onClick={handleDropdown3}>
            <div className="icon">
                <PersonIcon />
              </div>
              <div className="link_text">
                Unlivesities <ArrowRightIcon className="arrow" />
              </div>
              </div> 
            
            {dropunilive ? (
              <div>
                <ul
                className="menu-drop"
                  
                >
                <li><NavLink to="/unlivesities" className="dropdown" onClick={RemoveMenu}>
                Unlivesities
             </NavLink>
             </li>
             <li><NavLink to="/grades" className="dropdown" onClick={RemoveMenu}>
                Grades
             </NavLink>
             </li>
             <li><NavLink to="/prepare" className="dropdown" onClick={RemoveMenu}>
                Prepare
             </NavLink>
             </li>
                  
                </ul>
              </div>
            ) : (
              ""
            )}
            <div className="heading">ADMINISTRATION</div>

            <NavLink to="/usergroup" className="link" onClick={RemoveMenu}>
              <div className="icon">
                <MessageIcon />
              </div>
              <div className="link_text">User Groups</div>
            </NavLink>
            <NavLink to="/menuassignation" className="link link-teacher" onClick={RemoveMenu}>
              <div className="icon">
                <DateRangeIcon />
              </div>
              <div className="link_text">Menu Assignation</div>
            </NavLink>
            <NavLink to="/allusers" className="link" onClick={RemoveMenu}>
              <div className="icon">
                <ListIcon />
              </div>
              <div className="link_text">All Users</div>
            </NavLink>
          </section>
        </motion.div>
      ) : (
        <motion.div
          animate={{ width: "70px", padding: "20px 0" }}
          className="sidebar1"
        >
          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span onClick={handleClick} className="bars">
              <MenuIcon />
            </span>
          </div>
          <section className="routes">
            <NavLink to="/" className="link1" >
              <div className="icon">
                <GridViewIcon />
              </div>
              {isOpen && <div className="link_text">DashBoard</div>}
            </NavLink>
            {isOpen && (
              <div className="heading">
                {" "}
                <li>GRADEBOOK</li>
              </div>
            )}

            <NavLink to="/grades" className="link1">
              <div className="icon">
                <MessageIcon />
              </div>
              {isOpen && <div className="link_text">Grades Entry</div>}
            </NavLink>
            <NavLink to="/prepare" className="link1">
              <div className="icon">
                <DateRangeIcon />
              </div>
              {isOpen && <div className="link_text">Prepare Result</div>}
            </NavLink>
            <NavLink to="/reporting" className="link1">
              <div className="icon">
                <AutoGraphIcon />
              </div>
              {isOpen && <div className="link_text">Reporting</div>}
            </NavLink>
            {isOpen && <div className="heading">TIMETABLE</div>}
            <NavLink to="/teachertiming" className="link1 link-teacher">
              <div className="icon">
                <MessageIcon />
              </div>
              {isOpen && <div className="link_text">Teacher Timetable</div>}
            </NavLink>
            <NavLink to="/studenttiming" className="link1 link-teacher">
              <div className="icon">
                <DateRangeIcon />
              </div>
              {isOpen && <div className="link_text">Student Timetable</div>}
            </NavLink>
            {isOpen && <div className="heading">SETUP</div>}
            <NavLink to="/class" className="link1">
              <div className="icon">
                <PersonIcon />
              </div>
              {isOpen && <div className="link_text">Class</div>}
            </NavLink>
            <NavLink to="/subjects" className="link1">
              <div className="icon">
                <PersonIcon />
              </div>
              {isOpen && <div className="link_text">Subjects</div>}
            </NavLink>
            <NavLink to="/exam" className="link1">
              <div className="icon">
                <ListIcon />
              </div>
              {isOpen && <div className="link_text">Exams</div>}
            </NavLink>
            <NavLink to="/unlivesities" className="link1">
              <div className="icon">
                <PersonIcon />
              </div>
              {isOpen && <div className="link_text">Unlivesities</div>}
            </NavLink>
            {isOpen && <div className="heading">ADMINISTRATION</div>}

            <NavLink to="/usergroup" className="link1">
              <div className="icon">
                <MessageIcon />
              </div>
              {isOpen && <div className="link_text">User Groups</div>}
            </NavLink>
            <NavLink to="/menuassignation" className="link1 link-teacher">
              <div className="icon">
                <DateRangeIcon />
              </div>
              {isOpen && <div className="link_text">Menu Assignation</div>}
            </NavLink>
            <NavLink to="/allusers" className="link1">
              <div className="icon">
                <ListIcon />
              </div>
              {isOpen && <div className="link_text">All Users</div>}
            </NavLink>
          </section>
        </motion.div>
      )}
      <main>{children}</main>
    </div>
  );
}
