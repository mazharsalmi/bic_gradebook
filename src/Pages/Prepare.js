import { Grid,Button, Divider } from '@mui/material'
import React from 'react' 
import perepare from "./Parepare.css"
import { useState } from 'react';
import { Modal } from 'antd';
export default function Grades() {
  const [classData, setClassData] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    
    const showModal = () => {
      setIsModalVisible(!isModalVisible);
    };
  
    const Okhandel = () => {
      console.log("hello")
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  return (
    <div className='grades'>
    <Grid container spacing={2}>
        <Grid item xs={12} md={12} style={{justifyContent:'center'}}>
        <div className='student-grades'>
        <h3>Select One Of The Following To Sort</h3>
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
            <th>Action</th>
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
              <td >
              <Button className='showresult' onClick={showModal}>View Result</Button>
              {isModalVisible ?(    <Modal title="Basic Modal" visible={isModalVisible} onOk={Okhandel} onCancel={handleCancel} className='popup1'>
    <p>Class: F16BS IT2016</p>
    <p>Congratulations</p>
    <p>You are Pass</p>
    <p>Your SGPA :3.4</p>
      </Modal>):("")}
      </td>
              </tr>
              
            })}
            <button className='submit' onClick={RemoveArry}>submit</button>
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
