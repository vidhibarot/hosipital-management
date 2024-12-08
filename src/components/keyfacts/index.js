import React from "react";
import "./style.css";

const keyFact = [
    { image: "assets/general_minimal_access_surgery.png", content: "General & minimal access surgery" },
    { image: "assets/surgical_gastroenterology.svg", content: "Surgical gastroenterology" },
    { image: "assets/ct_scan_1.png", content: "Medical gastroenterology" },
    { image: "assets/medicine_1.png", content: "General medicine" },
    { image: "assets/robotic_surgery_1.png", content: "Surgical Oncology" },
    { image: "assets/woman_1.png", content: "Medical Oncology" },
    { image: "assets/psychology _1.png", content: "Urosurgery" },
    { image: "assets/nephrology.png", content: "Nephrology" },
    { image: "assets/pain_in_joints_1.png", content: "Orthopaedics & joint replacement" },
    { image: "assets/mental_state.png", content: "Neuro & Spine Surgery" },
];

const KeyFacts = () => {
    return (
        <div className="container">
            <div className="personalized_sec text-center mb-5">
                <div>
                    <span className="d-block mb-3">Key Specialties</span>
                    <div className="key_special">
                        <h1 className="mb-3">Personalized healthcare solutions designed just for you</h1>
                        <button >View All</button>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 pb-5">
                {keyFact.map((fact, index) => (
                    <div key={index} className="col">
                        <div className="card h-100 d-flex p-3" style={{borderRadius: "10px"}}>
                            {fact?.image &&
                                <div className="text-center">
                                    <img src={fact?.image} alt={fact?.content} className="card-img-top" />
                                </div>}
                            <div className="card-body text-center p-0 mt-3">
                                <span className="card-title">{fact?.content}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFacts;