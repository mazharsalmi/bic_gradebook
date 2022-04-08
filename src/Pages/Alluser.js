import React from 'react'
import alluser from "../Pages/Alluser.css"
import {Checkbox ,Divider} from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

export default function Alluser() {
  return (
    <div className='alluser'>
    <div className='alluser-data'>
    <h4>Todo List</h4>
    <div className='data-enter'>
    <p><Checkbox />meeting with Alish</p>
    <CloseRoundedIcon/>
    

    </div>
    <Divider/>
    <div className='add-data'>
    <p>Add New Task</p>
    <ArrowDownwardRoundedIcon/>
    </div>
    </div>
    </div>
  )
}
