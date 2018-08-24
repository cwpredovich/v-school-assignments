import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Info from './Info.js';
import Services from './Services.js';
// import './App.css';
import Footer from './Footer.js';

const App = () => {
    return (
      <div>
        <Navbar />
        <Info />
        <Services />
        <Footer />
      </div>
    );
}

export default App;
