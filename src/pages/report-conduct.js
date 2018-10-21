import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Navigation from "../components/Navigation";
import ConductForm from "../components/ConductForm";
import Footer from "../components/Footer";

const ReportConductPage = () => (
  <div>
    <Navigation />
    <ConductForm />
    <Footer />
  </div>
);

export default ReportConductPage;
