import React ,{useEffect, useState} from "react";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import dashbord from "../Pages/Dashbord.css";
import Divider from "@mui/material/Divider";
import { Avatar, Button, Grid, item } from "@mui/material";
import line from "../images/linegraph.png";
import chart from "../images/chart.png";
import graph from "../images/graph-chart.png";
import month from "../images/month-chart.png";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import bg from "../images/background.jpg";
import circul from "../images/circle-chart.png";
import Tabel from "../Components/Tabel";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { BarChart, Bar, Cell, CartesianGrid, Tooltip, Legend } from "recharts";
import { PieChart, Pie, Sector } from "recharts";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CircleIcon from '@mui/icons-material/Circle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

import GroupsIcon from '@mui/icons-material/Groups';

const data = [
  {
    college:"BSS",
    year:2016,
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    college:"TNS",
    year:2017,
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    college:"TEY",
    year:2018,
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    college:"CC",
    year:2019,
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    college:"DCSS",
    year:2020,
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    college:"UCS",
    year:2021,
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    college:"BNU",
    year:2022,
    name: "BNU",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const pdata = [
  {
    name: "BSCS",
    student: 15,
    fees: 16,
  },
  {
    name: "BSIT",
    student: 13,
    fees: 10,
  },
  {
    name: "BSSE",
    student: 16,
    fees: 15,
  },
  {
    name: "BS MATH",
    student: 33,
    fees: 11,
  },
  {
    name: "BS ENGLISH",
    student: 23,
    fees: 13,
  },
];
export default function Dashbord() {
  const [count, setCount] = useState(0);
  const [countT ,setCountT]=useState(0);
  const [countP ,setCountP]=useState(0);
  const [countD,setCountD]=useState(0);
  useEffect(() => {
    if(countD<19000){
      setCountD(countD+45);
    }
    if(countP<2000){
      setCountP(countP+5);
    }
    if(countT<1500){
      setCountT(countT+4);
    }
    if (count<4000) {
      setCount(count+10);
    }
  });
  return (
    <div className="data">
      <div className="feacter">
        <button className="avc">
          <ShareIcon className="icon-head" />
          Share
        </button>
        <button className="avc">
          <PrintIcon className="icon-head" />
          Print
        </button>
        <button className="avc" style={{ background: " rgb(71, 71, 152)", color: "wheat" }}>
          <SendToMobileIcon className="icon-head"/>
          Export
        </button>
      </div>
      <Divider />
      <div className="main-total">
      <div className="new-total">
      <Avatar style={{backgroundColor:'#90ee90'}}><FamilyRestroomIcon/></Avatar>
        <div className="right-side-of-stundent">
        <p>Total Student</p>
        <h2>{count}</h2>
        </div> 
      </div>
      <div className="new-total">
      <Avatar style={{backgroundColor:'#ADD8E6'}}><GroupsIcon/></Avatar>
        <div className="right-side-of-stundent">
        <p>Total Teacher</p>
        <h2>{countT}</h2>
        </div> 
      </div>
      <div className="new-total">
      <Avatar style={{backgroundColor:'#ffcccb '}}><SupervisorAccountIcon/></Avatar>
        <div className="right-side-of-stundent" id="par">
        <p>Parents</p>
        <h2>{countP}</h2>
        </div> 
      </div>
      <div className="new-total">
      <Avatar style={{backgroundColor:'#D3D3D3'}}><LocalAtmIcon/></Avatar>
        <div className="right-side-of-stundent" id="par">
        <p>Expense</p>
        <h2><span style={{color:'red'}}>$</span>{countD}</h2>
        </div> 
      </div></div>
      
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="total-student">
          <h4>Result</h4>
          <div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart  data={pdata}>
              
              <YAxis dataKey="student" interval={"preserveStartEnd"} />
                <XAxis dataKey="name" interval={"preserveStartEnd"} />

                <Bar dataKey="student" fill="#E5E4E2" />
              </BarChart>
              </ResponsiveContainer>
            </div>
          
          </div>
          <div className="total-program">
            <ResponsiveContainer width="100%" height={100}>
              <PieChart >
                <Pie
                  data={data}
                  dataKey="uv"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                  stroke="white"
                />
              </PieChart>
              </ResponsiveContainer>
            <div className="text">
              <p>Total Program</p>
              <h4>20</h4>
            </div>           
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="perfromance">
            <div className="perfromance-text">
              <div className="p-leftside">
                <h4>Class Attendance</h4>
                <h5>This Week  Attendance Graph</h5>
              </div>
              <div className="p-rightside">
              <span style={{color:'blue'}}><CircleIcon/></span> <li>This week</li>
              <span style={{color:'	#7B68EE'}}><CircleIcon/></span> <li> last week</li>
              </div>
            </div>
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%" aspect={3}>
                <LineChart data={pdata}>
                  <XAxis dataKey="name" interval={"preserveStartEnd"} />
                  <YAxis />
                  <Line type="monotone" dataKey="student" stroke="red" />
                  
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="Market-Overview">
            <div className="market-text">
              <div className="market-left">
                <h4>OUR COLLEGE SURVY</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className="market-right">
                <Button>This month</Button>
              </div>
            </div>
            <div className="dolor">
              <div className="dolor-left">
                <h2>This year</h2>
              </div>
              <div className="dolor-right">
              <span style={{color:'blue'}}><CircleIcon/></span> <li>This week</li>
              <span style={{color:'	#7B68EE'}}><CircleIcon/></span> <li> last week</li>
              </div>
            </div>
            <div >
            <ResponsiveContainer width="100%"  height="150" aspect={3}>
              <BarChart  data={data}>
                <XAxis dataKey="college" />
                <YAxis dataKey="uv" fill="black" />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="todo">
            <div className="todo-list">
              <h4>Todo List</h4>
              
              <AddCircleIcon/>
            </div>
            <div className="list">
              <p>
                <Checkbox />
                Lorem Ipsum is simply dummy ..
              </p>
              <div className="date-list">
                <p>24 June 2020</p>
                <div className="finsh">Due tomorrow</div>
              </div>
              <Divider />
            </div>
            <div className="list">
              <p>
                <Checkbox />
                Lorem Ipsum is simply dummy ..
              </p>
              <div className="date-list">
                <p>24 June 2020</p>
                <div className="finsh">Due tomorrow</div>
              </div>
              <Divider />
            </div>
            <div className="list">
              <p>
                <Checkbox />
                Lorem Ipsum is simply dummy ..
              </p>
              <div className="date-list">
                <p>24 June 2020</p>
                <div className="finsh">Due tomorrow</div>
              </div>
              <Divider />
            </div>
            <div className="list">
              <p>
                <Checkbox />
                Lorem Ipsum is simply dummy ..
              </p>
              <div className="date-list">
                <p>24 June 2020</p>
                <div className="finsh">Due tomorrow</div>
              </div>
              <Divider />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="request">
            <div className="head">
              <div className="head-left">
                <h4>Pending Requests</h4>
                <p>You have 50+ new requests</p>
              </div>
              <div className="head-right">
                <Button variant="contained">
                  {" "}
                  <PersonIcon />
                  Add new member
                </Button>
              </div>
            </div>
            <Tabel />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
    <div className="circul-chart">
      <h4>Type By Amount</h4>
      <div className="piegraph">
        <PieChart width={100} height={177}>
          <Pie
            data={data}
            dataKey="uv"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
        </PieChart>
      </div>
      <ul>
      <span style={{color:'red'}}><CircleIcon/></span> <li> Total</li>
      <span style={{color:'blue'}}><CircleIcon/></span> <li>Net</li>
      <span style={{color:'green'}}><CircleIcon/></span> <li>Gross</li>
      <span style={{color:'pink'}}><CircleIcon/></span> <li>AVG</li>
      </ul>
    </div>
  </Grid>
  <Grid item xs={12} md={4}>
  <div className="Leave-Report">
    <div className="leave-head">
      <h4>Leave Report</h4>
      <Button variant="contained">Month wise</Button>
    </div>
    <div>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart  data={pdata}>
        <XAxis dataKey="name" interval={"preserveStartEnd"} />

        <Bar dataKey="student" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</Grid>
<Grid item xs={12} md={4}>
<div className="recent">
  <h4>Recent Events</h4>
  <div className="event">
    <p>Change in Directors</p>
    <div className="date-event">
      <p>
        <DateRangeIcon />
        Mar 14, 2019
      </p>
    </div>
    <Divider />
  </div>
  <div className="event">
    <p>Change in Directors</p>
    <div className="date-event">
      <p>
        <DateRangeIcon style={{marginRight:'8px'}}/>
        Mar 14, 2019
      </p>
    </div>
    <Divider />
  </div>
  <div className="event">
    <p>Change in Directors</p>
    <div className="date-event">
      <p>
        <DateRangeIcon style={{marginRight:'8px'}}/>
        Mar 14, 2019
      </p>
    </div>
    <Divider />
  </div>
  <div className="event">
    <p>Change in Directors</p>
    <div className="date-event">
      <p>
        <DateRangeIcon style={{marginRight:'8px'}}/>
        Mar 14, 2019
      </p>
    </div>
  </div>
  <a href="www.google.com">
    Show All <ArrowForwardIcon />
  </a>
</div>
</Grid>
<Grid item xs={12} md={4}>
<div className="Activities">
  <div className="Activities-head">
    <h4>Activities</h4>
    <p>20 finished, 5 remaining</p>
  </div>
  <li className="line">
    <p>
      <span style={{ color: "blue" }}>Ben Tossell</span> assign you a
      task
    </p>
    <p>Just now</p>
  </li>
  <li className="line">
    <p>
      <span style={{ color: "blue" }}>Ben Tossell</span> assign you a
      task
    </p>
    <p>1hr</p>
  </li>
  <li className="line">
    <p>
      <span style={{ color: "blue" }}>Ben Tossell</span> assign you a
      task
    </p>
    <p>1hr</p>
  </li>
  <li className="line">
    <p>
      <span style={{ color: "blue" }}>Ben Tossell</span> assign you a
      task
    </p>
    <p>1hr</p>
  </li>
  <li className="line">
    <p>
      <span style={{ color: "blue" }}>Ben Tossell</span> assign you a
      task
    </p>
    <p>1hr</p>
  </li>
  <li className="line">
    <p>
      <span style={{ color: "blue" }}>Ben Tossell</span> assign you a
      task
    </p>
    <p>1hr</p>
  </li>
  <li className="line">
    <p>
      <span style={{ color: "blue" }}>Ben Tossell</span> assign you a
      task
    </p>
    <p>1hr</p>
  </li>
  <a href="www.google.com">
    Show All <ArrowForwardIcon />
  </a>
</div>
</Grid> 
      </Grid>
    </div>
  );
}
