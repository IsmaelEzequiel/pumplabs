import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import logo from './logo.svg';
import Navigation from './components/Navigation'

import * as ROUTES from './constants/routes'

import SignInPage from './components/Pages/SignInPage'
import SignUpPage from './components/Pages/SignUpPage'
import AccountPage from './components/Pages/AccountPage'
import AdminPage from './components/Pages/AdminPage'
import HomePage from './components/Pages/HomePage'
import LandingPage from './components/Pages/LandingPage'

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path={ROUTES.HOME} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
    </Router>
  );
}

export default App;
