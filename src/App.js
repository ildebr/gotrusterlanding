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
import DniValidation from "./views/manualValidations/dniValidation";
import AfipValidation from "./views/manualValidations/afipValidation";
import SecurityMobile from "./views/seccurity/securityMobile";
import Sesgado from "./views/sesgado/sesgado";
import DireccionValidation from "./views/manualValidations/direccionValidation";
import SelfieValidation from "./views/manualValidations/selfieValidation";
import AutomaticValidationPhone from "./views/automaticValidation/automaticValidationPhone";
import AutomaticValidationMercadoLibre from "./views/automaticValidation/automaticValidationMercadoLibre";
import AutomaticValidationLinkedIn from "./views/automaticValidation/automaticValidationLinkedIn";
import AutomaticValidationFacebook from "./views/automaticValidation/automaticValidationFacebook";

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
          <GuardedRoute path="/validation/dni" exact component={DniValidation} auth={auth.loggedIn()}/>
          <GuardedRoute path="/validation/afip" exact component={AfipValidation} auth={auth.loggedIn()}/>
          <GuardedRoute path="/validation/direccion" exact component={DireccionValidation} auth={auth.loggedIn()}/>
          <GuardedRoute path="/validation/selfie" exact component={SelfieValidation} auth={auth.loggedIn()}/> 
          
            {/*automatic validations*/}
          <GuardedRoute path="/automaticvalidationphone" component={AutomaticValidationPhone} auth={auth.loggedIn()} />
          <GuardedRoute path="/automaticvalidationmercadolibre" component={AutomaticValidationMercadoLibre} auth={auth.loggedIn()} />
          <GuardedRoute path="/automaticvalidationlinkedin" component={AutomaticValidationLinkedIn} auth={auth.loggedIn()} />
          <GuardedRoute path="/automaticValidationFacebook" component={AutomaticValidationFacebook} auth={auth.loggedIn()} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
