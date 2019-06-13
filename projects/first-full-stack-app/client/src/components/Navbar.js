import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navLogoDiv">
                <Link to="/"><img className="navLogo" src={logo} alt="logo broken" /></Link>
            </div>
            <div className='navSection'>
                <Link className='navLinks' to="/"> Home </Link>
                <Link className='navLinks' to="/buysell"> Buy/Sell </Link>
                <Link className='navLinks' to="/resources"> Resources </Link>   
            </div>
        </div>
    );
};

export default Navbar;

