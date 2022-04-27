import React from 'react'
import teacher  from "../Pages/Teacher.css"
import {Grid ,Checkbox } from "@mui/material"
import TeacherCalender from "../Table/TeacherCalender"
export default function Prepare() {
  return (
    <div className='prepare'>
    <Grid container spacing={2} pt='3rem'>
        <Grid item xs={12} md={2}>
        
        <ul className='list-of-teacher'>
        <li>Teacher</li>
        <li>Subject</li>
        <li>Class</li>
        </ul>
        
        </Grid>
        
        <Grid item xs={12} md={10}>
        <div className='right-side-calendar'>
        <TeacherCalender/>
        </div>
        </Grid>
        
        </Grid>
    </div>
  )
}
