import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserCreate from './UserCreate';
import UserDelete from './UserDelete';
import UserUpdate from './UserUpdate';
import UserList from './UserList';

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="criar" element={<UserCreate />} />
        <Route path="deletar" element={<UserDelete />} />
        <Route path="atualizar" element={<UserUpdate />} />
      </Routes>
    </div>
  );
};

export default User;
