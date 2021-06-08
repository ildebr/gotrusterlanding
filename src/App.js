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
import Newsletter from './views/newsletter/newsletter'

import './App.css';
import Business from "./views/myBusiness/business";
import EditMyBusiness from "./views/myBusiness/editMyBusiness";

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
          <Route path="/editmybusiness" component={EditMyBusiness} />
          <Route path="/myprofile" component={MyProfile} />          
          
        <Route exact path="/newsletter" render={() => {
          return <div>
            <Newsletter newsType={'newAccount'}/>
          </div>
        }}>
        </Route>
        <Route exact path="/newsletterPass" render={() => {
          return <div>
            <Newsletter newsType={'newPassword'}/>
          </div>
        }}>
        </Route>
        <Route exact path="/newsletterValidations" render={() => {
          return <div>
            <Newsletter newsType={'validationSuccess'}/>
          </div>
        }}>
        </Route>
        <Route exact path="/newsletterValidationfailed" render={() => {
          return <div>
            <Newsletter newsType={'validationFailed'}/>
          </div>
        }}>
        </Route>
        <Route exact path="/newsletterlevelUp" render={() => {
          return <div>
            <Newsletter newsType={'levelUp'}/>
          </div>
        }}>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
