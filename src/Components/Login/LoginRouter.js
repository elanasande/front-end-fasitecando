import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Login';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';

const LoginRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdi" element={<LoginPasswordLost />} />
      </Routes>
    </div>
  );
};

export default LoginRouter;
