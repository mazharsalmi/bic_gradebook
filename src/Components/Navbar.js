import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Navbar from "../Components/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

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


export default function SearchAppBar() {
 
  const handleClick = () => {
  console.log('hello')
}
  return (
    <Box>
      <AppBar position="static" className="appbar">
        <Toolbar className="responsive-bar">
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="left-side-navbar"
          >
            <Avatar className="aavatar" />
            <div className="name-of-user">
              <h3>
                <span style={{ color: "blue" }}>Good Morning,</span> Salman
                Naqvi
              </h3>
              <p>Students performance summary this week</p>
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
              <DateRangeIcon />
              <Divider orientation="vertical" flexItem />
              <p> 4/2/2020</p>
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
            <MenuIcon className="menu-icon nav-img" onClick={handleClick}/>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
