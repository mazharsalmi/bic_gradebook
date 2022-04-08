import React from "react";
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
import bg from "../images/background.jpg";
import circul from "../images/circle-chart.png";
import Tabel from "../Components/Tabel";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { BarChart, Bar, Cell, CartesianGrid, Tooltip, Legend } from "recharts";
import { PieChart, Pie, Sector } from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const pdata = [
  {
    name: "Phyton",
    student: 15,
    fees: 16,
  },
  {
    name: "angular",
    student: 13,
    fees: 10,
  },
  {
    name: "c#",
    student: 16,
    fees: 15,
  },
  {
    name: "c++",
    student: 33,
    fees: 11,
  },
  {
    name: "js",
    student: 23,
    fees: 13,
  },
];
export default function Dashbord() {
  return (
    <div className="data">
      <div className="feacter">
        <button>
          <ShareIcon />
          Share
        </button>
        <button>
          <PrintIcon />
          Print
        </button>
        <button>
          <SendToMobileIcon />
          Export
        </button>
      </div>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}>
          <div className="prestange">
            <p>Total Students</p>
            <h1>32.53%</h1>
            <p>-0.5%</p>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
          <div className="prestange">
            <p>Total Students</p>
            <h1>32.53%</h1>
            <p>-0.5%</p>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
          <div className="prestange">
            <p>Total Students</p>
            <h1>32.53%</h1>
            <p>-0.5%</p>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
          <div className="prestange">
            <p>Total Students</p>
            <h1>32.53%</h1>
            <p>-0.5%</p>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
          <div className="prestange">
            <p>Total Students</p>
            <h1>32.53%</h1>
            <p>-0.5%</p>
          </div>
        </Grid>
        <Grid item xs={2} md={2}>
          <div className="prestange">
            <p>Total Students</p>
            <h1>32.53%</h1>
            <p>-0.5%</p>
          </div>
        </Grid>
        <Grid item xs={4} md={4}>
          <div className="total-student">
            <div className="stuentleft">
              <h4>Total Students</h4>
              <p>Closed value</p>
              <h2>357c</h2>
            </div>
            <div className="stuentright">
            <div className="line-graph">
            <ResponsiveContainer width={200} aspect={3}>
            <LineChart data={pdata}>
              <Line type="monotone" dataKey="student" stroke="red" />
            </LineChart>
          </ResponsiveContainer>
          </div>

            </div>
          </div>
          <div className="total-program">
            <div >
              <PieChart width={100} height={100}>
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
            <div className="text">
              <h6>Total Program</h6>
              <p>26.28%</p>
            </div>
            <div >
              <PieChart width={100} height={100}>
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
            <div className="text">
              <h6>Total Program</h6>
              <p>26.28%</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={8} md={8}>
          <div className="perfromance">
            <div className="perfromance-text">
              <div className="p-leftside">
                <h4>perfromance Line Chart</h4>
                <h5>Lorem is simply dummy txt of the printing</h5>
              </div>
              <div className="p-rightside">
                <li> This week</li>
                <li> last week</li>
              </div>
            </div>
            <div className="chart">
              <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata}>
                  <XAxis dataKey="name" interval={"preserveStartEnd"} />
                  <YAxis />
                  <Line type="monotone" dataKey="student" stroke="red" />
                  <Line type="monotone" dataKey="fees" stroke="green" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={8} md={8}>
          <div className="Market-Overview">
            <div className="market-text">
              <div className="market-left">
                <h4>Market Overview</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className="market-right">
                <Button>This month</Button>
              </div>
            </div>
            <div className="dolor">
              <div className="dolor-left">
                <h2>$36,2531.00</h2>
                <h4>USD</h4>
                <h4>(+1.37%)</h4>
              </div>
              <div className="dolor-right">
                <li>This week</li>
                <li>last week</li>
              </div>
            </div>
            <div>
              <BarChart width={700} height={200} data={data}>
                <XAxis dataKey="name" />
                <YAxis dataKey="uv" />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} md={4}>
          <div className="todo">
            <div className="todo-list">
              <h4>Todo List</h4>
              <button>+</button>
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
        <Grid item xs={8} md={8}>
          <div className="Enhance">
            <h2>Enhance your Campaign for better outreach</h2>
            <Button variant="contained">Upgrade Account</Button>
          </div>
        </Grid>
        <Grid item xs={4} md={4}>
          <div className="circul-chart">
            <h2>Type By Amount</h2>
            <div className="piegraph" >
            <PieChart width={100} height={100}>
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
              <li>Total</li>
              <li>Net</li>
              <li>Gross</li>
              <li>AVG</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={8} md={8}>
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
        <Grid item xs={4} md={4}>
          <div className="Leave-Report">
            <div className="leave-head">
              <h3>Leave Report</h3>
              <Button variant="contained">Month wise</Button>
            </div>
            <div>
              <BarChart width={300} height={200} data={data}>
                <XAxis dataKey="name" interval={"preserveStartEnd"} />

                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} md={4}>
          <div className="recent">
            <h3>Recent Events</h3>
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
                  <DateRangeIcon />
                  Mar 14, 2019
                </p>
              </div>
            </div>
            <a href="www.google.com">
              Show All <ArrowForwardIcon />
            </a>
          </div>
        </Grid>
        <Grid item xs={4} md={4}>
          <div className="Activities">
            <div className="Activities-head">
              <h3>Activities</h3>
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
          </div>
        </Grid>
        <Grid item xs={4} md={4}>
          <div className="top-performer">
            <h3>Top Performer</h3>
            <div className="clint">
              <div className="clint-left">
                <Avatar />
                <div className="name">
                  <h6>Brandon Washington</h6>
                  <p>162543</p>
                </div>
              </div>
              <div className="clint-right"> 1hr ago</div>
            </div>
            <Divider />
            <div className="clint">
              <div className="clint-left">
                <Avatar />
                <div className="name">
                  <h6>Brandon Washington</h6>
                  <p>162543</p>
                </div>
              </div>
              <div className="clint-right"> 1hr ago</div>
            </div>
            <Divider />
            <div className="clint">
              <div className="clint-left">
                <Avatar />
                <div className="name">
                  <h6>Brandon Washington</h6>
                  <p>162543</p>
                </div>
              </div>
              <div className="clint-right"> 1hr ago</div>
            </div>
            <Divider />
            <div className="clint">
              <div className="clint-left">
                <Avatar />
                <div className="name">
                  <h6>Brandon Washington</h6>
                  <p>162543</p>
                </div>
              </div>
              <div className="clint-right"> 1hr ago</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
