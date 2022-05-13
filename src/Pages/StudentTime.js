import { Button } from '@material-ui/core'
import React from 'react'
import './StudentTime.css'
export default function StudentTime() {
  return (
    <div className='studenttimtable'>
    <div className='select-class'>
    <div className='label2'>
        <label>
        Fall:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>FALL</option>
              <option value="1">2020</option>
              <option value="2">2021</option>
              <option value="3">2022</option>
            </select>
        </div>
        <div className='label2'>
        <label>
        Program:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
              id='select'
            >
              <option selected>Program</option>
              <option value="1">IT</option>
              <option value="2">CSS</option>
              <option value="3">SI</option>
            </select>
        </div>
        <div className='label2'>
        <label>
        Class:</label>
        <select
              class="form-select"
              aria-label="Default select example"
              className="select"
            >
              <option selected>Class</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
            </select>
        </div>
        <Button className='sort' id='sort'>Select</Button>
        </div>
        <div style={{overflowX:'auto'}}>
        <table className='timetable' >
        <tr id='border'>
        <th id='border'></th>
        <th id='border'>9AM TO 11AM</th>
        <th id='border'>11AM TO 01PM</th>
        <th id='border'>01PM TO 3PM</th>
        <th id='border'>03PM TO 5PM</th>
        </tr>
        <tr id='border'>
        <td id='border'>Monday</td>
        <td id='border'><div className='data-in'>
        <p>Room:1</p>
        <p>Sub:Math</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:2</p>
        <p>Sub:Phy</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:3</p>
        <p>Sub:CS</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:4</p>
        <p>Sub:IT</p></div></td>
        </tr>
        <tr id='border'>
        <td id='border'>Tuesday</td>
        <td id='border'><div className='data-in'>
        <p>Room:1</p>
        <p>Sub:Math</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:2</p>
        <p>Sub:Phy</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:3</p>
        <p>Sub:CS</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:4</p>
        <p>Sub:IT</p></div></td>
        </tr>
        <tr id='border'>
        <td id='border'>Thursday</td>
        <td id='border'><div className='data-in'>
        <p>Room:1</p>
        <p>Sub:Math</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:2</p>
        <p>Sub:Phy</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:3</p>
        <p>Sub:CS</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:4</p>
        <p>Sub:IT</p></div></td>
        </tr>
        <tr id='border'>
        <td id='border'>Friday</td>
        <td id='border'><div className='data-in'>
        <p>Room:1</p>
        <p>Sub:Math</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:2</p>
        <p>Sub:Phy</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:3</p>
        <p>Sub:CS</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:4</p>
        <p>Sub:IT</p></div></td>
        </tr>
        <tr id='border'>
        <td id='border'>Saturday</td>
        <td id='border'><div className='data-in'>
        <p>Room:1</p>
        <p>Sub:Math</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:2</p>
        <p>Sub:Phy</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:3</p>
        <p>Sub:CS</p></div></td>
        <td id='border'><div className='data-in'>
        <p>Room:4</p>
        <p>Sub:IT</p></div></td>
        </tr>
        </table></div>
    </div>
  )
}
