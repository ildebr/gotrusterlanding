import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/login/login';
import Register from './views/register/register';
import RegisterSecond from './views/register/registersecond';
import EmailVerification from './views/emailVerification/emailVerification';
import EmailVerificationActivate from './views/emailVerification/emailVerificationActivate';
import PassRecover from './views/passRecover/passRecover';
import NewpassRecover from './views/passRecover/newpassRecover';
import Reputation from './views/reputation/reputation'
import MyProfile from './views/myProfile/myProfile'
import Newsletter from './views/newsletter/newsletter'
import CategorySearch from './views/categorySearch/categorySearch'
import Search from './views/search/search'
import GuardedRoute from "./setting/GuardedRoute";
import auth from './setting/auth';
import './App.css';
import Business from "./views/myBusiness/business";
import EditMyBusiness from "./views/myBusiness/editMyBusiness";
import ShareMyProfile from "./views/shareProfile/shareMyProfile";
import Users from "./views/admin/users";
import AdminDni from "./views/admin/dni";
import AdminCuil from "./views/admin/cuil";
import AdminSelfie from "./views/admin/selfie";
import AdminAddress from "./views/admin/address";
import BusinessAdmin from "./views/admin/bussines";
import PublicBusiness from "./views/myBusiness/publicBusiness";
import PublicProfile from "./views/publicProfile/publicProfile";
import SlantedPublicBusiness from "./views/myBusiness/slantedPublicBusiness";


import DniValidation from "./views/manualValidations/dni/dniValidation";
import DniValidationSuccess from "./views/manualValidations/dni/dniValidationSuccess";
import DniValidationReady from "./views/manualValidations/dni/dniValidationReady";
import DniValidationError from "./views/manualValidations/dni/dniValidationFail";

import AfipValidation from "./views/manualValidations/afipValidation";
import SecurityMobile from "./views/seccurity/securityMobile";
import Sesgado from "./views/sesgado/sesgado";
import DireccionValidation from "./views/manualValidations/direccionValidation";
import SelfieValidation from "./views/manualValidations/selfieValidation";

import AutomaticValidationPhone from "./views/automaticValidation/AutomaticValidationPhone/automaticValidationPhone";
import WelcomeAgainAutomaticValidationPhone from "./views/automaticValidation/AutomaticValidationPhone/welcomeAgainAutomaticValidationPhone";
import CompletedAutomaticValidationPhone from "./views/automaticValidation/AutomaticValidationPhone/completedAutomaticValidationPhone";

import AutomaticValidationMercadoLibre from "./views/automaticValidation/AutomaticValidationMercadoLibre/automaticValidationMercadoLibre";
import FailedAutomaticValidationMercadoLibre from "./views/automaticValidation/AutomaticValidationMercadoLibre/failedAutomaticValidationMercadoLibre";
import ReadyAutomaticValidationMercadoLibre from "./views/automaticValidation/AutomaticValidationMercadoLibre/readyAutomaticValidationMercadoLibre";
import SuccessAutomaticValidationMercadoLibre from "./views/automaticValidation/AutomaticValidationMercadoLibre/successAutomaticValidationMercadoLibre";

import AutomaticValidationLinkedIn from "./views/automaticValidation/AutomaticValidationLinkedIn/automaticValidationLinkedIn";
import FailedAutomaticValidationLinkedIn from "./views/automaticValidation/AutomaticValidationLinkedIn/failedAutomaticValidationLinkedIn";
import ReadyAutomaticValidationLinkedIn from "./views/automaticValidation/AutomaticValidationLinkedIn/readyAutomaticValidationLinkedIn";
import SuccessAutomaticValidationLinkedIn from "./views/automaticValidation/AutomaticValidationLinkedIn/successAutomaticValidationLinkedIn";

import AutomaticValidationFacebook from "./views/automaticValidation/AutomaticValidationFacebook/automaticValidationFacebook";
import FailedAutomaticValidationFacebook from "./views/automaticValidation/AutomaticValidationFacebook/failedAutomaticValidationFacebook";
import ReadyAutomaticValidationFacebook from "./views/automaticValidation/AutomaticValidationFacebook/readyAutomaticValidationFacebook";
import SuccessAutomaticValidationFacebook from "./views/automaticValidation/AutomaticValidationFacebook/successAutomaticValidationFacebook";

