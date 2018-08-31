import React from "react";
import Link from "gatsby-link";

const BuyTickets = () => (
  <section id="buy-tickets">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Buy Tickets - $99</h1>
      </div>

      <div className="text">
        <p>
          We want to ensure that anyone who’s interested in attending a devopsdays is able to, and that price is not a
          barrier. Therefore, we have adopted a flat $99 price for all tickets so everyone can help shape the culture and
          practice of DevOps world-wide.
        </p>

        <p className="centered">
          <a href="https://ti.to/devopsaustralia/devopsdays-newcastle-2018"><button>Buy Tickets</button></a>
        </p>
      </div>

      <hr/>
      <div className="twelve columns collapsed">
        <h1>Diversity Scholarship</h1>
      </div>
      <div className="text">
        <p>
          Thanks to the REA Group the 2018 DevOpsDays Newcastle’s diversity scholarship program provides support to those from traditionally underrepresented and/or marginalized groups in the technology and/or open source communities who may not otherwise have the opportunity to attend DevOpsDays events for financial reasons.
        </p>
        <p>
          Equal access and diversity are important to the DevOpsDays Newcastle conference, and we aim to remove this obstacle. We want you at our events, and we want to help you get there! Scholarships are awarded based on a combination of need and impact. Selection is limited and will be made by a group of reviewers who will assess each applicant’s request.
        </p>
        <p>
          Scholarship recipients will receive a complimentary registration pass (non-transferrable). We may consider travel and accommodation support for recipients who need it.
        </p>

        <h3>Eligibility</h3>
        <p>
          Applicants must be from a traditionally underrepresented and/or marginalized group in the technology and/or open source communities including, but not limited to: persons identifying as LGBTQ, women, persons of colour, students and/or persons with disabilities; and be unable to attend without some financial assistance.
        </p>

        <h3>How to Apply</h3>
        <p>
          Please contact us at: <a href="mailto:organisers-newcastle-2018@devopsdays.org">organisers-newcastle-2018@devopsdays.org</a> to apply for the scholarship.
        </p>
      </div>
    </div>
  </section>
);

export default BuyTickets;
