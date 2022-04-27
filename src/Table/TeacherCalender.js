import React,{useState} from 'react'
import {Col,Row} from 'antd'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { Modal, Button } from 'antd';

export default function TeacherCalender() {
  const [isModalVisible, setIsModalVisible] = useState(false);


    const handleSelect = (info) => {
      showModal();
      
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
      <>
    <Col span={20}>
    <h1>FullCalendar</h1>
    <FullCalendar
  plugins={[ dayGridPlugin ,interactionPlugin ]}
  initialView="dayGridMonth"
  weekends={true}
  selectable={true}
  select={handleSelect}
  events={[
    { title: 'Lecture', date: '2022-04-04' },
    { title: 'lecture', date: '2022-04-05' }
  ]}
/>
    </Col>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={Okhandel} onCancel={handleCancel} className='popup'>
    <p>Class: F16BS IT2016</p>
    <p>Subject:IT</p>
    <p>Room:23</p>
      </Modal>
    </>
    
  )
}
