import React from 'react';
import { TOKEN_POST, USER_GET } from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    await setData(json.data);
    setLogin(true);
  }

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(1);
      navigate('/user');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }
  const userLogout = React.useCallback(
    async function () {
      await setData(null);
      setError(null);
      setLoading(false);
      await setLogin(false);
      await window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, login, data, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
