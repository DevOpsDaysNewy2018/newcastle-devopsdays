import React from "react";

import "../assets/css/main.css";

import Navigation from "../components/Navigation";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const SpeakersPage = () => (
  <div>
    <Navigation />
    <Speakers />
    <Footer />
  </div>
);

export default SpeakersPage;
