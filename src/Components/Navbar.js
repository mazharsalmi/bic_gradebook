import React, { useState , useEffect , Container} from "react";
import { motion } from "framer-motion";

import navbar from "../Components/Navbar.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import GridViewIcon from "@mui/icons-material/GridView";
import MessageIcon from "@mui/icons-material/Message";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logo from "../images/logowhite.png";
import Date from "../Table/Date"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const routes = [
  {
    path: "/",
    name: "DashBoard",
    icon: <GridViewIcon />,
  },
  {
    path: "/gradbook",
    name: "GRADEBOOK",
  },
  {
    path: "/grades",
    name: "Grades Entry",
    icon: <MessageIcon />,
  },
  {
    path: "/prepare",
    name: "Prepare Result",
    icon: <DateRangeIcon />,
  },
  {
    path: "/reporting",
    name: "Reporting",
    icon: <AutoGraphIcon />,
  },
  {
    path: "/timetable",
    name: "TIMETABLE",
  },
  {
    path: "/teachertiming",
    name: "Teacher Timetable",
    icon: <MessageIcon />,
  },
  {
    path: "/studenttiming",
    name: "Student Timetable",
    icon: <DateRangeIcon />,
  },
  {
    path: "/setup",
    name: "SETUP",
  },
  {
    path: "/class",
    name: "Class",
    icon: <PersonIcon />,
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: <PersonIcon />,
  },
  {
    path: "/exam",
    name: "Exams Setup",
    icon: <ListIcon />,
  },
  {
    path: "/unlivesities",
    name: "Unlivesities",
    icon: <PersonIcon />,
  },
  {
    path: "/administration",
    name: "ADMINISTRATION",
  },
  {
    path: "/usergroup",
    name: "User Groups",
    icon: <MessageIcon />,
  },
  {
    path: "/menuassignation",
    name: "Menu Assignation",
    icon: <DateRangeIcon />,
  },
  {
    path: "/allusers",
    name: "All Users",
    icon: <ListIcon />,
  },
];

export default function SearchAppBar({ children }) {
  const [show, setShow] = useState(false);

  const handleClicks = () => {
    setShow(!show);
  };
  const [name ,setName] =useState(false);
  function hideName(){
    if(window.scrollY >=90){
      setName(true)

    }else{
      setName(false)
    }
  }
  const [color , setColor]=useState(false) 
  function chaingColor(){
    if (window.scrollY >=90){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', hideName)
  window.addEventListener('scroll' , chaingColor)
  useEffect(() => {
    window.scrollBy(0, 0)
  }, [])
  return (
    <Box>
      {show ? (
        <div>
          <div className="main" style={{ position: "relative" }}>
            <motion.div
              animate={{ width: "250px" }}
              className="sidebar-mobile"
              style={{
                position: "absolute",
                right: "0",
                top: "4rem",
                zIndex: "99",
                backgroundColor: "black",
              }}
            >
              <div className="top_section">
                <MenuIcon
                  className="menu-icon nav-img"
                  onClick={handleClicks}
                />
                <img src={logo} alt="logo" />
              </div>
              <section className="routes">
                {routes.map((route) => (
                  <NavLink to={route.path} key={route.name} className="link">
                    <div className="icon">{route.icon}</div>
                    <div className="link_text">{route.name}</div>
                  </NavLink>
                ))}
              </section>
            </motion.div>

            <main>{children}</main>
          </div>
        </div>
      ) : (
        ""
      )}

      <AppBar position="fixed" elevation={0} >
      
        <Toolbar  className={ color ? 'responsive-bar header-bg' : 'responsive-bar'} >
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="left-side-navbar"
          >
            <Avatar className="aavatar" />

            <div className={name ? 'name-of-user header' : 'name-of-user'}>
              <h1>
                Good Morning , <span style={{ color: "black" }}>Salman
                Naqvi</span> 
              </h1>
              <h3>Students performance summary this week</h3>
            </div>
          </Typography>
          <Box className="select-date">
            <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>Select Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="date">
            <Date/>
            </div>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="nav-right-icon">
            <MailOutlineOutlinedIcon className="nav-img" />
            <NotificationsOutlinedIcon className="nav-img" />
            <Avatar alt="" src="" className="nav-img right-avater" />
            <MenuIcon className="menu-icon nav-img" onClick={handleClicks} />
          </div>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
