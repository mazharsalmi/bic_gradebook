import { Grid,Button, Divider } from '@mui/material'
import React from 'react' 
import grade from "./Grades.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SentimentSatisfiedAltSharp } from '@mui/icons-material';

const handelbutton = () => {
console.log('hello');
};
export default function Grades() {
  const [classData, setClassData] = useState(false);
  const [data ,setData]=useState('');
  const ShowData =()=>{
    setClassData(!classData); }
    const getData=(val)=>
    {
      
      setData(val.target.value);
      console.log(data);
      if(data >90) {
        setData('A+')
        
      }
      else if (data >80) {
        setData('A');
      }
      else if (data >70) {
        setData('B+');
        
      }
    }
    
  return (
    <div className='grades'>
    <Grid container spacing={2}>
        <Grid item xs={12} md={12} >
        <div className='student-grades'>
        <h3>Enter Student Grades</h3>
        <div className='data1'>
        <div className='label1'>
        <label>Select University:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>University of London</option>
              <option value="1">University of London</option>
              <option value="2">University of London</option>
              <option value="3">University of London</option>
            </select>
        
        </div>
        <div className='label1'>
        <label>
        Select Program:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>BS Computer</option>
              <option value="1">Bs physics</option>
              <option value="2">Bs math</option>
              <option value="3">BSIT</option>
            </select>
        
        </div>
        <div className='label1'>
        <label>
        Select semester:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
        <div className='label1'>
        <label>
        Select Subject:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>Subject</option>
              <option value="1">math</option>
              <option value="2">phy</option>
              <option value="3">Eng</option>
            </select>
        
        </div>
        <Button className='sort' onClick={ShowData}>Sort</Button>
        </div>
          
            <Divider style={{marginTop:'1rem'}}/>
            <table>
            <tr><th>Student Id</th>
            <th>Student Name</th>
            <th>University</th>
            <th>Program</th>
            <th>Section</th>
            <th>Enter Marks</th>
            <th>Grade</th>
            <th>Comment</th>
            </tr>
            
            { classData ? (
            
              <tr>  <td>1</td>
            <td>sulaman naqvi</td>
            <td>University of london</td>
            <td>computer</td>
            <td>2022</td>
            <td><input type="number" className='commit' onChange={getData} /></td>
            <td>
            <input type="text" className='commit' value={data}></input>
            </td>
            <td><input type="text" className='commit' /></td>
            </tr>
            ):
            ("")
          }

            
            </table>


        </div>
        </Grid>
        </Grid>
    </div>
  )
}
