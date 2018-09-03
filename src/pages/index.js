import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Where from "../components/Where";
import BuyTickets from "../components/BuyTickets";
import Sponsors from "../components/Sponsors";
import Organisers from "../components/Organisers";
import Agenda from "../components/Agenda";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Where />
    <BuyTickets />
    <Agenda />
    <Sponsors />
    <Organisers />
    <Footer />
  </div>
);

export default IndexPage;
