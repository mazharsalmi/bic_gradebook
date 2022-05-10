import React from 'react'
import usergroup  from "../Pages/UserGroup.css"
import {Button, Divider, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
export default function UserGroup() {
  return (
    <div className='usergroup'>
    
    <Grid container   spacing={3} className='userData'>
    <Grid item xs={12} md={12}>
    <h3 style={{margin:'0%' ,fontSize:'18px' ,color:'#10101'}}>User Groups List</h3>
    </Grid>
    <Grid item xs={3} md={2.5} className='tabelHeading'>
    <p>Group ID</p>
    </Grid>
    <Grid item xs={3} md={2.5} className='tabelHeading'>
    <p>Group Name</p>
    </Grid>
    <Grid item xs={3} md={2.5} className='tabelHeading'>
    <p>Status</p>
    </Grid>
    <Grid item xs={3} md={4.5} className='tabelHeading'>
    <p>Actions</p>
    </Grid>
    <Grid item xs={12} md={12} style={{paddingTop:'0rem'}}>
    <Divider />
    </Grid>
    <Grid item xs={3} md={2.5} className="tabaleData">
    <p >1</p>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p>IT Heads</p>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p className='active-status'>Active</p>
    <CheckCircleIcon className='icon-btn' style={{color:'51B1E1'}}/>
    </Grid>
    <Grid item xs={3} md={4.5}>
    <div className='manage-roles'>
    <Button>Manage Role</Button>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p>2</p>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p>Teachers/Faculty</p>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p className='deactive-status'>Non-Active</p>
    <CancelIcon className='icon-btn' style={{color:'#F95F53'}}/>
    </Grid>
    <Grid item xs={3} md={4.5}>
    <div className='manage-roles'>
    <Button>Manage Role</Button>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p>3</p>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p>Administrators</p>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p className='active-status'>Active</p>
    <CheckCircleIcon className='icon-btn'style={{color:'51B1E1'}}/>
    </Grid>
    <Grid item xs={3} md={4.5}>
    <div className='manage-roles'>
    <Button>Manage Role</Button>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p>4</p>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p>Custom Users</p>
    </Grid>
    <Grid item xs={3} md={2.5}className="tabaleData">
    <p className='deactive-status'>Non-Active</p>
    <CancelIcon className='icon-btn' style={{color:'#F95F53'}}/>
    </Grid>
    <Grid item xs={3} md={4.5}>
    <div className='manage-roles'>
    <Button>Manage Role</Button>
    <ManageAccountsIcon className='icon-btn'/>
    <Button>Delete</Button>
    <DeleteIcon className='icon-btn' style={{color:'red'}}/>
    </div>
    </Grid>
    </Grid>

    </div>
  )
}
