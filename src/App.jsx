// import { useState } from 'react';
// import reactLogo from './assets/img/react.svg';
// import viteLogo from '/vite.svg';
import React from 'react';
import AppRouter from './router';
import Navbar from './components/common/Navbar';
// import Footer from './components/common/Footer.jsx';
import './assets/styles/App.css';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <AppRouter />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
