import React from "react";
import Navbar from "../Navbar-Components/Navbar";
import webDev from '../../Assets/web-development.png';
import cybersec from '../../Assets/cybersec-img.jpg';
import socialMedia from '../../Assets/social-media.jpg';
import '../../portfolio.css';
import Footer from "./Footer";

import HackerRoomImage from '../../Assets/hacker-room.png';

import Modal from "../Footer-Components/Modal";

import { AiTwotoneMessage } from "react-icons/ai";
import { PiPhoneCallDuotone } from "react-icons/pi";
import ScrollBasedReveal from "../Additional-Components/Scroll-based-reveal";


const About = ({ isOpen, onClose }) => {

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
                    <p 
                    className="web-dev-header-paragraph" 
                    style={{ 
                        marginLeft: '30px', 
                        fontSize: '20px', 
                        fontFamily: 'Georgia',
                        textAlign: 'center',
                        color: '#024950'
                    }}>
                        <b>Web Development</b>
                    </p>
                    <div className="web-dev-about-div">
                        <p className="web-dev-about-p1">
                            <b>
                            Welcome to my digital universe, where I transform your digital presence into a seamless and powerful 
                            experience, enhancing high-quality, lightning-fast, 
                            and professional web apps that elevate your online identity to new heights. <br /><br />
                            In today's dynamic and competitive digital landscape, a strong online presence is paramount. 
                            Whether you are an entrepreneur, a growing business, large or small, or an established enterprise, 
                            I am your dedicated partner in crafting websites that not only meet but exceed your 
                            expectations.
                            <br /><br />
                            Ready to embark on a journey of digital success? Let I be your guide. Contact me today, 
                            and let's turn your vision into a reality!
                            </b>
                        </p>
                        <img className="hacker-img" src={webDev} alt="web-img" />
                    </div>
                </ScrollBasedReveal>
            </section>

            <section className="section">
                <ScrollBasedReveal>
                    <div><hr style={{ width: '50%', alignSelf: 'center' }} /></div>
                    <p 
                    className="web-dev-header-paragraph" 
                    style={{ 
                        marginLeft: '30px', 
                        fontSize: '20px', 
                        fontFamily: 'Georgia',
                        color: '#024950',
                        marginTop: '20px',
                        textAlign: 'center',
                        marginBottom: '30px'
                    }}>
                        <b>Cybersecurity</b>
                    </p>
                    <div className="web-dev-about-div">
                        <img className="cyber-img" src={cybersec} alt="web-img" />
                        <p className="web-dev-about-p2">
                            <b>
                            Cybersecurity, by definition, is the practice of defending computers, servers, mobile devices, electronic systems, 
                            networks, and data from malicious attacks.
                            I take pride in ensuring digital systems are well protected from compromise and unauthorised access.
                            <br /><br />
                            In today's world where malicious threat actors conjure and enact advanced tactics,
                            it is imperative that those threats are mitigated and prevented through advanced technical skills
                            and tools as well.
                            Through, reconaissance, vulnerability assessments, pen-testing and bug bounty, I commit myself
                            to ensuring your digital realm is secure from online adversaries. 
                            <br /><br />
                            Are you willing to safeguard your digital systems to prevent compromise? Let me be your guide. Contact me today, 
                            and let's turn your vision into a reality!
                            </b>
                        </p>
                    </div>
                </ScrollBasedReveal>
            </section>
            
            <section className="section">
                <ScrollBasedReveal>
                    <div><hr style={{ width: '50%', alignSelf: 'center' }} /></div>
                    <p 
                    className="web-dev-header-paragraph" 
                    style={{ 
                        marginLeft: '30px', 
                        fontSize: '20px', 
                        fontFamily: 'Georgia',
                        color: '#024950',
                        marginTop: '20px',
                        textAlign: 'center',
                        marginBottom: '30px'
                    }}>
                        <b>Mobile App Dev</b>
                    </p>
                    <div className="web-dev-about-div">
                        <p className="web-dev-about-p3">
                            <b>
                            Just like your favorite mobile applications, I utilize the power of React Native - a React 
                            based framework that enables developers create native cross-platform apps at a go.
                            <br /><br />
                            Whether you're an Android or iOS user, you're in for an appealing User Interface and a seamless
                            yet captivating user experience.
                            <br /><br />
                            The result? We produce meaningful outcomes for you that break barriers in the tech industry. 
                            Ready to embark on a journey of digital success? Let I be your guide. Contact me today, 
                            and let's turn your vision into a reality!
                            </b>
                        </p>
                        <img className="cyber-img" src={socialMedia} alt="web-img" />
                    </div>
                </ScrollBasedReveal>
            </section>

            <section className="section">
                <div>
                    <Footer modalClick={handleModalOpen}/>
                </div>
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

export default About;