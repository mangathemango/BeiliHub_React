import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";

export default function Question({ quizData }) {
    const [selected, setSelected] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const navigate = useNavigate();

    // Default to empty array if no quiz data is provided
    if (!quizData || !quizData.questions) {
        return <div>No quiz data available</div>;
    }

    const totalQuestions = quizData.questions.length;

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            // Save current answer before moving
            if (selected !== null) {
                setUserAnswers(prev => ({ ...prev, [currentQuestion]: selected }));
            }
            setCurrentQuestion(currentQuestion - 1);
            // Load previous answer if it exists
            setSelected(userAnswers[currentQuestion - 1] ?? null);
        }
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions - 1) {
            // Save current answer before moving
            if (selected !== null) {
                setUserAnswers(prev => ({ ...prev, [currentQuestion]: selected }));
            }
            setCurrentQuestion(currentQuestion + 1);
            // Load next answer if it exists
            setSelected(userAnswers[currentQuestion + 1] ?? null);
        }
    };

    const handleSubmit = () => {
        // Save final answer
        const finalAnswers = { ...userAnswers };
        if (selected !== null) {
            finalAnswers[currentQuestion] = selected;
        }

        // Calculate score
        let score = 0;
        const answersArray = [];
        
        for (let i = 0; i < totalQuestions; i++) {
            const userAnswer = finalAnswers[i];
            answersArray.push(userAnswer);
            if (userAnswer !== undefined && userAnswer === quizData.questions[i].correctAnswer) {
                score++;
            }
        }

        // Navigate to results page with data
        navigate('/results', {
            state: {
                quizData,
                userAnswers: answersArray,
                score
            }
        });
    };

    return (
        <>
            <div className="header">
                <h1 className="quiz-title">Quiz</h1>
                <p className="quiz-description">{quizData.title}</p>
            </div>
            <div className="question-container">
                <button 
                    className="nav-btn prev-btn side-btn" 
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                >
                    <i class="fa-solid fa-chevron-left"></i>
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

                    <div className="question-indicators">
                        {Array.from({ length: totalQuestions }, (_, index) => (
                            <div
                                key={index}
                                className={`indicator-dot ${index === currentQuestion ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </div>

                <button 
                    className="nav-btn next-btn side-btn" 
                    onClick={handleNext}
                    disabled={currentQuestion === totalQuestions - 1}
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>

            {/* Separate Submit Button Container */}
            <div className={`external-submit-container ${currentQuestion === totalQuestions - 1 ? 'visible' : ''}`}>
                <button 
                    className="submit-btn-external" 
                    onClick={handleSubmit}
                >
                    Submit Quiz
                </button>
            </div>
        </>
    );
}
