import React from 'react'

import logo from "../assets/images/DevOpsNewy_WHITE_TALL.png";

const ConductForm = (props) => (
    <section id="report-conduct">
        <div className="row">
        <div className="three columns">
            <img src={logo} alt="" />
        </div>
        <div className="nine columns main-col">
            <h2>DevOpsDays Newcastle 2018 - Report a breach</h2>
            <section>
                <form name="report-conduct" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" netlify>

                    <input type="hidden" name="bot-field" />

                    <div className="field">
                        <label htmlFor="event">Please describe what happened / is happening.</label>
                        <textarea name="event" id="event"></textarea>
                    </div>
                    <div className="field">
                        <label htmlFor="suggested-outcome">What would you consider to be an appropriate outcome?</label>
                        <textarea name="suggested-outcome" id="suggested-outcome"></textarea>
                    </div>
                    <div className="field">
                        <label htmlFor="contact-details">Optional: If you would like to be contacted about this, please leave some contact details such as email address or phone number.</label>
                        <input type="text" name="contact-details" id="contact-details"/>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Submit" className="special" /></li>
                    </ul>
                </form>
            </section>
            {/* <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">organizers-newcastle-2018@devopsdays.org</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section>
            </section>*/}
        </div>
      </div>
    </section>
)

export default ConductForm
