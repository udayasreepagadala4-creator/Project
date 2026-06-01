import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {

    return (

        <nav className="navbar">

            <div className="logo">
                Placement Portal
            </div>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/courses">Courses</Link>

                <Link to="/enquiry">Enquiry</Link>

                <Link to="/login">Login</Link>

                <Link to="/register">Register</Link>

                <Link to="/admin">Admin</Link>

            </div>

        </nav>
    );
}

export default Navbar;