import React, { useState } from 'react'
import { motion } from "framer-motion"
import sidebar from "../Components/Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import GridViewIcon from '@mui/icons-material/GridView';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../images/logowhite.png";
import DateRangeIcon from '@mui/icons-material/DateRange';
import ListIcon from '@mui/icons-material/List';
const routes = [

  {
    path: '/',
    name: 'DashBoard',
    icon: <GridViewIcon />,
  },
  {
    path: 'none',
    name: 'GRADEBOOK'
  },
  {
    path: '/grades',
    name: 'Grades Entry',
    icon: <MessageIcon />,
  },
  {
    path: '/prepare',
    name: 'Prepare Result',
    icon: <DateRangeIcon />,
  },
  {
    path: '/reporting',
    name: 'Reporting',
    icon: <AutoGraphIcon />,
  },
  {
    path: '/timetable',
    name: 'TIMETABLE',

  },
  {
    path: '/teachertiming',
    name: 'Teacher Timetable',
    icon: <MessageIcon />,
  },
  {
    path: '/studenttiming',
    name: 'Student Timetable',
    icon: <DateRangeIcon />,
  },
  {
    path: '/setup',
    name: 'SETUP',

  },
  {
    path: '/class',
    name: 'Class',
    icon: <PersonIcon />,
  },
  {
    path: '/subjects',
    name: 'Subjects',
    icon: <PersonIcon />,
  },
  {
    path: '/exam',
    name: 'Exams Setup',
    icon: <ListIcon />,
  },
  {
    path: '/unlivesities',
    name: 'Unlivesities',
    icon: <PersonIcon />,
  },
  {
    path: '/administration',
    name: 'ADMINISTRATION'
  },
  {
    path: '/usergroup',
    name: 'User Groups',
    icon: <MessageIcon />,
  },
  {
    path: '/menuassignation',
    name: 'Menu Assignation',
    icon: <DateRangeIcon />,
  },
  {
    path: '/allusers',
    name: 'All Users',
    icon: <ListIcon />,
  },

];

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  // const toggle =()=> setIsOpen(!isOpen);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  return (

    <div className='main'>
      {isOpen ?
        <motion.div animate={{ width: '220px' }} className='sidebar'>
          <div className='top_section'>

            <span onClick={handleClick} className='bars'>
              <MenuIcon />
            </span>
            <img src={logo} alt="logo" />
          </div>
          <section className='routes'>
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className='link'>
                <div className='icon'>{route.icon}</div>
                <div className='link_text'>{route.name}</div>
              </NavLink>
            ))}
          </section>
        </motion.div>
        : <motion.div animate={{ width: '70px', padding: "20px 0" }} className='sidebar'>
          <div className='' style={{ display: "flex", justifyContent: "center" }}>

            <span onClick={handleClick} className='bars'>
              <MenuIcon />
            </span>

          </div>
          <section className='routes'>
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className='mobile-link'>
                <div className='icon'>{route.icon}</div>
                <div style={{ display: "none" }} className='link_text'>{route.name}</div>
              </NavLink>
            ))}
          </section>
        </motion.div>}
      <main>{children}</main>
    </div>
  )
}
