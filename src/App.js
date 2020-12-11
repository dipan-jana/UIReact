import React from 'react';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import LandingPage from './components/landingpage';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <LandingPage/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
