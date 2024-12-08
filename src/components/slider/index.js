import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import "./style.css";

const slider = [
    {
        image: "assets/banner.png",
        content: "On Your Side, For Every Step Of Your Healthcare Journey",
        subContent: "We Are Global Hospital",
    },
    {
        image: "assets/banner.png",
        content: "On Your Side, For Every Step Of Your Healthcare Journey",
        subContent: "Your Health Matters",
    },
    {
        image: "assets/banner.png",
        content: "On Your Side, For Every Step Of Your Healthcare Journey",
        subContent: "Quality Care for Everyone",
    },
];


const appointmentContent = [
    {
        icon: "assets/appointment_icon.png",
        content: "Book An Appointment",
    },
    {
        icon: "assets/doctor_icon.png",
        content: "<b>Doctors</b> For your Health Checkup",
    },
    {
        icon: "assets/hospital_icon.png",
        content: "<b>Our Hospitals</b> Multispecialty Services",
    },
    {
        icon: "assets/emergency_icon.png",
        content: "<b>Emergency Call</b> +91 92277 11852",
    },
];


const Slider = () => {
    return (
        <div className="slider-part">
            <div className="container"></div>
            <div className="slider_container">
                <Carousel
                    showThumbs={false}
                    autoPlay={false}
                    infiniteLoop={false}
                    interval={5000}
                    showIndicators={false}
                >
                    {slider.map((slide, index) => (
                        <div key={index}>
                            <img src={slide.image} alt={`banner-img-${index}`} className="slider-img" />
                            <div className="position-absolute text-container">
                                <h1 className="main-heading">{slide.content}</h1>
                                <p className="sub-heading">{slide.subContent}</p>
                                <div className="search-box">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for Doctors, Specialties and Hospitals"
                                    />
                                    <div className="search-box-icon">
                                        <img src="assets/search_icon.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>

                <div className="container appointment-cards mt-4 row">
                    {appointmentContent.map((item, index) => (
                        <div key={index} className="card text-center p-3 col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="d-flex gap-3 align-items-center justify-content-center">
                                <img
                                    src={item.icon}
                                    alt={`icon-${index}`}
                                    className="card-icon mb-3"
                                    style={{ height: "40px", width: "40px" }}
                                />
                                <div
                                    className="card-text"
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
