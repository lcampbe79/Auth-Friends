import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login.js'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h4>Friend's Page</h4>
        <ul>
          <li>
            {/* <Link to='/login'>Login</Link> */}
          </li>
          <li>
            <Link to='/friends/'></Link>
          </li>
        </ul>
      <Switch>
        {/* <PrivateRoute exact path="/protected" component={Login} /> */}
        <Route path="/login" component={Login} />
        {/* <Route component={Login} /> */}
      </Switch>
     </div>
    </Router>
  );
}

export default App;
