import React from 'react';
import { TOKEN_POST, USER_GET } from '../api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json.data);
    console.log(json.data);
    setLogin(true);
  }

  async function userLogin(email, password) {
    const { url, options } = TOKEN_POST({
      email: email,
      password: password,
    });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem('token', token);
    console.log(token);
    getUser(1);
  }
  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
