import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
import { useHistory } from "react-router-dom";

// import events from "./events";

export default function EventDetail() {
  let history = useHistory();

  return (
    <div className="App">
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        plugins={[dayGridPlugin]}
        // plugins={[dayGridPlugin, timeGridPlugin]}
        // events={events}
        eventClick={
          function(arg){
           let t = arg.event.title
           console.log(t);
           history.push('eventdetail/'+{t})
          }
        }
        events={[
          { title: 'event1', date: '2021-06-01' },
          { title: 'event2', date: '2021-06-22'}
        ]}
      />
    </div>
  );
}