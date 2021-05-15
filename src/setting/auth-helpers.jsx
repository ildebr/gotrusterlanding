
import client from './cliente';

const TOKEN_KEY = "id_token";

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken(e) {
  e.preventDefault();
  localStorage.removeItem(TOKEN_KEY);
  window.location = "/";
}

export async function getCurrentUser() {
    const URI ='';
  if (!getToken()) return false;
  try { 
  let response = await client.get(URI);
    return response.data;
  } catch (error) {
    return false;
  }
}

export function initAxiosInterceptors() {
    client.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        deleteToken();
        window.location = "/";
      } else {
        return Promise.reject(error);
      }
    }
  );
}