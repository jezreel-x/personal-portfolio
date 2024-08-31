import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../../portfolio.css';
import myImage from '../Assets/profile-photo.jpg';

const Navbar = () => {
    return (
        <section className="navbar-section">
            <div id="mainDiv">
                <div id="div1">
                    <div id="div2">
                        <img className="personalImage" src={myImage} alt="prof-pic" />
                        <h3 className="personal-portfolio">Personal Portfolio</h3>
                    </div>
                    <nav>
                        <ul>
                            <li className="nav-link">
                                <Link 
                                    style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'Georgia'}} 
                                    to="/" 
                                    className="custom-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link 
                                    style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'Georgia'}} 
                                    to="https:github.com/jezreel-x" 
                                    className="custom-link">
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div><Outlet /></div>
            </div>
        </section>    
        
    );
    
};

export default Navbar;
