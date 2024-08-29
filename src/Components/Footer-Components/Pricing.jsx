import React from "react";
import Navbar from "../Navbar-Components/Navbar";
import Footer from "./Footer";

import Modal from "./Modal";

import HackerRoomImage from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/hacker-room.png';
import scamImage from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/scam-img.png';
import mobileAppDev from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/android-mobile-app-development.png';
import professionalWeb from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/professional-web.png';
import portfolioWeb from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/portfolio-website.png';

import '.../portfolio.css';

import { AiTwotoneMessage } from "react-icons/ai";
import { PiPhoneCallDuotone } from "react-icons/pi";
import ScrollBasedReveal from "../Additional-Components/Scroll-based-reveal";

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalOpen = (e) => {
        e.preventDefault();
        openModal();
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <section className="section">
                <ScrollBasedReveal>
                    <div className="pricing-header"><b>Service Prices</b></div>
                    <div className="pricing-cards">
                        <div className="pricing-card">
                            <p className="pricing-title" 
                            style={{ 
                            width: '100%', 
                            margin: 'auto',
                            marginBottom: '15px',
                            marginTop: '15px'
                            }}>
                            Personal/Portfolio Website</p>
                            <img src={portfolioWeb} alt="pricing-web-dev" className="pricing-img" />
                            <div className="pricing-info">
                                <p className="pricing-title" style={{ textAlign: 'center' }}><b>Business</b></p>
                                <p className="pricing-title" style={{ fontSize: '20px' }}>KSH. 3500</p>
                                <p className="price-tag">
                                    <span>Desing and coding</span>
                                    <span>Content Updating</span>
                                    <span>Content Management</span>
                                    <span>Customer Support</span>
                                </p>
                                <button type="button" className="pricing-btn" onClick={handleModalOpen}>Inquire</button>
                            </div>
                        </div>
                        <div className="pricing-card">
                            <p className="pricing-title" 
                            style={{ 
                            width: '100%', 
                            margin: 'auto',
                            marginBottom: '15px',
                            marginTop: '15px' 
                            }}>Mobile App Development</p>
                            <img src={mobileAppDev} alt="pricing-web-dev" className="pricing-img" />
                            <div className="pricing-info">
                                <p className="pricing-title" style={{ textAlign: 'center' }}><b>Business</b></p>
                                <p className="pricing-title" style={{ fontSize: '20px' }}>KSH. 8500</p>
                                <p className="price-tag">
                                    <span>Design and Coding</span>
                                    <span>Content Management</span>
                                    <span>Customer Support</span>
                                </p>
                                <button type="button" className="pricing-btn" onClick={handleModalOpen}>Inquire</button>
                            </div>
                        </div>
                        <div className="pricing-card">
                            <p className="pricing-title" 
                            style={{ 
                            width: '100%', 
                            margin: 'auto',
                            marginBottom: '15px',
                            marginTop: '15px'
                            }}>
                            Professional Website</p>
                            <img src={professionalWeb} alt="pricing-web-dev" className="pricing-img" />
                            <div className="pricing-info">
                                <p className="pricing-title" style={{ textAlign: 'center' }}><b>Business</b></p>
                                <p className="pricing-title" style={{ fontSize: '20px' }}>KSH. 6500</p>
                                <p className="price-tag">
                                    <span>Design and coding</span>
                                    <span>Content Updating</span>
                                    <span>Content Management</span>
                                    <span>Customer Support</span>
                                </p>
                                <button type="button" className="pricing-btn" onClick={handleModalOpen}>Inquire</button>
                            </div>
                        </div>
                        <div className="pricing-card">
                            <p className="pricing-title" 
                            style={{ 
                            width: '100%', 
                            margin: 'auto',
                            marginBottom: '15px',
                            marginTop: '15px'
                            }}>Cybersecurity Services</p>
                            <img src={scamImage} alt="pricing-web-dev" className="pricing-img" />
                            <div className="pricing-info">
                                <p className="pricing-title" style={{ textAlign: 'center' }}><b>Business</b></p>
                                <p className="pricing-title" style={{ fontSize: '20px' }}>KSH. 5000</p>
                                <p className="price-tag">
                                    <span>Enhanced DDos protection</span>
                                    <span>Footprinting</span>
                                    <span>Cyber Reconnaissance</span>
                                    <span>Pen-testing</span>
                                    <span>Patching vulnerabilities</span>
                                </p>
                                <button type="button" className="pricing-btn" onClick={handleModalOpen}>Inquire</button>
                            </div>
                        </div>
                    </div>
                </ScrollBasedReveal>
            </section>

            <section className="section">
                <ScrollBasedReveal>
                    <div><Footer modalClick={handleModalOpen} /></div>
                </ScrollBasedReveal>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div id="nestedDiv1" className="nestedDiv">
                    <img className="modalImg" src={HackerRoomImage} alt="prof-pic" />
                </div>
                <div id="nestedDiv2" className="nestedDiv">
                    <p style={{ color: 'white' }}>Call/Text via WhatsApp on: </p>
                    <div>
                        <span><AiTwotoneMessage style={{ marginRight: '10px' }} size={'30px'} color={"black"} /></span>
                        <span><PiPhoneCallDuotone size={'30px'} color={"white"} /></span>
                    </div>
                    <p id="phoneNumber"><b>0705477493</b></p>
                </div>
            </Modal>
        </div>
    );
};

export default Pricing;