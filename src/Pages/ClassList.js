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
    
    <Grid container   spacing={3} className='userData'>
    <Grid item xs={12} md={12}>
    <h3 style={{margin:'0%' ,fontSize:'18px' ,color:'#10101'}}>Class List</h3>
    <Button className='btn-style' onClick={NewClass}>Add Class</Button>
    </Grid>
    {input ?(<Grid item xs={3} md={12} >
    <Classes/>
    <Button className='btn-style' onClick={Submit}>Submit</Button></Grid>)
    :null
  }
    <Grid item xs={3} md={1.7} className='tabelHeading'>
    <p>Class ID</p>
    </Grid>
    <Grid item xs={3} md={1.7} className='tabelHeading'>
    <p>Class Name</p>
    </Grid>
    <Grid item xs={3} md={1.7} className='tabelHeading'>
    <p>University</p>
    </Grid>
    <Grid item xs={3} md={1.7} className='tabelHeading'>
    <p>Session</p>
    </Grid>
    <Grid item xs={3} md={1.7} className='tabelHeading'>
    <p>Created On</p>
    </Grid>
    <Grid item xs={3} md={1.7} className='tabelHeading'>
    <p>Status</p>
    </Grid>
    <Grid item xs={3} md={1.7} className='tabelHeading'>
    <p>Actions</p>
    </Grid>
    <Grid item xs={12} md={12} style={{paddingTop:'0rem'}}>
    <Divider />
    </Grid>
    <Grid item xs={3} md={1.7} className="tabaleData">
    <p >1</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>IT </p>
    </Grid>
    <Grid item xs={3} md={1.7} className="tabaleData">
    <p >University of london</p>
    </Grid>
    <Grid item xs={3} md={1.7} className="tabaleData">
    <p >2020</p>
    </Grid>
    <Grid item xs={3} md={1.7} className="tabaleData">
    <p >12/4/2021</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p className='active-status'>Active</p>
    <CheckCircleIcon className='icon-btn' style={{color:'51B1E1'}}/>
    </Grid>
    <Grid item xs={3} md={1.7}>
    <div className='manage-roles'>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>2</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>BBA</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>University of Lahore</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>2021</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>11/5/2022</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p className='deactive-status'>Non-Active</p>
    <CancelIcon className='icon-btn' style={{color:'#F95F53'}}/>
    </Grid>
    <Grid item xs={3} md={1.7}>
    <div className='manage-roles'>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={1.7} className="tabaleData">
    <p >1</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>IT </p>
    </Grid>
    <Grid item xs={3} md={1.7} className="tabaleData">
    <p >University of london</p>
    </Grid>
    <Grid item xs={3} md={1.7} className="tabaleData">
    <p >2020</p>
    </Grid>
    <Grid item xs={3} md={1.7} className="tabaleData">
    <p >12/4/2021</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p className='active-status'>Active</p>
    <CheckCircleIcon className='icon-btn' style={{color:'51B1E1'}}/>
    </Grid>
    <Grid item xs={3} md={1.7}>
    <div className='manage-roles'>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>2</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>BBA</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>University of Lahore</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>2021</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p>11/5/2022</p>
    </Grid>
    <Grid item xs={3} md={1.7}className="tabaleData">
    <p className='deactive-status'>Non-Active</p>
    <CancelIcon className='icon-btn' style={{color:'#F95F53'}}/>
    </Grid>
    <Grid item xs={3} md={1.7}>
    <div className='manage-roles'>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>

    
    </Grid>

    </div>
  )
}