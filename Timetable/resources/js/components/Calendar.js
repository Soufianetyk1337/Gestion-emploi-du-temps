import React, { Component } from "react";
import ReactDOM from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "../../sass/main.scss";
import { getRelevantEvents } from "@fullcalendar/core";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //calendarWeekends: true,
            calendarEvents: [],
            seance:'',
            professeur:''
        };
    }
    render() {
        return (
            <div className="calendar">
                <div className="calendar-app">
                    <FullCalendar
                        defaultView="timeGridDay"
                        header={{
                            left: "prev,next today",
                            center: "title",
                            right:
                                "timeGridDay,timeGridWeek,dayGridMonth,listWeek"
                        }}
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            ListPlugin
                        ]}
                        selectable="true"
                        editable="true"
                        eventLimit="true"
                        dateClick={this.handleDateClick}
                        events={ this.state.calendarEvents }
                    />
                    <div id="addE"></div>
                </div>
            </div>
        );
    }
    handleDateClick = arg => {
      console.log(arg);
        if (localStorage.getItem('formData')) {
          var myData = localStorage.getItem('formData');
          myData = JSON.parse(myData);
          var seance = myData.seance +" | " + myData.professeur;
            this.setState({
                calendarEvents: this.state.calendarEvents.concat({
                    title: seance,
                    start: arg.dateStr,
                    allDay: arg.allDay
                    
                })
            });
        }
        console.log(this.state.calendarEvents);
    };
}

export default Calendar;

if (document.getElementById("root")) {
    ReactDOM.render(<Calendar />, document.getElementById("root"));
}
