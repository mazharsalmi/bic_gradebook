import React from 'react'
import teacher  from "../Pages/Teacher.css"
import {Grid ,Checkbox } from "@mui/material"
import TeacherCalender from "../Table/TeacherCalender"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Prepare() {
  return (
    <div className='prepare'>
    <Grid container spacing={2} pt='3rem'>
        <Grid item xs={12} md={2}>
        
        <ul className='list-of-teacher'>Class List
        <li><Checkbox  defaultChecked /> Augumented Reality</li>
        <li><Checkbox  defaultChecked /> Programming</li>
        <li><Checkbox  defaultChecked /> Data Structures</li>
        <li><Checkbox  defaultChecked /> Machine Learning</li>
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
