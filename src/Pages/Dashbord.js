import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import dashbord from "../Pages/Dashbord.css"
import Divider from '@mui/material/Divider';
import {Grid ,item} from "@mui/material"

export default function Dashbord() {
  return (
    <div className='data'>
    <div className='feacter'>
          <button><ShareIcon/>Share</button>
          <button><PrintIcon/>Print</button>
          <button><SendToMobileIcon/>Export</button>
          </div>
          <Divider/>
          <Grid container spacing={2}>
       <Grid item xs={2} md={2}>
       <div className='prestange'>
       <p>Total Students</p>
       <h1>32.53%</h1>
       <p>-0.5%</p>
       </div>
       </Grid>
       <Grid item xs={2} md={2}>
       <div className='prestange'>
       <p>Total Students</p>
       <h1>32.53%</h1>
       <p>-0.5%</p>
       </div>
       </Grid>
       <Grid item xs={2} md={2}>
       <div className='prestange'>
       <p>Total Students</p>
       <h1>32.53%</h1>
       <p>-0.5%</p>
       </div>
       </Grid>
       <Grid item xs={2} md={2}>
       <div className='prestange'>
       <p>Total Students</p>
       <h1>32.53%</h1>
       <p>-0.5%</p>
       </div>
       </Grid>
       <Grid item xs={2} md={2}>
       <div className='prestange'>
       <p>Total Students</p>
       <h1>32.53%</h1>
       <p>-0.5%</p>
       </div>
       </Grid>
       <Grid item xs={2} md={2}>
       <div className='prestange'>
       <p>Total Students</p>
       <h1>32.53%</h1>
       <p>-0.5%</p>
       </div>
       </Grid>
       <Grid item xs={4} md={4}>
       <div className='total-student'>
       <p>Total Students</p>
       <h1>32.53%</h1>
       <p>-0.5%</p>
       </div>
       </Grid>
  </Grid>
    </div>
  )
}
