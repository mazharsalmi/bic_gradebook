import { Grid,Button, Divider } from '@mui/material'
import React from 'react' 
import grade from "./Grades.css"
const handelbutton = () => {
console.log('hello');
};
export default function Grades() {
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
        <Button className='sort'>Sort</Button>
        </div>
        </div>
        <Grid container spacing={2}  className='table-heading'>
            <Grid item xs={6} md={2} >
            <p>Student ID</p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>Student Name</p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>University</p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>Program </p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>Session</p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>Action</p>
            </Grid>
            </Grid>
            <Divider style={{marginTop:'1rem'}}/>
            <Grid container spacing={2} className='table-heading'>
            <Grid item xs={6} md={2}>
            <p>1</p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>Salman Naqvi </p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>University of London</p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>BS Infromation Techonalgy</p>
            </Grid>
            <Grid item xs={6} md={2}>
            <p>2020</p>
            </Grid>
            <Grid item xs={6} md={2}>
            <Button onClick={handelbutton}> Enter Grades</Button>
            </Grid>
            </Grid>
            <Divider style={{marginTop:'1rem'}}/>


        </div>
        </Grid>
        </Grid>
    </div>
  )
}
