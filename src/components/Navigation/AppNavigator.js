import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DonationScreen from '../screens/DonationScreen';
import NavBar from '../components/NavBar';

const AppNavigator = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/auth" component={AuthScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/donate" component={DonationScreen} />
        <Route path="/" component={AuthScreen} />
      </Switch>
    </Router>
  );
};

export default AppNavigator;