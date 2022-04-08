import { Button } from '@mui/material'
import React from 'react'
import classes from "../Pages/Classes.css"
import GradeEnter from "../Table/GradeEnter"
export default function Classes() {
  return (
    <div className='classes'>
    <div className='class-list'>
    <h4> Class List</h4>
    <Button variant='Outline'> Create New Class</Button>
    <GradeEnter/>
    </div>
    </div>
  )
}
