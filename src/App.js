import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/login/login';
import Register from './views/register/register';

import './App.css';

function App() {
  return (
    <div className="App" >
         <Router>
                    <Route exact path="/" render={() => {
                        return <div>
                            <Login/>
                        </div>
                    }}>
                    </Route>
                    <Switch>
                        <Route path="/register" component={Register}/>                        
                        
                    </Switch>

                  

                </Router>
    </div>
  );
}

export default App;
