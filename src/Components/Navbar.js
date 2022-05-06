import React, { useState, useEffect, Container } from "react";
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
import Date from "../Table/Date";
import fb from "../images/myfb.jpg"

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

export default function SearchAppBar({ children }) {
  const [show, setShow] = useState(false);
  const [poss,setPoss]=useState(true)
 

  const handleClicks = () => {
    setShow(!show);
  };
  const RemoveSidebar =(e)=>{
      setShow(false)

  }
  const [name, setName] = useState(false);
  function hideName() {
    if (window.scrollY >= 90) {
     setPoss(true)
      setName(true);
    } else {
      setName(false);
    }
  }
  const [color, setColor] = useState(false);
  function chaingColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener("scroll", hideName);
  window.addEventListener("scroll", chaingColor);
  useEffect(() => {
    window.scrollBy(0, 0);
  }, []);
  return (
    <Box>
      {show ? (
        <div>
          <div className="main" style={{ position: "relative" }}>
            <motion.div
              animate={{ width: "220px" }}
              className="sidebar-mobile"
              style={{
                position: "absolute",
                right: "0",
                top: "6.5rem",
                zIndex: "99",
                backgroundColor: "black",
              }}
            >
              <div className="top_section1">
                <MenuIcon
                  className="menu-icon nav-img"
                  onClick={handleClicks}
                />
                <img src={logo} alt="logo" />
              </div>
              <section className="routes">
                <NavLink to="/" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <GridViewIcon />
                  </div>
                  <div className="link_text">DashBoard</div>
                </NavLink>
                <div className="heading">
                  {" "}
                  <li>GRADEBOOK</li>
                </div>

                <NavLink to="/grades" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <MessageIcon />
                  </div>
                  <div className="link_text">Grades Entry</div>
                </NavLink>
                <NavLink to="/prepare" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <DateRangeIcon />
                  </div>
                  <div className="link_text">Prepare Result</div>
                </NavLink>
                <NavLink to="/reporting" className="link">
                  <div className="icon">
                    <AutoGraphIcon />
                  </div>
                  <div className="link_text">Reporting</div>
                </NavLink>
                <div className="heading">TIMETABLE</div>
                <NavLink to="/teachertiming" className="link link-teacher" onClick={RemoveSidebar}>
                  <div className="icon">
                    <MessageIcon />
                  </div>
                  <div className="link_text">Teacher Timetable</div>
                </NavLink>
                <NavLink to="/studenttiming" className="link link-teacher" onClick={RemoveSidebar}>
                  <div className="icon">
                    <DateRangeIcon />
                  </div>
                  <div className="link_text">Student Timetable</div>
                </NavLink>
                <div className="heading">SETUP</div>
                <NavLink to="/class" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <PersonIcon />
                  </div>
                  <div className="link_text">Class</div>
                </NavLink>
                <NavLink to="/subjects" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <PersonIcon />
                  </div>
                  <div className="link_text">Subjects</div>
                </NavLink>
                <NavLink to="/exam" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <ListIcon />
                  </div>
                  <div className="link_text">Exams</div>
                </NavLink>
                <NavLink to="/unlivesities" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <PersonIcon />
                  </div>
                  <div className="link_text">Unlivesities</div>
                </NavLink>
                <div className="heading">ADMINISTRATION</div>

                <NavLink to="/usergroup" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <MessageIcon />
                  </div>
                  <div className="link_text">User Groups</div>
                </NavLink>
                <NavLink to="/menuassignation" className="link link-teacher" onClick={RemoveSidebar}>
                  <div className="icon">
                    <DateRangeIcon />
                  </div>
                  <div className="link_text">Menu Assignation</div>
                </NavLink>
                <NavLink to="/allusers" className="link" onClick={RemoveSidebar}>
                  <div className="icon">
                    <ListIcon />
                  </div>
                  <div className="link_text">All Users</div>
                </NavLink>
              </section>
            </motion.div>

            <main>{children}</main>
          </div>
        </div>
      ) : (
        ""
      )}

      <AppBar className="responsive-bar"  elevation={0}>
        <Toolbar
        style={{ position: poss ? 'fixed' : 'relative',zIndex:10000,top:0, justifyContent:"space-between", paddingLeft:'0rem',
      }}
          className={color ? "responsive-bar header-bg" : "responsive-bar"}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="left-side-navbar"
          >
            <Avatar alt="avert" src={fb} className="aavatar" />

            <div  className={name ? "name-of-user header" : "name-of-user"}>
              <h1>
                Good Morning ,{" "}
                <span style={{ color: "black" }}>Mazhar Iqbal</span>
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
              <Date />
            </div>
          </Box>
          <Search className="search">
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
            <Avatar alt="avert" src={fb} className="nav-img right-avater" />
            <MenuIcon className="menu-icon nav-img" onClick={handleClicks} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
