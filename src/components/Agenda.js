import React from "react";
import Link from "gatsby-link";

const Agenda = () => (
  <section id="agenda">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Agenda</h1>
      </div>
    </div>
    <div className="row">
      <div className="text">
        <div id="agenda-timeline">
          <div id="agenda-timeline-left">
            <TimelineHeader name="Day 1" />
            <TimelineSection
              name="Registration"
              time="8:00 - 9:00 AM"
              body="Pick up your badges"
            />
            <TimelineSection
              name="Welcome"
              time="9:00 - 9:15 AM"
              body=""
            />
            <TimelineSection
              name="Keynote"
              time="9:15 - 10:00 AM"
              body="Out of industry Keynote speaker"
            />
            <TimelineSection
              name="Sponsors"
              time="10:00 - 10:10 AM"
              body=""
            />
            <TimelineSection
              name="Talk 2"
              time="10:10 - 10:40 AM"
              body=""
            />
            <TimelineSection
              name="Break"
              time="10:40 - 11:00 AM"
              body="Tea, Coffee"
            />
            <TimelineSection
              name="Open Spaces Brainstorm"
              time="11:00 - 11:15 AM"
              body="Present your ideas for open spaces"
            />
            <TimelineSection
              name="Ignites"
              time="11:15 - 11:45 AM"
              body="Quick, to the point talks"
            />
            <TimelineSection
              name="Sponsors"
              time="11:45 - 11:55 AM"
              body=""
            />
            <TimelineSection
              name="Lunch"
              time="11:55 - 12:55 PM"
              body="Catered Lunch"
            />
            <TimelineSection
              name="Talk 3"
              time="12:55 - 13:25 PM"
              body=""
            />
            <TimelineSection
              name="Sponsors"
              time="13:25 - 13:35 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 1"
              time="13:35 - 14:20 PM"
              body=""
            />
            <TimelineSection
              name="Afternoon Tea"
              time="14:20 - 14:50 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 2"
              time="14:50 - 15:35 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 3"
              time="15:35 - 16:20 PM"
              body=""
            />
            <TimelineSection
              name="Close Day & Logistics"
              time="16:20 - 16:50 PM"
              body=""
            />
            <TimelineSection
              name="Evening Social Event"
              time="19:00 PM"
              body="Fun & Games at NEX"
            />
          </div>
          <div id="agenda-timeline-right">
            <TimelineHeader name="Day 2" />
            <TimelineSection
              name="Registration"
              time="8:00 - 9:00 AM"
              body="Pick up your badges"
            />
            <TimelineSection
              name="Welcome"
              time="9:00 - 9:15 AM"
              body=""
            />
            <TimelineSection
              name="Keynote"
              time="9:15 - 10:00 AM"
              body="Inside industry Keynote speaker"
            />
            <TimelineSection
              name="Sponsors"
              time="10:00 - 10:10 AM"
              body=""
            />
            <TimelineSection
              name="Talk 2"
              time="10:10 - 10:40 AM"
              body=""
            />
            <TimelineSection
              name="Break"
              time="10:40 - 11:00 AM"
              body="Tea, Coffee"
            />
            <TimelineSection
              name="Open Spaces Brainstorm"
              time="11:00 - 11:15 AM"
              body="Present your ideas for open spaces"
            />
            <TimelineSection
              name="Talk 3"
              time="11:15 - 11:45 AM"
              body=""
            />
            <TimelineSection
              name="Sponsors"
              time="11:45 - 11:55 AM"
              body=""
            />
            <TimelineSection
              name="Lunch"
              time="11:55 - 12:55 PM"
              body="Catered Lunch"
            />
            <TimelineSection
              name="Talk 4"
              time="12:55 - 13:25 PM"
              body=""
            />
            <TimelineSection
              name="Sponsors"
              time="13:25 - 13:35 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 1"
              time="13:35 - 14:20 PM"
              body=""
            />
            <TimelineSection
              name="Afternoon Tea"
              time="14:20 - 14:50 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 2"
              time="14:50 - 15:35 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 3"
              time="15:35 - 16:20 PM"
              body=""
            />
            <TimelineSection
              name="Conference Close"
              time="16:20 - 16:50 PM"
              body=""
            />
          </div>
        </div>
        <p>
          We will be announcing speakers closer to the date - follow us on <a href="https://www.twitter.com/devopsdaysnewy">Twitter</a> for up-to-date announcements!
        </p>
      </div>
    </div>
  </section>
);

const TimelineHeader = (props) => (
  <section className="timeline-header">
    <h3>{props.name}</h3>
  </section>
);

const TimelineSection = (props) => (
  <section className="timeline-section-header">
    <h4>{props.name}</h4>
    <h5>{props.time}</h5>
    <p>{props.body}</p>
  </section>
);

export default Agenda;
