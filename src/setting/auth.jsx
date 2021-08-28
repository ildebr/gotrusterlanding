/* import client from './cliente'; */
import { AccountAuth } from './../services/hostConfig';
import { setToken } from './auth-helpers'

const URI = AccountAuth();
const { localStorage } = global.window;

const auth = {
  login( username, password ) {
     if (auth.loggedIn()) {
      return Promise.resolve(true);
    } 
    return fetch(URI, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": password,
        "rememberMe": true,
        "username": username
      })
    })
      .then(response => {
        console.log(response)
        if (response !==''){
        return response.json();
        } else{
        return null;
        }
      })
       .then(response => {
        setToken(response.id_token);
       
      })  
      .catch(() => {
        localStorage.removeItem('id_token');
      });
  },

  logout() {
    /* localStorage.removeItem('id_token'); */
    localStorage.clear();
    return Promise.resolve(true);
  },

  loggedIn() {
    return !!localStorage.id_token;
  },
  userData() {
    return localStorage.id_token ? JSON.parse(localStorage.id_token) : null;
  },
};

export default auth;