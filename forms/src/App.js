import './App.css';
import React from 'react';
import Beneficiary from './components/Beneficiary';
import Bank from './components/Bank';
import Address from './components/Address';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
        <div className="form-box">
          <Beneficiary />
          </div>
        </Route>
        <Switch>
          <Route path='/bank'>
            <div className="form-box">
              <Bank />
            </div>
          </Route>
          <Route path='/address'>
          <div className="form-box">
            <Address />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;