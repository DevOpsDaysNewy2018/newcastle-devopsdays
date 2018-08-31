import Link from "gatsby-link";
import React from "react";
import SocialLinks from "./SocialLinks";
import logo from "../assets/images/DevOpsNewy_WHITE_WIDE TEXT.png";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <img src={logo} alt="DevOps Days Newy Logo" />
      <h3>
        October 24<super>th</super> and 25<super>th</super>, Newcastle NSW
      </h3>
      <hr />
      <SocialLinks />
      <p className="centered">
        <a href="https://ti.to/devopsaustralia/devopsdays-newcastle-2018"><button>Buy Tickets</button></a>
      </p>
      <p className="centered">
        <Link to="#buy-tickets"><button>Diversity Scholarship</button></Link>
      </p>
    </div>
  </div>
);

export default Banner;
