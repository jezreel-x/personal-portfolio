import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/portfolio.css';
import myImage from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/profile-photo.jpg';

const Navbar = () => {
    return (
        <div id="mainDiv">
            <div id="div1">
                <div id="div2">
                    <img src={myImage} alt="prof-pic" />
                    <h3 className="personal-portfolio">Personal Portfolio</h3>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link className="custom-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="custom-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="custom-link" to="/services">Services</Link>
                        </li>
                        <li>
                            <Link className="custom-link" to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link className="custom-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div><Outlet /></div>
        </div>
    );
};

export default Navbar;