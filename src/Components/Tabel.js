import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from "@mui/material/Checkbox";
import Avatar from '@mui/material/Avatar';
import table from "../Components/Table.css";
import Slider from '@mui/material/Slider';

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Checkbox/>CUSTOMER</TableCell>
            <TableCell >COMPONY</TableCell>
            <TableCell >PROGRESS</TableCell>
            <TableCell >STATUS</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell style={{display:'flex' ,alignItems:'center'}} className='aa'><Checkbox style={{margin:'5px'}}/><Avatar style={{margin:'5px'}}/>
            <div className='name'>
            <h3>Brandon Washington</h3>
            <p>Head admin</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <div className='name'>
            <h3>Company name 1</h3>
            <p>company type</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <Slider
            aria-label="Always visible"
            defaultValue={80}
            step={10}
            
            valueLabelDisplay="on"
          /></TableCell>
            <TableCell ><p className='finsh'>	In progress</p></TableCell>
        
          </TableRow>
          <TableRow>
            <TableCell style={{display:'flex' ,alignItems:'center'}} className='aa'><Checkbox style={{margin:'5px'}}/><Avatar style={{margin:'5px'}}/>
            <div className='name'>
            <h3>Brandon Washington</h3>
            <p>Head admin</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <div className='name'>
            <h3>Company name 1</h3>
            <p>company type</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <Slider
            aria-label="Always visible"
            defaultValue={80}
            step={10}
            
            valueLabelDisplay="on"
          /></TableCell>
            <TableCell ><p className='finsh'>	In progress</p></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{display:'flex' ,alignItems:'center'}} className='aa'><Checkbox style={{margin:'5px'}}/><Avatar style={{margin:'5px'}}/>
            <div className='name'>
            <h3>Brandon Washington</h3>
            <p>Head admin</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <div className='name'>
            <h3>Company name 1</h3>
            <p>company type</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <Slider
            aria-label="Always visible"
            defaultValue={80}
            step={10}
            
            valueLabelDisplay="on"
          /></TableCell>
            <TableCell ><p className='finsh'>	In progress</p></TableCell>
        
          </TableRow>
          <TableRow>
            <TableCell style={{display:'flex' ,alignItems:'center'}} className='aa'><Checkbox style={{margin:'5px'}}/><Avatar style={{margin:'5px'}}/>
            <div className='name'>
            <h3>Brandon Washington</h3>
            <p>Head admin</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <div className='name'>
            <h3>Company name 1</h3>
            <p>company type</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <Slider
            aria-label="Always visible"
            defaultValue={80}
            step={10}
            
            valueLabelDisplay="on"
          /></TableCell>
            <TableCell ><p className='finsh'>	In progress</p></TableCell>
        
          </TableRow>
          <TableRow>
            <TableCell style={{display:'flex' ,alignItems:'center'}} className='aa'><Checkbox style={{margin:'5px'}}/><Avatar style={{margin:'5px'}}/>
            <div className='name'>
            <h3>Brandon Washington</h3>
            <p>Head admin</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <div className='name'>
            <h3>Company name 1</h3>
            <p>company type</p>
            </div>
            </TableCell>
            <TableCell style={{paddingLeft:'0rem'}}>
            <Slider
            aria-label="Always visible"
            defaultValue={80}
            step={10}
            
            valueLabelDisplay="on"
          /></TableCell>
            <TableCell ><p className='finsh'>	In progress</p></TableCell>
        
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
