import React from "react";
import "./style.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    return (
        <div className="header-part">
            <div className="main-header">
                <div className="container">
                    <div className="links">
                        <div className="social-icons">
                            <FaFacebookF className="icon" />
                            <FaTwitter className="icon" />
                            <FaLinkedinIn className="icon" />
                        </div>
                        <div className="contact">
                            <div className="contact-detail">
                                <FaPhoneVolume className="icon" />
                                <span>+91 92277 11855/56</span>
                            </div>
                            <div className="contact-detail">
                                <MdEmail className="icon" />
                                <span>info@globalhospital.co.in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-part">
                <div className="container">
                    <div className="header-start">
                        <div className="start">
                            <div className="logo">
                                <img src="/assets/logo 2.png" alt="Logo" />
                            </div>
                            <div className="links">
                                <ul className="listdata">
                                    <li>ABOUT</li>
                                    <li className="dropdown">
                                        SPECIALTIES
                                        <IoIosArrowDown className="arrow-icon" />
                                    </li>
                                    <li className="dropdown">
                                        SERVICES
                                        <IoIosArrowDown className="arrow-icon" />
                                    </li>
                                    <li>DEPARTMENT</li>
                                    <li>INTERNATIONAL PATIENT</li>
                                    <li>CONTACT</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;


