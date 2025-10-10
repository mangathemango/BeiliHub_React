import React, { useState } from "react";
import "./Question.css";

export default function Question({ quizData }) {
    const [selected, setSelected] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // Default to empty array if no quiz data is provided
    if (!quizData || !quizData.questions) {
        return <div>No quiz data available</div>;
    }

    const totalQuestions = quizData.questions.length;

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelected(null); // Reset selection for new question
        }
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected(null); // Reset selection for new question
        }
    };

    return (
        <div className="question-container">
            <button 
                className="nav-btn prev-btn side-btn" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
            >
                ←
            </button>

            <div className="question-card">

                <div className="question-box">
                    <h2 className="question-title">Question {currentQuestion + 1}</h2>
                    <p className="question-text">
                        {quizData.questions[currentQuestion].question}
                    </p>
                </div>
                
                <div className="options">
                    {quizData.questions[currentQuestion].choices.map((choice, index) => (
                        <button
                            key={index}
                            className={`option-btn ${selected === index ? "selected" : ""}`}
                            onClick={() => setSelected(index)}
                        >
                            <span className="option-num">{index + 1}</span>
                            {choice}
                        </button>
                    ))}
                </div>
            </div>

            <button 
                className="nav-btn next-btn side-btn" 
                onClick={handleNext}
                disabled={currentQuestion === totalQuestions - 1}
            >
                →
            </button>
        </div>
    );
}
