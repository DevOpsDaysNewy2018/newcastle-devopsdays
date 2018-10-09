import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Nib from "../assets/images/logo-nib.png";
import CmdSolutions from "../assets/images/logo-cmd.jpg";
import Assemblient from "../assets/images/logo-assemblient.png";
import Mudbath from "../assets/images/logo-mudbath.png";
import REA from "../assets/images/logo-rea.png";
import Hays from "../assets/images/logo-hays.png";
import CSA from "../assets/images/logo-csa.png";
import NewyTechPeople from "../assets/images/logo-newytechpeople.jpg";
import Vibrato from "../assets/images/vibrato-logo.png";
import LWB from "../assets/images/LWB.png";
import DIUS from "../assets/images/dius.png";
import SumoLogic from "../assets/images/logo-sumologic.png";
{/* import PagerDuty from "../assets/images/PagerDuty_logo_GREEN.png"; */}
{/* import Hudson from "../assets/favicon.png"; */}

const Sponsors = () => (
  <section id="sponsors">
    <h1>Sponsors</h1>

    <div className="row">
      <div className="text">
        {/* <p>
        We greatly value sponsors for this open event. If you are interested in sponsoring, please drop us an email at [ <a href="mailto:organizers-newcastle-2018@devopsdays.org">organizers-newcastle-2018@devopsdays.org</a> ].
        </p>*/}
        <p>
        Sponsorship is now closed.
        </p>

        <p>
        devopsdays is a self-organizing conference for practitioners that depends on sponsorships. We do not have vendor booths, sell product presentations, or distribute attendee contact lists. Sponsors have the opportunity to have short elevator pitches during the program and will get recognition on the website and social media before, during and after the event. Sponsors are encouraged to represent themselves by actively participating and engaging with the attendees as peers. Any attendee also has the opportunity to demo products/projects as part of an open space session.
        </p>

        <p>
        All attendees are welcome to propose any subject they want during the open spaces, but this is a community-focused conference, so heavy marketing will probably work against you when trying to make a good impression on the attendees.
        </p>

        <p>
        The best thing to do is send engineers to interact with the experts at devopsdays on their own terms.
        </p>

        {/*<p>
        <a href='https://drive.google.com/file/d/1HP3JwyC76cQr_3GUs1F7e_rGknfls3jf/view?usp=sharing'>Our sponsorship prospectus can be downloaded here</a>
        </p>*/}
      </div>

      <hr/>

      <div className="row">
        <div className="twelve columns collapsed">
          <h3>Platinum Sponsors</h3>
          <div id="portfolio-wrapper" className="cf align-center">
              <div className="columns portfolio-item">
                <div className="item-wrap platinum">
                  <a href="https://www.vibrato.com.au/" title="Vibrato">
                    <img alt="Vibrato" src={Vibrato} />
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <hr/>
      <div className="row">
        <div className="twelve columns collapsed">
          <h3>Gold Sponsors</h3>
          <div id="portfolio-wrapper" className="cf align-center">
            <div className="columns portfolio-item">
              <div className="item-wrap gold">
                <a href="https://www.rea-group.com" title="rea group">
                  <img alt="rea group" src={REA} />
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap gold">
                <a href="https://csa.com.au/" title="CSA">
                  <img alt="CSA" src={CSA} />
                </a>
              </div>
            </div>

            {/* Haven't received confirmation yet
            <div className="columns portfolio-item">
              <div className="item-wrap gold">
                <a href="https://www.pagerduty.com/" title="PagerDuty">
                  <img alt="PagerDuty" src={PagerDuty} />
                </a>
              </div>
            </div>
           */}
          </div>
        </div>
      </div>

      <hr/>
      <div className="row">
        <div className="twelve columns collapsed">
          <h3>Silver Sponsors</h3>

          <div id="portfolio-wrapper" className="cf align-center">
            <div className="columns portfolio-item">
              <div className="item-wrap silver">
                <a href="http://www.cmdsolutions.com.au/" title="CMD Solutions">
                  <img alt="CMD Solutions" src={CmdSolutions} />
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap gold">
                <a href="https://www.hays.com.au/digital-technology" title="Hays">
                  <img alt="Hays Digital Technology" src={Hays} />
                </a>
              </div>
            </div>

            {/*
            <div className="columns portfolio-item">
              <div className="item-wrap gold">
                <a href="https://au.hudson.com/" title="Hudson">
                  <img alt="Hudson" src={Hudson} />
                </a>
              </div>
            </div>
            */}

            <div className="columns portfolio-item">
              <div className="item-wrap gold">
                <a href="https://www.sumologic.com/" title="Sumo Logic">
                  <img alt="Sumo Logic" src={SumoLogic} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr/>
      <div className="row">
        <div className="twelve columns collapsed">
          <h3>Bronze Sponsors</h3>

          <div id="portfolio-wrapper" className="cf align-center">
            <div className="columns portfolio-item">
              <div className="item-wrap silver">
                <a href="http://www.assemblient.com/" title="Assemblient">
                  <img alt="Assemblient" src={Assemblient} />
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap silver">
                <a href="https://www.mudbath.com.au/" title="mudbath">
                  <img alt="mudbath" src={Mudbath} />
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap smaller">
                <a href="https://jamesmacdonald.me/podcast" title="newy tech people">
                  <img alt="newy tech people" src={NewyTechPeople} />
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap silver">
                <a href="https://dius.com.au/what-we-do/?utm_source=DevOpsNewcastle&utm_medium=Logo_Link" title="DiUS">
                  <img alt="DiUS" src={DIUS} />
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap silver">
                <a href="http://www.lwb.org.au/" title="Life Without Barriers">
                  <img alt="Life Without Barriers" src={LWB} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr/>
      <div className="row">
        <div className="twelve columns collapsed">
          <h3>Community Sponsors</h3>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
            <div className="columns portfolio-item">
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  </section>
);

export default Sponsors;
