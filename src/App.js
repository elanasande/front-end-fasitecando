import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/LoginRouter';
import styles from './App.css';
import { UserStorage } from './Contexts/UserContext';
function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes className={styles.routes}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/*" element={<Login />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
