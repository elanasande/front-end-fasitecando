import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      Header
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
