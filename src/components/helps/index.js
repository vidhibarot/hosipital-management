import React from "react";
import "./style.css"
import { FaTwitter } from "react-icons/fa";

const Help = () => {
    return (
        <div className="Help-part">
            <div className="help-parts-data">
                <div className="help-part1">
                    <div className="container">
                        <div className="help-content">
                            <div className="image">
                                <img src="/assets/Group.png"></img>
                            </div>
                            <div className="help-content-start">
                                <div className="help-content-data">Need Help</div>
                                <div className="paragraph">For enquiries please call</div>
                                <div className="content-button">
                                    <div className="button">
                                        <FaTwitter className="icon" />
                                        <span className="help-span"> +91 92277 11854
                                        </span>
                                    </div>
                                    <div className="button">
                                        <FaTwitter className="icon" />
                                        <span className="help-span"> +91 XXXXXXXXXX
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="help-part2">
                    <div className="container">
                        <div className="part2-content">
                            <div className="appoitment">Book An Appointment</div>
                            <div className="dummytext">Dummy text of the printing and typesetting industry. </div>
                            <div className="button">
                                Book An Appointment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help