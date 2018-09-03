import React from "react";
import {
  FaHome,
  FaTwitter
} from "react-icons/lib/fa";

import nopic from "../assets/favicon.png";
import davidmcraney from "../assets/images/david-mcraney.jpg";
import aurynnshaw from "../assets/images/aurynn.jpg";

const Speakers = () => (
  <section id="speakers">
    <div className="row">
      <h2>DevOpsDays Newcastle 2018 - Speakers</h2>

      <p>We are thrilled to welcome the following amazing speakers to Devopsdays Newy!</p>

      <Speaker
        image={davidmcraney}
        twitter="https://twitter.com/davidmcraney"
        url="http://davidmcraney.com/"
        name="David McRaney"
        title="Author, Journalist, Public Speaker"
        about="David is the author of You Are Not So Smart, a blog that became an international best-seller and podcast series."
        talk="Keynote - Day 1"
        summary="More details about David's talk will be announced soon!"
      />

      <Speaker
        image={aurynnshaw}
        twitter="https://twitter.com/aurynn"
        url="https://blog.aurynn.com/"
        name="Aurynn Shaw"
        title="Founder and DevOps culturalist at http://eiara.nz"
        about="Aurynn is an accomplished international speaker who focuses on the culture of tech and the ways in which culture is an inextricable part of how software is developed and the implications of what we build."
        talk="Keynote - Day 2"
        summary="More details about Aurynn's talk will be announced soon!"
      />

      <Speaker
        image={nopic}
        twitter="https://twitter.com/mattray"
        url="http://leastresistance.net/"
        name="Matt Ray"
        title="Manager and Solutions Architect at Chef"
        about="Matt Ray is Chef’s Sydney-based Manager and Solutions Architect for APJ. He has been active in the open source community for over two decades and has worked in a wide variety of startups and enterprises. He podcasts at SoftwareDefinedTalk.com, blogs at LeastResistance.net and is @mattray on Twitter, IRC, GitHub and too many Slacks."
        talk="10 Years of DevOps - How Did We Get Here and Where Are We Going?"
        summary="DevOps is nearly 10 years old as a term, yet it continues to evolve in response to the state of the software world. While DevOps has no formal definition, we will explore how it has changed over time. New concepts like SRE and serverless will continue this evolution of how we think about DevOps."
      />

      <Speaker
        image={nopic}
        twitter="https://twitter.com/jemimahirvin"
        url=""
        name="Shilpa Cheruvu, Jemimah Irvin & Hailey Martin"
        title="Senior Software Developer (Shilpa), UX Designer (Jemimah), DevOps Engineer (Hailey)"
        about=""
        talk="Agile Chatbots"
        summary="Chatbots are a hot topic right now but very little published work has been done around the development cycles. Hear about how the team at nib stood up an agile cross functional team and developed a continuous delivery pipeline for their chatbot nibby delivering up to 20 deployments per day."
      />

      <Speaker
        image={nopic}
        twitter="https://twitter.com/xcapee"
        url="https://cmdsolutions.com.au"
        name="James Boswell"
        title="Enterprise Architect at CMD Solutions"
        about="James Boswell has over 30 years experience in IT, covering hardware design, telecommunications research and development, software development and enterprise architecture. He is an inveterate sufferer of imposter syndrome, constantly surprised that people seem to think he has something worth saying. He is also a father of six and grandfather, and co-author of the book “Cyberparenting – Raising your kids in an online world”."
        talk="Failure Is Not An Option (It's a Core Feature!)"
        summary="This talk examines the breadth and depth of DevOps through the lens of “failure”. Understanding failure is essential to gain the rewards DevOps offers. I cover reliability engineering, testing, culture, psychological safety, and more! Includes stories from industry leaders and personal experience."
      />

      <Speaker
        image={nopic}
        twitter="https://twitter.com/rhyselsmore"
        url=""
        name="Rhys Elsmore"
        title="Security Architect at Heroku"
        about="Rhys Elsmore is a Security Architect at Heroku (or as he likes to put it, an Internet Mall Cop), telecommuting from Newcastle. He also hunts for Bugcrowd, ranking in the Top 100 researchers. When not working, you can find him volunteering with the Rural Fire Service, getting his butt whooped at MMA, telling everyone about Crossfit, and caring for two needy Australian Shepherds."
        talk="Hacking Major Companies for Fun and Profit"
        summary="Ready for an adventure full of security killchains, 0day, data loss, and vulnerabilities? This talk focuses on the base concepts of information security and start-to-finish walkthroughs of critical security vulnerabilities I have found in major corporations - or tl;dr how I hack for fun and profit."
      />

      <Speaker
        image={nopic}
        twitter="https://twitter.com/geshan"
        url="http://geshan.com.np"
        name="Geshan Manandhar"
        title="Senior Software Engineer at THE ICONIC"
        about="Geshan is a seasoned software engineer, with more than a decade of software engineering experience. Currently, in Sydney, Australia serving THE ICONIC as senior software engineer. He has a keen interest in REST architecture and microservices. He is actively involved with the developer community in his hometown Kathmandu, Nepal. He occasionally blogs in his free time."
        talk="From A and B to ~150 Microservices, The Journey and Learnings"
        summary="Are you frustrated working with large, legacy and potentially lethal code bases? We were frustrated too, but in 4-5 years of time, we replaced A (front-end) and B (back-office) system with ~150 microservices. This talk reveals that journey and the things we learned along the way."
      />

      <Speaker
        image={nopic}
        twitter="https://twitter.com/damovisa"
        url="https://damovisa.me"
        name="Damian Brady"
        title="Cloud Developer Advocate at Microsoft"
        about="Damian is a Cloud Developer Advocate specializing in DevOps. Formerly a dev at Octopus Deploy and a Microsoft MVP, he has a background in software development and consulting in a broad range of industries. In Australia, he co-organised the Brisbane .Net User Group, and launched the now annual DDD Brisbane conference. He regularly speaks at conferences, User Groups, and other events around the world, and is an occasional guest on various podcasts like .NET Rocks and Hanselminutes."
        talk="DevOps for Data Science"
        summary="In this session, see how DevOps best practices can be applied to data science and machine learning. I’ll walk through the practices, the tools, and what you should think about when using predictive models in your software."
      />
    </div>
  </section>
);

const Speaker = (props) => (
<div className="twelve columns speaker">
  <a name={props.name} />
  <div className="three columns">
    <img src={props.image} alt="" />
    <ul className="speakers-social">
      <li>
        <a href={props.twitter}>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href={props.url}>
          <FaHome />
        </a>
      </li>
    </ul>
  </div>
  <div className="nine columns main-col">
    <h3>{props.name}</h3>
    <h4>{props.title}</h4>
    <h5>About</h5>
    <p>{props.about}</p>
    <h5>{props.talk}</h5>
    <p>{props.summary}</p>
  </div>
  <hr />
</div>
);

export default Speakers;
