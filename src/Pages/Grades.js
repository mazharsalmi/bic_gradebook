import { Grid } from '@mui/material'
import React from 'react' 
import grade from "../Pages/Grades.css"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import GradeEnter from "../Table/GradeEnter"

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
        <input placeholder='University of London'></input>
        </div>
        <div className='label1'>
        <label>Select University:</label>
        <input placeholder='University of London'></input>
        <div className='sort'>Sort</div>
        </div>
        </div>
        <GradeEnter/>
        </div>
        </Grid>
        </Grid>
    </div>
  )
}
