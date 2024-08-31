import React from "react";
// import webDev from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/web-development.png';
import airhousing from '.../Assets/yellow.png';
import calc from '.../Assets/calculator.jpg';
import reverseShell from '.../Assets/reverse-shell.jpg';
import { DiTerminal } from "react-icons/di";
import { CiCalculator2 } from "react-icons/ci";

import '../../portfolio.css';

// import Footer from "./Footer";


const Projects = () => {

    const buttonStyles = {
        width: '140px',
        borderRadius: '16px',
        backgroundColor: 'aqua',
        border: '1px solid #888',
        padding: '8px',
        boxShadow: '5px 5px 12px #888',
        alignSelf: 'center',
        marginBottom: '20px'
    };

    return (
        <div>
            <div id="serviceDiv">
                <h1 style={{ fontFamily: 'Georgia', color: '#024950' }}>Latest Projects</h1>
            </div>
            <div id="serviceBody">
                <div className="card" id="card1">
                        <img className="web-dev" src={airhousing} alt="air-housing" />
                        {/* <DiJavascript1 style={{ alignSelf: 'center' }} size={40} color="aqua" /> */}
                        <p style={{ 
                            fontFamily: 'Georgia', 
                            color: 'aqua', 
                            fontWeight: 'bold', 
                            fontSize: '15px',
                            alignSelf: 'center',
                            marginTop: '16px',
                            marginBottom: '16px'
                        }}><i>Property Manager App</i></p>
                        <p style={{ 
                            display: 'flex',
                            fontFamily: 'Georgia', 
                            color: 'aqua', 
                            fontWeight: 'bold', 
                            fontSize: '15px',
                            width: "90%",
                            alignSelf: 'center',
                            marginLeft: '10px',
                            marginTop: '16px',
                            marginBottom: '16px'
                        }}>This app increases property manager engagement with their clients tremendously.
                            The manager can be able to monitor tenants who've moved in to their property, he can be 
                            able to bill them accordingly, he can also be able to manage invoices after a 
                            transaction and so much more.
                        </p>
                        <button className="btn" style={buttonStyles} type="button">
                            <a href="https://github.com/jezreel-x/PropertyManagerApp" 
                            style={{ 
                            color: '#024970', 
                            textDecoration: 'none',
                            fontFamily: 'Georgia', 
                            fontWeight: 'bold'  
                            }}>Find out more</a>
                        </button>
                </div>
                <div className="card" id="card1">
                    <img className="web-dev" src={calc} alt="web-development" />
                    <CiCalculator2 style={{ alignSelf: 'center', marginTop: '16px' }} size={40} color="aqua" />
                    <p style={{ 
                        fontFamily: 'Georgia', 
                        color: 'aqua', 
                        fontWeight: 'bold', 
                        fontSize: '15px',
                        alignSelf: 'center',
                        marginTop: '16px',
                        marginBottom: '16px',
                        width: '90%'
                    }}><span><i>Calculator App.</i></span>
                        <p>A simple calculator with simple mathematical operations implemented
                        by simple mathematical logic and principles.
                        </p>
                        </p>
                    <button className="btn" style={buttonStyles} type="button">
                        <a href="https://github.com/jezreel-x/calculator_app/tree/master/Calculator%20App"
                        style={{ 
                        color: '#024970', 
                        fontFamily: 'Georgia', 
                        fontWeight: 'bold',
                        textDecoration: 'none'
                        }}>Find out more</a>
                    </button>
                </div>
                <div className="card" id="card1">
                    <img className="web-dev" src={reverseShell} alt="reverse-shell" />
                    <DiTerminal style={{ alignSelf: 'center', marginTop: '16px' }} size={40} color="aqua" />
                    <p style={{ 
                        fontFamily: 'Georgia', 
                        color: 'aqua', 
                        fontWeight: 'bold', 
                        fontSize: '15px',
                        alignSelf: 'center',
                        marginTop: '16px',
                        marginBottom: '16px',
                        width: '90%'
                    }}><span style={{ alignSelf: 'center' }}><i>Reverse-shell Program.</i></span>
                        <p>
                        Written in Python, the program allows one to leverage a target's 
                        system vulnerabilities to initiate a remote shell session and access the victim's computer.
                        </p> 
                        </p>
                    <button className="btn" style={buttonStyles} type="button">
                        <a href="https://github.com/jezreel-x/Reverse-shell-program"
                        style={{ 
                        color: '#024970', 
                        fontFamily: 'Georgia', 
                        fontWeight: 'bold',
                        textDecoration: 'none'
                        }}>Find out more</a>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Projects;