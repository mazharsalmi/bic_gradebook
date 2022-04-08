import React from 'react'
import parepare  from "../Pages/Parepare.css"
import {Grid ,Checkbox } from "@mui/material"
import Calendar from '../Table/Calendar'

export default function Prepare() {
  return (
    <div className='prepare'>
    <Grid container spacing={2} pt='3rem'>
        <Grid item xs={4} md={4}>
        <div className='left-side-calendar'>
        <p>Deciphering Marketing Lingo For Small Business Owners
        </p>
        <p><span style={{color:'#737F8B '}}>Georgia</span></p>
        </div>
        <div className='left-side-calendar'>
        <p>Deciphering Marketing Lingo For Small Business Owners
        </p>
        <p><span style={{color:'#737F8B '}}>Georgia</span></p>
        </div>
        <div className='left-side-calendar'>
        <p>Deciphering Marketing Lingo For Small Business Owners
        </p>
        <p><span style={{color:'#737F8B '}}>Georgia</span></p>
        </div>
        <div className='Filter-board'>
        <p>Filter board</p>
        <div className='cheack-box'>
        <Checkbox defaultChecked />
        <p>Project Board</p>
        </div>
        <div className='cheack-box'>
        <Checkbox defaultChecked />
        <p>Project Board</p>
        </div>
        <div className='cheack-box'>
        <Checkbox defaultChecked />
        <p>Project Board</p>
        </div>
        <div className='cheack-box'>
        <Checkbox defaultChecked />
        <p>Project Board</p>
        </div>
        </div>
        </Grid>
        
        <Grid item xs={8} md={8}>
        <div className='right-side-calendar'>
        <Calendar/>
        </div>
        </Grid>
        
        </Grid>
    </div>
  )
}
