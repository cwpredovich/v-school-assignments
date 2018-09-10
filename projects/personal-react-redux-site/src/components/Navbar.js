import React from 'react';
import { Link } from 'react-router-dom';

// This is the example Navbar from class today
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"> Home </Link>
            <Link to="/stocks"> Stock Quotes </Link>
            <Link to="/resources"> Resources </Link>
        </div>
    );
};

export default Navbar;

