import React from 'react';
import { Link } from 'react-router-dom';

// This is the example Navbar from class today
const Navbar = () => {
    return (
        <div className="navbar">
            <Link className='navLinks' to="/"> Home </Link>
            <Link className='navLinks' to="/buysell"> Buy/Sell </Link>
            <Link className='navLinks' to="/resources"> Resources </Link>
        </div>
    );
};

export default Navbar;

