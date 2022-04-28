
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!


export default function Calendar() {
  return (
    <div className="container-fluid">
      <h1>Fullcalendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        
        events={[
          { title: "event 1", date: "2022-04-28" },
          { title: "event 2", date: "2022-04-29" },
  
        ]}
      />
     
    </div>
  );
}
