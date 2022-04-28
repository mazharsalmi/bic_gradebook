import React from 'react'
import usergroup  from "../Pages/UserGroup.css"
import {Button, Divider, Grid } from '@mui/material'
export default function UserGroup() {
  return (
    <div className='usergroup'>
    
    <Grid container spacing={2} className='userData'>
    <Grid item xs={12} md={12}>
    <h3 style={{margin:'0%'}}>User Groups List</h3>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>Group ID</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>Group Name</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>Status</p>
    </Grid>
    <Grid item xs={12} md={6}>
    <p>Actions</p>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>1</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>IT Heads</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p className='active-status'>Active</p>
    </Grid>
    <Grid item xs={12} md={6}>
    <div className='manage-roles'>
    <Button>Manage Role</Button>
    <Button>Delete</Button>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>2</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>Teachers/Faculty</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p className='deactive-status'>Non-Active</p>
    </Grid>
    <Grid item xs={12} md={6}>
    <div className='manage-roles'>
    <Button>Manage Role</Button>
    <Button>Delete</Button>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>3</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>Administrators</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p className='active-status'>Active</p>
    </Grid>
    <Grid item xs={12} md={6}>
    <div className='manage-roles'>
    <Button>Manage Role</Button>
    <Button>Delete</Button>
    </div>
    </Grid>
    <Grid item xs={12} md={12}>
    <Divider/>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>4</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p>Custom Users</p>
    </Grid>
    <Grid item xs={12} md={2}>
    <p className='deactive-status'>Non-Active</p>
    </Grid>
    <Grid item xs={12} md={6}>
    <div className='manage-roles'>
    <Button>Manage Role</Button>
    <Button>Delete</Button>
    </div>
    </Grid>
    </Grid>

    </div>
  )
}
