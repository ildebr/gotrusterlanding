import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/login/login';
import Register from './views/register/register';
import RegisterSecond from './views/register/registersecond';
import EmailVerification from './views/emailVerification/emailVerification';
import PassRecover from './views/passRecover/passRecover';
import NewpassRecover from './views/passRecover/newpassRecover';
import Reputation from './views/reputation/reputation'
import MyProfile from './views/myProfile/myProfile'

import './App.css';
import Business from "./views/myBusiness/business";

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
          <Route path="/newpassrecover" component={NewpassRecover} />
          <Route path="/reputation" component={Reputation} />
          <Route path="/mybusiness" component={Business} />
          <Route path="/myprofile" component={MyProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
