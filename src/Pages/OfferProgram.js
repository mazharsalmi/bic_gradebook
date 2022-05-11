import React from 'react'
import usergroup  from "../Pages/UserGroup.css"
import {Button, Divider, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
export default function OfferProgram() {
  return (
    <div className='usergroup'>
    
    <Grid container   spacing={3} className='userData'>
    <Grid item xs={12} md={12}>
    <h3 style={{margin:'0%' ,fontSize:'18px' ,color:'#10101'}}> Offer Program </h3>
    <Button className='btn-style'>Add New</Button>
    </Grid>
    <Grid item xs={3} md={2.4} className='tabelHeading'>
    <p>Program ID</p>
    </Grid>
    <Grid item xs={3} md={2.4} className='tabelHeading'>
    <p>Program Name</p>
    </Grid>
    <Grid item xs={3} md={2.4} className='tabelHeading'>
    <p>Offering University	</p>
    </Grid>
   
    <Grid item xs={3} md={2.4} className='tabelHeading'>
    <p>Type</p>
    </Grid>
    <Grid item xs={3} md={2.4} className='tabelHeading'>
    <p>Actions</p>
    </Grid>
    <Grid item xs={12} md={12} style={{paddingTop:'0rem'}}>
    <Divider />
    </Grid>
    <Grid item xs={3} md={2.4} className="tabaleData">
    <p >CS201</p>
    </Grid>
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p>BS Computer Sciences</p>
    </Grid>
    <Grid item xs={3} md={2.4} className="tabaleData">
    <p >University of london</p>
    </Grid>
    
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p className='active-status'>Semester</p>
    <CheckCircleIcon className='icon-btn' style={{color:'51B1E1'}}/>
    </Grid>
    <Grid item xs={3} md={2.4}>
    <div className='manage-roles'>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p>CS203</p>
    </Grid>
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p>BS Computer Sciences</p>
    </Grid>
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p>University of Lahore</p>
    </Grid>
    
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p className='deactive-status'>Annual</p>
    <CancelIcon className='icon-btn' style={{color:'#F95F53'}}/>
    </Grid>
    <Grid item xs={3} md={2.4}>
    <div className='manage-roles'>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={2.4} className="tabaleData">
    <p >CS201</p>
    </Grid>
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p>BS Computer Sciences</p>
    </Grid>
    <Grid item xs={3} md={2.4} className="tabaleData">
    <p >University of london</p>
    </Grid>
    
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p className='active-status'>Semester</p>
    <CheckCircleIcon className='icon-btn' style={{color:'51B1E1'}}/>
    </Grid>
    <Grid item xs={3} md={2.4}>
    <div className='manage-roles'>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p>CS203</p>
    </Grid>
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p>BS Computer Sciences</p>
    </Grid>
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p>University of Lahore</p>
    </Grid>
    
    <Grid item xs={3} md={2.4}className="tabaleData">
    <p className='deactive-status'>Annual</p>
    <CancelIcon className='icon-btn' style={{color:'#F95F53'}}/>
    </Grid>
    <Grid item xs={3} md={2.4}>
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