import AutomaticValidationBinance from "./views/automaticValidation/AutomaticValidationBinance/automaticValidationBinance";
import FailedAutomaticValidationBinance from "./views/automaticValidation/AutomaticValidationBinance/failedAutomaticValidationBinance";
import ReadyAutomaticValidationBinance from "./views/automaticValidation/AutomaticValidationBinance/readyAutomaticValidationBinance";
import SuccessAutomaticValidationBinance from "./views/automaticValidation/AutomaticValidationBinance/successAutomaticValidationBinance";

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
          {/*Register*/}
          <Route path="/register" component={Register} />
          <Route path="/registerex" component={RegisterSecond} />
          <Route path="/verificationemail" component={EmailVerification} />
          <Route path="/account/activate" component={EmailVerificationActivate} />
          <Route path="/passrecover" component={PassRecover} />
          <Route path="/account/reset/finish" component={NewpassRecover} />
          <GuardedRoute path="/reputation"  exact component={Reputation}  auth={auth.loggedIn()}/>

          {/*Bussines*/}
          <GuardedRoute path="/mybusiness"  exact component={Business}  auth={auth.loggedIn()}/>
          <GuardedRoute path="/publicbusiness" exact component={PublicBusiness}  auth={auth.loggedIn()}/>
          <GuardedRoute path="/editmybusiness" component={EditMyBusiness} auth={auth.loggedIn()} />
          <GuardedRoute path="/slantedPublic" component={SlantedPublicBusiness} auth={auth.loggedIn()}/>

           {/*Profile*/}
          <GuardedRoute path="/myprofile" exact component={MyProfile}  auth={auth.loggedIn()} />
          <GuardedRoute path="/sharemyprofile" component={ShareMyProfile} auth={auth.loggedIn()}/>
          <GuardedRoute path="/publicprofile" exact component={PublicProfile} auth={auth.loggedIn()} />
          <Route path="/sesgado" component={Sesgado} auth={auth.loggedIn()} />
          <GuardedRoute path="/security" component={SecurityMobile} auth={auth.loggedIn()} />
          
           {/*Search*/}
          <GuardedRoute path="/categorySearch" exact component={CategorySearch} auth={auth.loggedIn()} />
          <GuardedRoute path="/search" exact component={Search}  auth={auth.loggedIn()} />

           {/*Administration*/}
          <GuardedRoute path="/admin/user" exact component={Users} auth={auth.loggedIn()}/>
          <GuardedRoute path="/admin/business" exact component={BusinessAdmin} auth={auth.loggedIn()}/>          
          <GuardedRoute path="/admin/dnis" exact component={AdminDni} auth={auth.loggedIn()}/>
          <GuardedRoute path="/admin/selfies" exact component={AdminSelfie} auth={auth.loggedIn()}/>
          <GuardedRoute path="/admin/direcciones" exact component={AdminAddress} auth={auth.loggedIn()}/>
          <GuardedRoute path="/admin/cuils" exact component={AdminCuil} auth={auth.loggedIn()}/>

           {/*manual validations*/}
         
          <GuardedRoute path="/validation/afip" exact component={AfipValidation} auth={auth.loggedIn()}/>
          <GuardedRoute path="/validation/direccion" exact component={DireccionValidation} auth={auth.loggedIn()}/>
          <GuardedRoute path="/validation/selfie" exact component={SelfieValidation} auth={auth.loggedIn()}/> 
          
          {/*automatic validations*/}
            {/*Phone*/}
              <GuardedRoute path="/automaticValidationphone" component={AutomaticValidationPhone} auth={auth.loggedIn()} />
              <GuardedRoute path="/welcomeAgainAutomaticvalidationphone" component={WelcomeAgainAutomaticValidationPhone} auth={auth.loggedIn()} />
              <GuardedRoute path="/completedAutomaticvalidationphone" component={CompletedAutomaticValidationPhone} auth={auth.loggedIn()} />

            {/*MercadoLibre*/}
              <GuardedRoute path="/automaticValidationmercadolibre" component={AutomaticValidationMercadoLibre} auth={auth.loggedIn()} />
              <GuardedRoute path="/failedAutomaticvalidationmercadolibre" component={FailedAutomaticValidationMercadoLibre} auth={auth.loggedIn()} />
              <GuardedRoute path="/readyAutomaticvalidationmercadolibre" component={ReadyAutomaticValidationMercadoLibre} auth={auth.loggedIn()} />
              <GuardedRoute path="/successAutomaticvalidationmercadolibre" component={SuccessAutomaticValidationMercadoLibre} auth={auth.loggedIn()} />

            {/*LinkedIn*/}
              <GuardedRoute path="/automaticValidationlinkedin" component={AutomaticValidationLinkedIn} auth={auth.loggedIn()} />
              <GuardedRoute path="/failedAutomaticvalidationlinkedin" component={FailedAutomaticValidationLinkedIn} auth={auth.loggedIn()} />
              <GuardedRoute path="/readyAutomaticvalidationlinkedin" component={ReadyAutomaticValidationLinkedIn} auth={auth.loggedIn()} />
              <GuardedRoute path="/successAutomaticvalidationlinkedin" component={SuccessAutomaticValidationLinkedIn} auth={auth.loggedIn()} />

            {/*Facebook*/}
              <GuardedRoute path="/automaticValidationFacebook" component={AutomaticValidationFacebook} auth={auth.loggedIn()} />
              <GuardedRoute path="/failedAutomaticValidationFacebook" component={FailedAutomaticValidationFacebook} auth={auth.loggedIn()} />
              <GuardedRoute path="/readyAutomaticValidationFacebook" component={ReadyAutomaticValidationFacebook} auth={auth.loggedIn()} />
              <GuardedRoute path="/successAutomaticValidationFacebook" component={SuccessAutomaticValidationFacebook} auth={auth.loggedIn()} />

            {/*Binance*/}
              <GuardedRoute path="/automaticValidationBinance" component={AutomaticValidationBinance} auth={auth.loggedIn()} />
              <GuardedRoute path="/failedAutomaticValidationBinance" component={FailedAutomaticValidationBinance} auth={auth.loggedIn()} />
              <GuardedRoute path="/readyAutomaticValidationBinance" component={ReadyAutomaticValidationBinance} auth={auth.loggedIn()} />
              <GuardedRoute path="/successAutomaticValidationBinance" component={SuccessAutomaticValidationBinance} auth={auth.loggedIn()} />

                {/*DNI*/}
                <GuardedRoute path="/validation/dni" exact component={DniValidation} auth={auth.loggedIn()}/>
                <GuardedRoute path="/validation/dniSuccess" exact component={DniValidationSuccess} auth={auth.loggedIn()}/>
                <GuardedRoute path="/validation/dniReady" exact component={DniValidationReady} auth={auth.loggedIn()}/>
                <GuardedRoute path="/validation/dniError" exact component={DniValidationError} auth={auth.loggedIn()}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
