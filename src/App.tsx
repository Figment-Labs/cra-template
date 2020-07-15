import React from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

// initialise Firebase
// firebase.initializeApp(JSON.parse(atob(process.env.REACT_APP_FIREBASE_INIT as string)));

const App = (): JSX.Element => {
  return (
    <Router>
      <Route path="/" exact={true} component={Home} />
    </Router>
  );
};

export default App;
