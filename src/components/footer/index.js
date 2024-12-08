
import React from "react";
import "./style.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
             <footer className="bg-opacity">
            <div className="footer-bg-opacity">
                <div className="container">
                    <div className="content">
                        <div className="content-data">
                        <div className="footer-section first-section">
                            <div className="logo-container">
                                <img src="/assets/logo 12.png" alt="Logo" className="footer-logo" />
                            </div>
                            <p className="footer-data-conetent">
                                Visit us for world-class medical services tailored to your needs – your health, our priority.
                            </p>
                            <div className="social-icons">
                                <FaFacebookF className="icon" />
                                <FaTwitter className="icon" />
                                <FaLinkedinIn className="icon" />
                            </div>
                        </div>

                        <div className="footer-section second-section">
                            <div className="quicklink">
                                <p className="quick-link">QUICK LINK</p>

                            </div>
                            <div className="listData">
                                <ul>
                                    <li>ABOUT</li>
                                    <li>SPECIALTIES</li>
                                    <li>SERVICES</li>
                                    <li>DEPARTMENT</li>
                                    <li>INTERNATIONAL PATIENT</li>
                                    <li>DEPARTMENT</li>
                                </ul>
                            </div>

                        </div>

                        <div className="footer-section third-section">
                        <div className="quicklink">
                                <p className="quick-link">CONTACT US</p>

                            </div>
                            <div className="address">
                                <div className="data1">
                                    <label className="label">LOCATION:</label>
                                    <div className="contentdata">Nr.Bodakbev Garden, Pakwan Cross Road, Nr.sindhubhavan Road, Off. S.G. Highway, Bodakdev, Ahmedabad-380054. Gujarat</div>
                                </div>
                                <div className="data1">
                                <label className="label">RECEPTION:</label>
                                <div className="contentdata">+91 92277 11855/56</div>
                                </div>
                                <div className="data1">
                                <label className="label">APPOITMENT:</label>
                                <div className="contentdata">+91 92277 11854</div>
                                </div>
                                <div className="data1">
                                <label className="label">EMERGENCY:</label>
                                <div className="contentdata">+91 92277 11852 </div>
                                </div>
                                <div className="data1">
                                <label className="label">EMAI:</label>
                                <div className="contentdata">xxxx@globalhospital.co.in </div>
                                </div>

                            </div>
                        </div>

                        </div>
                                           </div>

                  <div className="footer-border">
                        <div className="border-line"></div>
                        <div className="footer-border-content">
                            <div className="data">© Copyright 2024. All Rights Reserved.</div>
                            <div className="data">Design And Developed by <span className="span">Srashtasoft</span>.</div>

                        </div>
                    </div>  
                </div>
            </div>
        </footer>
        </>
       
    );
};

export default Footer;
