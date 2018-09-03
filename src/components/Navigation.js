import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="/#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/#where">
          Where
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/#buy-tickets">
          Tickets
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/#agenda">
          Agenda
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/speakers">
          Speakers
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/#sponsors">
          Sponsors
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/#organisers">
          Organisers
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/conduct">
          Conduct
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
