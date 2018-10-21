import React from 'react'
import Link from 'gatsby-link'

import "../assets/css/main.css";

import logo from "../assets/images/DevOpsNewy_WHITE_TALL.png";

import Navigation from "../components/Navigation";
import Conduct from "../components/Conduct";
import Footer from "../components/Footer";

const Success = (props) => (
  <div>
    <Navigation />
    <section id='success'>
      <div className="row">
        <div className="three columns">
          <img src={logo} alt="" />
        </div>
        <div className="nine columns main-col">
            <section id="one">
                <div className="inner">
                    <h2>Form successfully submitted</h2>
                    <p>Thank you for contacting us, we will give this submission full consideration following up as per our <Link to="conduct">code of conduct</Link>.</p>
                </div>
            </section>
        </div>
      </div>
    </section>
    <Footer />
  </div>
)

export default Success
