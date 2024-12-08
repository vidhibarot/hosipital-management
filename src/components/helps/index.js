import React from "react";
import "./style.css"
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
                            <div className="content"></div>
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