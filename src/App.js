import React from 'react';
import './App.css';
import ExperiencesList from './components/ExperiencesList'
import AddExperience from './components/AddExperience'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddExperience/>
        </Route>
        <Route path="/">
          <ExperiencesList/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
