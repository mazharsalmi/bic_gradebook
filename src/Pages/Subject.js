import React, { useState } from 'react'
import usergroup  from "../Pages/UserGroup.css"
import {Button, Divider, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Classes from "./Classes";
import { Link } from 'react-router-dom';
import InputClass from './InputClass';
import grad from "../Pages/Grades.css"



export default function UserGroup() {
  const [input, setInput]= useState(false);
  const NewClass = ()=>{
    setInput(!input);

  }
  const Submit =()=>{
    setInput(false)
  }
  return (
    <div className='usergroup'>
    <div className='topList'>
    <h3 style={{margin:'0%' ,fontSize:'18px' ,color:'#10101'}}>Class List</h3>
    <Button className='btn-style' onClick={NewClass}>Add Subjects</Button></div>
    <table className='table'>
    {input ?(<Grid item xs={3} md={12} >
    <Classes/>
    <Button className='btn-style' onClick={Submit}>Submit</Button></Grid>)
    :null
  }
  <table>
  <tr>
  <th>Class ID</th>
  <th>Class Name</th>
  <th>University</th>
  <th>Session</th>
  <th>Created On</th>
  <th>Status</th>
  <th>Action</th>
  </tr>
  <tr>
  <td>1</td>
  <td>Mazhar</td>
  <td>University of London</td>
  <td>2020</td>
  <td>2/03/2020</td>
  <td><p className='active-status'>Active</p>
  <CheckCircleIcon className='icon-btn' style={{color:'51B1E1'}}/>
  </td>
  <td><div className='manage-roles'>
  <ManageAccountsIcon className='icon-btn'/>
  <Button>Delete</Button>
  <DeleteIcon className='icon-btn' style={{color:'red'}}/>
  </div></td></tr>
  <tr>
  <td>1</td>
  <td>Mazhar</td>
  <td>University of London</td>
  <td>2020</td>
  <td>2/03/2020</td>
  <td>    <p className='deactive-status'>Non-Active</p>
  <CancelIcon className='icon-btn' style={{color:'#F95F53'}}/>
</td>
  <td>
  <div className='manage-roles'>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
   </td></tr>
  </table>
  </table>
    </div>
  )
}
