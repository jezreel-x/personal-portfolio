import React from "react";
import Navbar from "../Navbar-Components/Navbar";
import mpesa from '.../Assets/mpesa-logo.png';
import paypal from '.../Assets/paypal.png';
import stanchart from '.../Assets/StanChart.png';
import bill from '.../Assets/bill.png';
import '../../portfolio.css';


import Footer from "./Footer";
import Modal from "./Modal";

import { AiTwotoneMessage } from "react-icons/ai";
import { PiPhoneCallDuotone } from "react-icons/pi";
import ScrollBasedReveal from "../Additional-Components/Scroll-based-reveal";


const Payments = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalOpen = (e) => {
        e.preventDefault();
        openModal();
    };

    return (
        <div className="payments-div">
            <div>
                <Navbar />
            </div>

            <section className="section">
                <ScrollBasedReveal>
                    <div className="payment-methods">
                        <p id="payment-methods-paragraph">Payment Methods</p>
                        <p id="payment-details-paragraph">Payment details will be disclosed in the invoice.</p>
                        <div className="div-payment-methods">
                            <a href="#" onClick={handleModalOpen} className="link-payment">
                                <img id="mpesa" src={mpesa} alt="mpesa logo" className="img-payment" />
                            </a>
                            <a href="https://www.paypal.com/ke/home" className="link-payment">
                                <img id="paypal" src={paypal} alt="mpesa logo" className="img-payment" />
                            </a>
                            <a href="https://www.sc.com/ke/" className="link-payment">
                                <img id="stanchart" src={stanchart} alt="mpesa logo" className="img-payment" />
                            </a>
                        </div>
                    </div>
                </ScrollBasedReveal>
            </section>
            
            <ScrollBasedReveal>
                <div><Footer modalClick={handleModalOpen} /></div>
            </ScrollBasedReveal>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div id="nestedDiv1" className="nestedDiv">
                    <img className="modalImg" src={bill} alt="prof-pic" />
                </div>
                <div id="nestedDiv2" className="nestedDiv">
                    <p style={{ color: 'white' }}>Send money to m-pesa via: </p>
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

export default Payments;