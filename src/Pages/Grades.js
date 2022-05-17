import { Grid,Button, Divider } from '@mui/material'
import React from 'react' 
import grade from "./Grades.css"
import { useState } from 'react';
export default function Grades() {
  const [classData, setClassData] = useState(false);
  const [data ,setData]=useState('');
  const ShowData =()=>{
    setClassData(!classData); }
    const getData=(val)=>
    {
      
      setData(val.target.value);
      if(data >90 && data <=100 ) {
        setData('A+')
        
      }
      else if (data >80 && data <=90) {
        setData('A');
      }
      else if (data >70 && data <=80) {
        setData('B+');
        
      }
    }
    const Data = [
      {
          Sid:'1',
          Sname:'Mazhar iqbal',
          university:'university of london',
          program:'computer',
          section:'2022',
      },
      {
          Sid:'2',
          Sname:'Fahad Ali',
          university:'university of london',
          program:'IT',
          section:'2022'
      },
      {
        Sid:'3',
        Sname:'Sohail Abbas',
        university:'university of london',
        program:'Computer',
        section:'2020'
    },
    {
      Sid:'4',
      Sname:'Ali Ahmad',
      university:'university of london',
      program:'IT',
      section:'2020'
  },
     
    ];
    const [myArray ,setMyArray]=useState(Data);
    const RemoveArry=()=>{
      setMyArray([]);
      setClassData(false);
    }
  return (
    <div className='grades'>
    <Grid container spacing={2}>
        <Grid item xs={12} md={12} style={{justifyContent:'center'}}>
        <div className='student-grades'>
        <h3>Enter Student Grades</h3>
        <div className='data1'>
        <div className='label1'>
        <label>Select University:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>University of London</option>
              <option value="1">University of London</option>
              <option value="2">University of London</option>
              <option value="3">University of London</option>
            </select>
        
        </div>
        <div className='label1'>
        <label>
        Select Program:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>BS Computer</option>
              <option value="1">Bs Physics</option>
              <option value="2">Bs Math</option>
              <option value="3">BSIT</option>
            </select>
        
        </div>
        <div className='label1'>
        <label>
        Select semester:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
        <div className='label1'>
        <label>
        Select Subject:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>Subject</option>
              <option value="1">Math</option>
              <option value="2">Phy</option>
              <option value="3">Eng</option>
            </select>
        
        </div>
        <Button className='sort' onClick={ShowData}>Sort</Button>
        </div>
          
            <Divider style={{marginTop:'1rem'}}/>
            <table className='table'>
            
            
            { classData ? (
           
              <table>
              <tr><th>Student Id</th>
            <th>Student Name</th>
            <th>University</th>
            <th>Program</th>
            <th>Section</th>
            <th>Enter Marks</th>
            <th >Grade</th>
            <th >Comment</th>
            </tr>
            {myArray.map((curElm)=>{
              return <tr>
              <td>{curElm.Sid} </td>
              <td>
              {curElm.Sname} </td>
              <td>
              {curElm.university} </td>
              <td>
              {curElm.program} </td>
              <td>
              {curElm.section} </td>
              <td><input type="number" className='commit' onChange={getData} /></td>
              <td>
              <input type="text" className='commit' value={data}></input>
              </td>
              <td><input type="text" className='commit' /></td>
            
              </tr>
              
            })}
            <button className='submit sort' onClick={RemoveArry}>submit</button>
            </table>
            ):
            ("")
          }

            
            </table>


        </div>
        </Grid>
        </Grid>
    </div>
  )
}
