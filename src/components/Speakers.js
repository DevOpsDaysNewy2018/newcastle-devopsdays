import React from "react";

import Speaker from './Speaker';
import nopic from "../assets/favicon.png";
import davidmcraney from "../assets/images/david-mcraney.jpg";
import aurynnshaw from "../assets/images/aurynn.jpg";
import geshanmanandhar from "../assets/images/geshan-manandhar.jpg";
import jamesboswell from "../assets/images/james-boswell.jpg";
import damianbrady from "../assets/images/damian-brady.png";
import mollyrowe from "../assets/images/molly-rowe.png";
import anthonyborton from "../assets/images/anthony-borton.png";

const SpeakersList = [
  {
    name: "David McRaney",
    id: "david-mcraney",
    image: davidmcraney,
    twitter: "https://twitter.com/davidmcraney",
    url: "http://davidmcraney.com/",
    title: "Author, Journalist, Public Speaker",
    about: "David McRaney is an internationally bestselling author, journalist, and lecturer who created the You Are Not So Smart blog, books and podcast. David cut his teeth covering Hurricane Katrina on the Gulf Coast and in the Pine Belt region of the Deep South. Since then, he has been a beat reporter, an editor, a photographer, voiceover artist, television host, digital content manager, and everything in between. His writing work has been featured at The Atlantic, The New York Post, Salon, Brainpickings, Lifehacker, Gawker, Boing Boing, The Huffington Post, and Big Think among many other places. He is married to Amanda McRaney, and they live in Hattiesburg, Mississippi.",
    talk: "Keynote - Day 1",
    summary: "More details about David's talk will be announced soon!"
  },
  {
    name: "Aurynn Shaw",
    id: "aurynn-shaw",
    image: aurynnshaw,
    twitter: "https://twitter.com/aurynn",
    url: "https://blog.aurynn.com/",
    title: "Founder and DevOps Culturalist at Eiara",
    about: "Aurynn is the founder of Eiara, a DevOps consultancy based out of Wellington, New Zealand, focussing on helping clients develop technical DevOps capability, and the cultural knowledge to use it. With over a decade as a professional software developer, Aurynn’s expertise ranges from modern cloud deployments to massively parallel supercomputer environments. As the defining voice of the ideas of “contempt culture”, Aurynn is working to change the very nature of how we create new technologies, and the questions that we must answer as we do.",
    talk: "Keynote - Day 2",
    summary: "More details about Aurynn's talk will be announced soon!"
  },
  {
    name: "Anthony Borton",
    id: "anthony-borton",
    image: anthonyborton,
    twitter: "https://twitter.com/AnthonyBorton",
    url: "http://www.myalmblog.com",
    title: "DevOps Architect at Microsoft",
    about: "Anthony Borton is a DevOps Architect on the Microsoft Global Enterprise DevOps customer advisory team. In this role, he helps organisations be more successful with their Agile DevOps transformations. Prior to joining Microsoft, he authored and delivered training around the world on Agile and DevOps. Anthony is passionate about continuous learning and is never scared to experiment so he can learn from both successes and failures.",
    talk: "Four lessons learnt from Microsoft's DevOps Transformation!",
    summary: "Microsoft believes DevOps is key to digital transformation. Seven years ago, the company undertook its DevOps journey and now has over 80,000 engineers doing DevOps in the public cloud. In this session I’ll share with you 4 lessons we learnt and the habits we have adopted as a result."
  },
  {
    name: "Shilpa Cheruvu, Jemimah Irvin & Hailey Martin",
    id: "shilpa-cheruvu-jemimah-irvin-hailey-martin",
    image: nopic,
    twitter: "https://twitter.com/jemimahirvin",
    url: "",
    title: "Senior Software Developer (Shilpa), UX Designer (Jemimah), DevOps Engineer (Hailey)",
    about: "Jemimah is a visual designer turned UX designer who is happiest at work when scribbling on a whiteboard, mapping out user research and working with a multi-disciplinary team. Outside of work, happiness looks like a veggie garden, messing about with paints or cooking with freshly sharpened knives. Hailey is a DevOps Engineer who secretly wishes her title was something cooler like 'DevOps Witch' or 'Engineer of Chaos'. She enjoys building tools for developers to make their lives easier, engineering servers that manage themselves, and over-using party parrot emojis in Slack. Shilpa is a developer who enjoys building software products, debugging hard problems and in general turning coffee into code. Other than her work, she loves reading fiction, watching netflix and nature photography.",
    talk: "Agile Chatbots",
    summary: "Chatbots are a hot topic right now but very little published work has been done around the development cycles. Hear about how the team at nib stood up an agile cross functional team and developed a continuous delivery pipeline for their chatbot nibby delivering up to 20 deployments per day."
  },
  {
    name: "Geshan Manandhar",
    id: "geshan-manandhar",
    image: geshanmanandhar,
    twitter: "https://twitter.com/geshan",
    url: "http://geshan.com.np",
    title: "Senior Software Engineer at THE ICONIC",
    about: "Geshan is a seasoned software engineer, with more than a decade of software engineering experience. Currently, in Sydney, Australia serving THE ICONIC as senior software engineer. He has a keen interest in REST architecture and microservices. He is actively involved with the developer community in his hometown Kathmandu, Nepal. He occasionally blogs in his free time.",
    talk: "From A and B to ~150 Microservices, The Journey and Learnings",
    summary: "Are you frustrated working with large, legacy and potentially lethal code bases? We were frustrated too, but in 4-5 years of time, we replaced A (front-end) and B (back-office) system with ~150 microservices. This talk reveals that journey and the things we learned along the way."
  },
  {
    name: "Rhys Elsmore",
    id: "rhys-elsmore",
    image: nopic,
    twitter: "https://twitter.com/rhyselsmore",
    url: "",
    title: "Security Architect at Heroku",
    about: "Rhys Elsmore is a Security Architect at Heroku (or as he likes to put it, an Internet Mall Cop), telecommuting from Newcastle. He also hunts for Bugcrowd, ranking in the Top 100 researchers. When not working, you can find him volunteering with the Rural Fire Service, getting his butt whooped at MMA, telling everyone about Crossfit, and caring for two needy Australian Shepherds.",
    talk: "Hacking Major Companies for Fun and Profit",
    summary: "Ready for an adventure full of security killchains, 0day, data loss, and vulnerabilities? This talk focuses on the base concepts of information security and start-to-finish walkthroughs of critical security vulnerabilities I have found in major corporations - or tl;dr how I hack for fun and profit."
  },
  {
    name: "James Boswell",
    id: "james-boswell",
    image: jamesboswell,
    twitter: "https://twitter.com/xcapee",
    url: "https://cmdsolutions.com.au",
    title: "Cloud Architect and Senior Consultant at CMD Solutions Australia",
    about: "James Boswell has over 30 years experience in IT, covering hardware design, telecommunications research and development, software development and enterprise architecture. He is an inveterate sufferer of imposter syndrome, constantly surprised that people seem to think he has something worth saying. He is also a father of six and grandfather, and co-author of the book “Cyberparenting – Raising your kids in an online world”.",
    talk: "Failure Is Not An Option (It's a Core Feature!)",
    summary: "This talk examines the breadth and depth of DevOps through the lens of “failure”. Understanding failure is essential to gain the rewards DevOps offers. I cover reliability engineering, testing, culture, psychological safety, and more! Includes stories from industry leaders and personal experience."
  },
  {
    name: "Damian Brady",
    id: "damian-brady",
    image: damianbrady,
    twitter: "https://twitter.com/damovisa",
    url: "https://damovisa.me",
    title: "Cloud Developer Advocate at Microsoft",
    about: "Damian is a Cloud Developer Advocate specializing in DevOps. Formerly a dev at Octopus Deploy and a Microsoft MVP, he has a background in software development and consulting in a broad range of industries. In Australia, he co-organised the Brisbane .Net User Group, and launched the now annual DDD Brisbane conference. He regularly speaks at conferences, User Groups, and other events around the world, and is an occasional guest on various podcasts like .NET Rocks and Hanselminutes.",
    talk: "DevOps for Data Science",
    summary: "In this session, see how DevOps best practices can be applied to data science and machine learning. I’ll walk through the practices, the tools, and what you should think about when using predictive models in your software."
  },
  {
    name: "Molly Rowe",
    id: "molly-rowe",
    image: mollyrowe,
    twitter: "https://twitter.com/mulvina_rowe",
    url: "",
    title: "Community Manager at Vibrato",
    about: "Molly is a people person who has a passion for technology and how it influences our everyday lives. She's had a million different jobs and wants to try a million more. Molly is currently the Community Manager for Vibrato, this means she looks after recruitment, marketing and events, and people and culture. She's loving every action-packed minute of it. Helping people succeed is her ongoing career goal. She aspires to make enough small differences that the molehills become a mountain. When she's not working she's finding a new craft hobby, playing MtG or outside in the sunshine.",
    talk: "Distributed Culture - from beer to babies and back again",
    summary: "As technology and communication tools get better, and distributed teams become more common, how do we maintain culture? How do you build culture at work when you can't go and have a beer, or take a walk and grab a coffee? The short answer is that you can't. The 5 minute Ignite talk answer is that you can, but it's not easy. You'll get approximately a minute on each of these; 1. Hiring for culture fit - augmenting culture, not conforming. 2. Communication - who, what, when, where, how, why. 3. Managing for distance - empowerment. 4. Be ready for cultural shifts - beers to babies and back again. 5. How Vibrato has done it - the good, the bad and the ugly"
  },
  {
    name: "KJ Tsanaktsidis",
    id: "kj-tsanaktsidis",
    image: nopic,
    twitter: "",
    url: "",
    title: "Senior Ops Engineer at Zendesk",
    about: "I’m an ops engineer currently at Zendesk, where I work on infrastructure and application reliability, performance, and security.",
    talk: "Continuous profiling for Go applications: how it helped us fix problems we didn’t know we had ",
    summary: "This talk is the story of why we enabled Stackdriver continuous profiling for our Go application, and how its data helped us to triple the throughput of one part of our application. It turns out the best profiler is the one that’s actually running when you need it!"
  },
  {
    name: "Laughing Mind",
    id: "laughing-mind",
    image: nopic,
    twitter: "https://twitter.com/laughingmind",
    url: "https://www.laughingmind.com",
    title: "CoFounder",
    about: "OTGeek forging #digitalhealth #entrepreneurship DNA in regional Oz. CoFounder: @Assemblient | EIR @slingshotters | #AI in #HealthCare research",
    talk: "FeedMe! The rise of DigitalHumans and DevOps implications",
    summary: "With the rise of conversational interfaces, we’re witnessing the emergence of Digital Humans - lifelike avatars as malleable, trainable AI for a range of digital experiences. But they’re data hungry beasts - how does DevOps respond to conversational analytics to keep them responsive + accurate?"
  },
  {
    name: "Matthew Murphy",
    id: "matthew-murphy",
    image: nopic,
    twitter: "https://twitter.com/maltmurphy",
    url: "",
    title: "Lead Software Developer",
    about: "I’m a developer in the platform team at Orica. I enjoy building software and getting it to run reliably in the cloud.",
    talk: "Sidecars for everyone",
    summary: "I will give an overview of the sidecar pattern and discuss some of the problems it solves. I will also present some ideas on how people can get started with it simply without the need for a service mesh or anything complicated. I’ll give some examples of popular OSS projects that can be leveraged and give a quick overview of how the pattern helps enable service meshes."
  },
  {
    name: "Garth Kidd",
    id: "garth-kidd",
    image: nopic,
    twitter: "https://twitter.com/garthk",
    url: "",
    title: "",
    about: "",
    talk: "Unicorn tools: a safety guide for regular ponies",
    summary: "Everybody knows that to keep up with the latest conference talk hotness from unicorn companies they need Kubernetes, a service mesh, distributed tracing, and a dozen other amazing toys… but some of those can injure or maim regular ponies with a full time ops staff of zero. What’s safe, and when?"
  },
  {
    name: "Sandor Agafanoff",
    id: "sandor-agafanoff",
    image: nopic,
    twitter: "https://twitter.com/k_parsnip",
    url: "",
    title: "",
    about: "Software engineer for the last 15 years, working for enterprises, consultancies and startups. Passionate about event driven architecture and software delivery methodology.",
    talk: "Stability and Innovation with Event-driven Architecture",
    summary: "A brief overview of how event driven architecture is shaping modern systems as size and complexity is continuously growing."
  },
];

{/*

We're just spreading all properties of each speaker to the component, if you want to limit this you need to specifiy them like so:

<Speaker
  name={speaker.name}
  id={speaker.id}
  image={speaker.image}
  twitter={speaker.twitter}
  url={speaker.url}
  title={speaker.title}
  about={speaker.about}
  talk={speaker.talk}
  summary={speaker.summary}
/>
*/}

const Speakers = () => (
  <section id="speakers">
    <div className="row" id="home">
      <h2>DevOpsDays Newcastle 2018 - Speakers</h2>

      <p>We are thrilled to welcome the following amazing speakers to Devopsdays Newy!</p>

      {/* Loop over speakers */}
      {SpeakersList.map(speaker => <Speaker key={`speaker-${speaker.id}`} {...speaker}/>)}

    </div>
  </section>
);

export default Speakers;
