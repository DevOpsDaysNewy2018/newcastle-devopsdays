import React from "react";
import Link from "gatsby-link";

const Agenda = () => (
  <section id="agenda">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Agenda</h1>
        <p className="centered bigger">Click or tap through for more information on a talk!</p>
      </div>
    </div>
    <div className="row">
      <div className="text">
        <div id="agenda-timeline">
          <div className="agenda-timeline-day">
            <TimelineHeader name="Day 1" />
            <TimelineSection
              name="Registration"
              time="8:00 - 9:00"
            />
            <TimelineSection
              name="Welcome"
              time="9:00 - 9:20"
            />

            <TimelineSection
              name="Keynote"
              speakers="David McRaney"
              speakerId="david-mcraney"
              time="9:20 - 10:05"
            />

            <TimelineSection
              name="Sponsors"
              time="10:05 - 10:15"
              body=""
            />
            <TimelineSection
              name="Four lessons learnt from Microsoft's DevOps Transformation!"
              speakers="Anthony Borton"
              speakerId="anthony-borton"
              time="10:15 - 10:45"
              body=""
            />
            <TimelineSection
              name="Break"
              time="10:45 - 11:05"
              body="Tea, Coffee"
            />
            <TimelineSection
              name="Open Spaces Brainstorm"
              time="11:05 - 11:20"
              body="Present your ideas for open spaces"
            />
            <TimelineSection
              name="Agile Chatbots"
              speakers="Shilpa Cheruvu, Jemimah Irvin & Hailey Martin"
              speakerId="shilpa-cheruvu-jemimah-irvin-hailey-martin"
              time="11:20 - 11:50"
            />
            <TimelineSection
              name="Lunch"
              time="11:50 - 12:55"
              body="Catered Lunch"
            />
            {/*<TimelineSection
              name="Ignite Talks"
              time="12:55 - 13:25"
              body="Molly Rowe, KJ Tsanaktsidis, Laughing Mind, Matthew Murphy, Garth Kidd"
            />*/}
            <section className="timeline-section">
              <p className="time">12:55 - 13:25</p>
              <div><h4>Ignite Talks</h4></div>
              <ul>
                <li><a href="/speakers#molly-rowe">Molly Rowe</a>
                  - Distributed Culture: from beer to babies and back again</li>
                <li><a href="/speakers#kj-tsanaktsidis">KJ Tsanaktsidis</a>
                  - Continuous profiling for Go applications: how it helped us fix problems we didn’t know we had</li>
                <li><a href="/speakers#laughing-mind">Brian Hill</a>
                  - FeedMe! The rise of DigitalHumans and DevOps implications</li>
                <li><a href="/speakers#matthew-murphy">Matthew Murphy</a>
                  - Sidecars for everyone</li>
                <li><a href="/speakers#garth-kidd">Garth Kidd</a>
                  - Unicorn tools; a safety guide for regular ponies</li>
                <li><a href="/speakers#sandor-agafonoff">Sandor Agafonoff</a>
                  - Stability and Innovation with Event-driven Architecture</li>
              </ul>
            </section>
            <TimelineSection
              name="Sponsors"
              time="13:25 - 13:35"
              body=""
            />
            <TimelineSection
              name="From A and B to ~150 Microservices, The Journey and Learnings"
              speakers="Geshan Manandhar"
              speakerId="geshan-manandhar"
              time="13:35 - 14:20"
              body=""
            />
            <TimelineSection
              name="Open Space Intro"
              time="14:20 - 14:35"
              body=""
            />
            <TimelineSection
              name="Afternoon Tea"
              time="14:35 - 15:05"
              body=""
            />
            {/* <TimelineSection
              name="Open Space 1"
              time="15:05 - 15:45"
              body=""
            /> */}
            <section className="timeline-section">
              <p className="time">15:05 - 15:45</p>
              <div><h4>Open Space 1</h4></div>
              <ul>
                <li>1) How to collaborate across distributed teams, tools &amp; techniques</li>
              </ul>
              <ul>
                <li>2) Serverless, No-Ops?</li>
              </ul>
              <ul>
                <li>3) How to train people in DevOps</li>
              </ul>
              <ul>
                <li>4) A chat about measuring DevOps - When is the automation done?</li>
              </ul>
            </section>
            {/*<TimelineSection
              name="Open Space 2"
              time="15:45 - 16:30"
              body=""
            /> */}
            <section className="timeline-section">
              <p className="time">15:45 - 16:30</p>
              <div><h4>Open Space 2</h4></div>
              <ul>
                <li>1) Patterns vs. Freedom</li>
              </ul>
              <ul>
                <li>2) Leadership and management in a DevOps world</li>
              </ul>
              <ul>
                <li>3) Shifting testing left + test automation</li>
              </ul>
              <ul>
                <li>4) Hybrid cloud architecture - challenges faced and solutions</li>
              </ul>
            </section>
            {/* <TimelineSection
              name = "Open Space 3"
              time="16:30 - 17:00"
              body=""
            /> */}
            <section className="timeline-section">
              <p className="time">16:30 - 17:00</p>
              <div><h4>Open Space 3</h4></div>
              <ul>
                <li>1) DevSecOps and how teams are shifting left on DevOps</li>
              </ul>
              <ul>
                <li>2) Running stateful DBs in the cloud</li>
              </ul>
              <ul>
                <li>3) Bringing #Newcastle tech community together</li>
              </ul>
              <ul>
                <li>4) Unconscious bias affecting orgs</li>
              </ul>
            </section>
            <TimelineSection
              name="Closing Remarks"
              time="17:00 - 17:10"
              body=""
            />
            <TimelineSection
              name="Evening Social Event"
              time="19:00 - 22:00"
              body="Fun & Games at NEX"
            />

          </div>
          <div className="agenda-timeline-day">
            <TimelineHeader name="Day 2" />
            <TimelineSection
              name="Registration"
              time="8:00 - 9:00"
            />
            <TimelineSection
              name="Welcome"
              time="9:00 - 9:20"
              body=""
            />
            <TimelineSection
              name="Keynote"
              speakers="Aurynn Shaw"
              speakerId="aurynn-shaw"
              time="9:20 - 10:05"
              body=""
            />
            <TimelineSection
              name="Sponsors"
              time="10:05 - 10:15"
              body=""
            />
            <TimelineSection
              name="Hacking Major Companies for Fun and Profit"
              speakers="Rhys Elsmore"
              speakerId="rhys-elsmore"
              time="10:15 - 10:45"
              body=""
            />
            <TimelineSection
              name="Break"
              time="10:45 - 11:05"
              body="Tea, Coffee"
            />
            <TimelineSection
              name="Open Spaces Brainstorm"
              time="11:05 - 11:20"
              body="Present your ideas for open spaces"
            />
            <TimelineSection
              name="Failure Is Not An Option (It's a Core Feature!)"
              speakers="James Boswell"
              speakerId="james-boswell"
              time="11:20 - 11:50"
              body=""
            />
            <TimelineSection
              name="Lunch"
              time="11:50 - 12:50"
              body="Catered Lunch"
            />
            <TimelineSection
              name="DevOps for Data Science"
              speakers="Damian Brady"
              speakerId="damian-brady"
              time="12:50 - 13:20"
              body=""
            />
            <TimelineSection
              name="Sponsors"
              time="13:20 - 13:30"
              body=""
            />
            <TimelineSection
              name="Open Spaces Intro"
              time="13:30 - 13:45"
              body=""
            />
            <section className="timeline-section">
              <p className="time">13:45 - 14:30</p>
              <div><h4>Open Space 1</h4></div>
              <ul>
                <li>1) Kubernetes - Successes & Failures</li>
              </ul>
              <ul>
                <li>2) Scaling Agile beyond a single team</li>
              </ul>
              <ul>
                <li>3) Best practise use of Slack, Jira etc</li>
              </ul>
              <ul>
                <li>4) Approach to Security + Incident Response</li>
              </ul>
            </section>
            {/*<TimelineSection
              name="Open Space 1"
              time="13:45 - 14:30"
              body=""
            />*/}
            <TimelineSection
              name="Afternoon Tea"
              time="14:30 - 15:00"
              body=""
            />
            {/*<TimelineSection
              name="Open Space 2"
              time="15:00 - 15:45"
              body=""
            />*/}
            <section className="timeline-section">
              <p className="time">15:00 - 15:45</p>
              <div><h4>Open Space 2</h4></div>
              <ul>
                <li>1) Experimentation Driven Development</li>
              </ul>
              <ul>
                <li>2) Ethics in Tech</li>
              </ul>
              <ul>
                <li>3) Microservices - How to do it?</li>
              </ul>
              <ul>
                <li>4) Measurements - Trouble, visibility, performance</li>
              </ul>
            </section>
            {/* <TimelineSection
              name="Open Space 3"
              time="15:45 - 16:30"
              body=""
            /> */}
            <section className="timeline-section">
              <p className="time">15:45 - 16:30</p>
              <div><h4>Open Space 3</h4></div>
              <ul>
                <li>1) DevOps for Data Science</li>
              </ul>
              <ul>
                <li>2) Tools tools tools!</li>
              </ul>
              <ul>
                <li>3) Product driven development</li>
              </ul>
              <ul>
                <li>4) Chaos Engineering</li>
              </ul>
            </section>
            <TimelineSection
              name="Closing Remarks"
              time="16:30 - 17:00"
              body=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <p id="ignite">
        <em>Ignite Talks:</em> These are 5 minute-long lightning talks where the slides will automatically change every 15 seconds.
      </p>
      <p id="open-spaces">
        <em>Open Spaces:</em> Breakout sessions focused on topics suggested on the day by attendees. These topics may be sparked by the talks had earlier in the conference, or may simply reflect an issue you are facing in your workplace. Read more <a href='https://www.devopsdays.org/open-space-format/'>here.</a>
      </p>
    </div>
  </section>
);

const TimelineHeader = (props) => (
  <section className="timeline-header timeline-section">
    <h3>{props.name}</h3>
  </section>
);

const TimelineSection = (props) => {
  let topic = <div><h4>{props.name}</h4></div>;

  if (props.speakers && props.speakerId) {
    topic =
      <div>
        <Link to={`/speakers#${props.speakerId}`}>
          <h4>{props.speakers}</h4>
          <h5 className="title">{props.name}</h5>
        </Link>
      </div>
  }

  return (
    <section className="timeline-section">
      <p className="time">{props.time}</p>
      {topic}
      <p>{props.body}</p>
    </section>
  );
};

export default Agenda;
