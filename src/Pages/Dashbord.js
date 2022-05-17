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
    BBAmarks: 55,
    BBAmarks: 80,
    IMMC: 69,
    IBA: 51,
    Sid: 1,
  },
  {
    BBAmarks: 89,
    IMMC: 88,
    IBA: 73,
    Smarks: 60,
    Sid: 2,
  },
  {
    BBAmarks: 57,
    IMMC: 66,
    IBA: 45,
    Smarks: 66,
    Sid: 3,
  },
  {
    BBAmarks: 45,
    IMMC: 85,
    IBA: 70,
    Smarks: 77,
    Sid: 4,
  },
  {
    BBAmarks: 77,
    IMMC: 40,
    IBA: 60,
    Smarks: 88,
    Sid: 5,
  },
];
export default function Dashbord() {
  const [count, setCount] = useState(0);
  const [countT ,setCountT]=useState(0);
  const [countP ,setCountP]=useState(0);
  const [countD,setCountD]=useState(0);
  const [countC ,setCountC]=useState(0);
  const [countA ,setCountA]=useState(0);
  const [countPP ,setCountPP]=useState(0);
  const [countCC ,setCountCC]=useState(0);
  useEffect(() => {
    if(countC<8){
      setCountC(countC+1);
    }
    if(countA<5){
      setCountA(countA+1);
    }
    if(countPP<39){
      setCountPP(countPP+1);
    }
    if(countCC<27){
      setCountCC(countCC+1);
    }
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
        <div className="right-side-of-stundent">
        <p>Parents</p>
        <h2>{countP}</h2>
        </div> 
      </div>
      <div className="new-total">
      <Avatar style={{backgroundColor:'#D3D3D3'}}><LocalAtmIcon/></Avatar>
        <div className="right-side-of-stundent">
        <p id="par">Expense</p>
        <h2 id="par1"><span style={{color:'red'}}>$</span>{countD}</h2>
        </div> 
      </div></div>
      
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="total-student">
          <h4>Year 1 IMMC</h4>
          <div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart  data={pdata}>
              <YAxis dataKey="Smarks" interval={"preserveStartEnd"} />
                <XAxis dataKey="Sid" interval={"preserveStartEnd"} />

                <Bar dataKey="BBAmarks" fill="green" />
                <Bar dataKey="IMMC" fill="yellow" />
                <Bar dataKey="IBA" fill="blue" />
              </BarChart>
              </ResponsiveContainer>
            </div>
          
          </div>
          <div className="total-program">
          <div className="text">
              <p>Total Program</p>
              <h4>20</h4>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart >
                <Pie data={data} dataKey="uv" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="pv" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
              </PieChart>
              </ResponsiveContainer>
                       
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="perfromance">
            <div className="perfromance-text">
            
                <h5>BIC BBA Year 1 Result-Trend Analysis</h5> 
            </div>
            
            <ResponsiveContainer width="100%" height="100%" aspect={3}>
            <LineChart  data={pdata}>
            <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="Sid" interval={"preserveStartEnd"} />
              <YAxis dataKey='Smarks' />
              <Line type="monotone" dataKey="BBAmarks" stroke="red" />
              <Line type="monotone" dataKey="IMMC" stroke="yellow" />
              <Line type="monotone" dataKey="IBA" stroke="green" />
              
            </LineChart>
          </ResponsiveContainer>
          <div className="camp">

          <div className="main-total">
      <div className="new-total">
      <Avatar style={{backgroundColor:'#90ee90'}}><FamilyRestroomIcon/></Avatar>
        <div className="right-side-of-stundent">
        <p>Total Campuses</p>
        <h2>{countC}</h2>
        </div> 
      </div>
      <div className="new-total">
      <Avatar style={{backgroundColor:'#ADD8E6'}}><GroupsIcon/></Avatar>
        <div className="right-side-of-stundent">
        <p>Total Affiliation</p>
        <h2>{countA}</h2>
        </div> 
      </div>
      </div>
      <div className="main-total">
      <div className="new-total">
      <Avatar style={{backgroundColor:'#90ee90'}}><FamilyRestroomIcon/></Avatar>
        <div className="right-side-of-stundent">
        <p>Position</p>
        <h2>{countPP}</h2>
        </div> 
      </div>
      <div className="new-total">
      <Avatar style={{backgroundColor:'#ADD8E6'}}><GroupsIcon/></Avatar>
        <div className="right-side-of-stundent">
        <p>Certificate</p>
        <h2>{countCC}</h2>
        </div> 
      </div>
      
      </div>
          </div>

            

          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="Market-Overview">
            <div className="market-text">
              <div className="market-left">
                <h4>BIC BBA Year 2 Result-Trend Analysis</h4>
              </div>
              <div className="market-right">
                <Button>This year</Button>
              </div>
            </div>
              <div >
            <ResponsiveContainer width="100%" height="100%" aspect={3}>
            <LineChart  data={pdata}>
            <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="Sid" interval={"preserveStartEnd"} />
              <YAxis dataKey='Smarks' />
              <Line type="monotone" dataKey="BBAmarks" stroke="red" />
              <Line type="monotone" dataKey="IMMC" stroke="yellow" />
              <Line type="monotone" dataKey="IBA" stroke="green" />
              
            </LineChart>
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
        
  <Grid item xs={12} md={4}>
  <div className="Leave-Report">
    <div className="leave-head">
      <h4>Year 2 -FQM</h4>
      <Button variant="contained">Month wise</Button>
    </div>
    <div>
    <ResponsiveContainer width="100%" height={300}>
    <BarChart  data={pdata}>
              
    <YAxis dataKey="Smarks" interval={"preserveStartEnd"} />
      <XAxis dataKey="Sid" interval={"preserveStartEnd"} />

      <Bar dataKey="BBAmarks" fill="green" />
      <Bar dataKey="IMMC" fill="yellow" />
      <Bar dataKey="IBA" fill="blue" />
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
  
 
  <a href="www.google.com">
    Show All <ArrowForwardIcon />
  </a>
</div>
</Grid> 
      </Grid>
    </div>
  );
}
