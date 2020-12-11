import React from 'react';

import {About, Contact, Hero, Hotel, Question} from './dependencies';
import './landingpage.css';

function LandingPage() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Hotel />
      <Question />
      <Contact />
    </React.Fragment>
  );
}

export default LandingPage;
