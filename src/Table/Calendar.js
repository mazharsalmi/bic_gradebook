
import React ,{useState}from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { Modal} from 'antd';

export default function Calendar() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelect = (info) => {
    showModal();
    
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const Okhandel = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="container-fluid">
      <h1>Fullcalendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin,interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        selectable={true}
        select={handleSelect}
        events={[
          { title: "event 1", date: "2022-26-04" },
          { title: "event 2", date: "2022-25-04" },
  
        ]}
      />
      <Modal title="Basic Modal" visible={isModalVisible} onOk={Okhandel} onCancel={handleCancel} className='popup'>
      <p>Class: F16BS IT2016</p>
      <p>Subject:IT</p>
      <p>Room:23</p>
    </Modal>
    </div>
  );
}
