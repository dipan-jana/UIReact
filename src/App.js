import React from 'react';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import LandingPage from './components/landingpage';
import SignupPage from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
        </Switch>
      </React.Fragment>
      <Footer/>
    </Router>
  );
}

export default App;
