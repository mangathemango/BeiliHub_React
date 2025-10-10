import React, { useState } from "react";
import "./Question.css";

export default function Question() {
    const [selected, setSelected] = useState(null);

    const options = [
        "Asexually (Budding)",
        "Flashing the belly button",
        "Jaking it before bed",
        "Kissing the homies goodnight",
    ];

    return (
        <div className="question-card">
            <div className="question-box">
                <h2 className="question-title">Question 2</h2>
                <p className="question-text">
                    How does the typical mango <em>(Mangifera indica)</em> reproduce?
                </p>
            </div>
            <div className="options">
                {options.map((opt, index) => (
                    <button
                        key={index}
                        className={`option-btn ${selected === index ? "selected" : ""}`}
                        onClick={() => setSelected(index)}
                    >
                        <span className="option-num">{index + 1}</span>
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}
