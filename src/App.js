import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/login/login';
import Register from './views/register/register';
import RegisterSecond from './views/register/registersecond';
import EmailVerification from './views/emailVerification/emailVerification';
import PassRecover from './views/passRecover/passRecover';

import './App.css';

function App() {
  return (
    <div className="App" >
      <Router>
        <Route exact path="/" render={() => {
          return <div>
            <Login />
          </div>
        }}>
        </Route>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/registerex" component={RegisterSecond} />
          <Route path="/verificationemail" component={EmailVerification} />
          <Route path="/passrecover" component={PassRecover} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
