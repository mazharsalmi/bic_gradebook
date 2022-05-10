import { Button, Grid ,Select} from '@mui/material'
import React from 'react'
import classes from "../Pages/Classes.css"
import GradeEnter from "../Table/GradeEnter"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function Classes() {
  return (
    <div className='classes'>
    <div className='class-list'>
    <h4> Class List</h4>
    <h2> Create New Class</h2>
    <Grid container spacing={2} >
    <Grid item xs={12} md={6} className='addclass'>First Name: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <TextField fullWidth  id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>Last Name: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <TextField fullWidth  id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>Gender: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <Select fullWidth  id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>Date of Birth: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <TextField fullWidth label='dd/mm/yyyy' id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>Category: 
  <Box
  sx={{
    width: 500,
    maxWidth: '70%',
  }}
>
  <Select fullWidth   id="fullWidth" />
</Box></Grid>
<Grid item xs={12} md={6} className='addclass'>Membership: 
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue="Free"
name="radio-buttons-group"

>
<Box style={{display:'flex', justifyContent:'start !important'}}>
<FormControlLabel value="Free" control={<Radio />} label="Free" />
<FormControlLabel  value="professional"control={<Radio />} label="Professional" />
</Box>
</RadioGroup>
  
</Grid>
<Grid item xs={12} md={6} className='addclass'>Address 1: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <TextField fullWidth  id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>State: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <TextField fullWidth  id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>Address 2: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <TextField fullWidth  id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>Postcode: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <TextField fullWidth  id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>City: 
    <Box
    sx={{
      width: 500,
      maxWidth: '70%',
    }}
  >
    <TextField fullWidth  id="fullWidth" />
  </Box></Grid>
  <Grid item xs={12} md={6} className='addclass'>
  Country: 
  <Box
  sx={{
    width: 500,
    maxWidth: '70%',
  }}
>
  <Select fullWidth  id="fullWidth" />
</Box></Grid>
    
    </Grid>
    </div>
   <div className='classSelect'>
   <div className='leftsideofclass'>
   <h3>Select 2</h3>
   <p>Single select box using select 2</p> 
    <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >
    <Select fullWidth  id="fullWidth" />
  </Box>
  <p>Multiple select using select 2</p>
  <Box
  sx={{
    width: 500,
    maxWidth: '100%',
  }}
>
  <TextField fullWidth  id="fullWidth" />
</Box>
   </div>
   <div className='rightsideofclass'>
   <h3>Typeahead</h3>
   <p>A simple suggestion engine</p>
   <div className='basic'>
   <div className='lbasic'>
   <label htmlFor="">Basic</label>
   <TextField fullWidth  id="fullWidth" />
   </div>
   <div className='rbasic'>
   <label htmlFor="">Bloodhound</label>
   <TextField fullWidth  id="fullWidth" /></div>
   </div>
   </div>
   </div>
    </div>
    
    
  )
}
