import React from 'react'
import { Button } from '@mui/material'
import GradeEnter from "../Table/GradeEnter"

export default function Subject() {
  return (
    <div className='classes'>
    <div className='class-list'>
    <h4> Class Subject</h4>
    <Button variant='Outline'> Create New Subject</Button>
    <GradeEnter/>
    </div>
    </div>
  )
}
