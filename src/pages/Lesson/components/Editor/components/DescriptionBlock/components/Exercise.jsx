import React, { useState } from 'react';

const Exercise = ({
    children,
    questions = [],
    onComplete,
    className = ''
}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [showExplanations, setShowExplanations] = useState(false);

    // Default questions if none provided
    const defaultQuestions = [
        {
            id: 1,
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Home Tool Markup Language",
                "Hyperlink and Text Markup Language"
            ],
            correct: 0,
            explanation: "HTML stands for Hyper Text Markup Language. It's the standard markup language for creating web pages."
        },
        {
            id: 2,
            question: "Which CSS property is used to change the text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "foreground-color"
            ],
            correct: 2,
            explanation: "The 'color' property is used to set the text color in CSS."
        },
        {
            id: 3,
            question: "What is the correct way to create a function in JavaScript?",
            options: [
                "function = myFunction() {}",
                "function myFunction() {}",
                "create myFunction() {}",
                "def myFunction() {}"
            ],
            correct: 1,
            explanation: "The correct syntax is 'function myFunction() {}' to declare a function in JavaScript."
        },
        {
            id: 4,
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<href>",
                "<a>",
                "<url>"
            ],
            correct: 2,
            explanation: "The <a> tag (anchor tag) is used to create hyperlinks in HTML."
        },
        {
            id: 5,
            question: "What does CSS stand for?",
            options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets"
            ],
            correct: 1,
            explanation: "CSS stands for Cascading Style Sheets, used to style HTML elements."
        }
    ];

    const quizQuestions = questions.length > 0 ? questions : defaultQuestions;

    // Handle answer selection
    const handleAnswerSelect = (questionIndex, optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionIndex]: optionIndex
        }));
    };

    // Calculate score
    const calculateScore = () => {
        let correct = 0;
        quizQuestions.forEach((question, index) => {
            if (answers[index] === question.correct) {
                correct++;
            }
        });
        return {
            correct,
            total: quizQuestions.length,
            percentage: Math.round((correct / quizQuestions.length) * 100)
        };
    };

    // Handle quiz completion
    const handleComplete = () => {
        setShowResults(true);
        const score = calculateScore();
        if (onComplete) {
            onComplete(score);
        }
    };

    // Reset quiz
    const handleReset = () => {
        setAnswers({});
        setShowResults(false);
        setShowExplanations(false);
        setCurrentQuestion(0);
    };

    // Navigate between questions
    const goToQuestion = (index) => {
        setCurrentQuestion(index);
    };

    const nextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const score = showResults ? calculateScore() : null;

    return (
        <div className={`exercise-container ${className}`} data-quiz>
            <div className="quiz-header">
                <h2>🧠 Knowledge Check</h2>
                <div className="quiz-progress">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${((Object.keys(answers).length) / quizQuestions.length) * 100}%`
                            }}
                        ></div>
                    </div>
                    <span className="progress-text">
                        {Object.keys(answers).length} of {quizQuestions.length} answered
                    </span>
                </div>
            </div>

            {!showResults ? (
                <div className="quiz-content">
                    <div className="question-navigation">
                        {quizQuestions.map((_, index) => (
                            <button
                                key={index}
                                className={`question-nav-btn ${index === currentQuestion ? 'active' : ''
                                    } ${answers[index] !== undefined ? 'answered' : ''}`}
                                onClick={() => goToQuestion(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <div className="question-card">
                        <div className="question-header">
                            <span className="question-number">
                                Question {currentQuestion + 1} of {quizQuestions.length}
                            </span>
                        </div>

                        <h3 className="question-text">
                            {quizQuestions[currentQuestion].question}
                        </h3>

                        <div className="question-options">
                            {quizQuestions[currentQuestion].options.map((option, index) => (
                                <label key={index} className="option-label">
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion}`}
                                        value={index}
                                        checked={answers[currentQuestion] === index}
                                        onChange={() => handleAnswerSelect(currentQuestion, index)}
                                    />
                                    <span className="option-text">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="question-controls">
                        <button
                            className="btn secondary"
                            onClick={prevQuestion}
                            disabled={currentQuestion === 0}
                        >
                            ← Previous
                        </button>

                        {currentQuestion === quizQuestions.length - 1 ? (
                            <button
                                className="btn primary"
                                onClick={handleComplete}
                                disabled={Object.keys(answers).length < quizQuestions.length}
                            >
                                Complete Quiz
                            </button>
                        ) : (
                            <button
                                className="btn primary"
                                onClick={nextQuestion}
                            >
                                Next →
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="quiz-results">
                    <div className="score-display">
                        <div className="score-circle">
                            <div className="score-number">{score.percentage}%</div>
                            <div className="score-text">
                                {score.correct} of {score.total} correct
                            </div>
                        </div>
                        <div className="score-message">
                            {score.percentage >= 80 ? '🎉 Excellent work!' :
                                score.percentage >= 60 ? '👍 Good job!' :
                                    '💪 Keep practicing!'}
                        </div>
                    </div>

                    <div className="results-actions">
                        <button
                            className="btn secondary"
                            onClick={() => setShowExplanations(!showExplanations)}
                        >
                            {showExplanations ? 'Hide' : 'Show'} Explanations
                        </button>
                        <button
                            className="btn primary"
                            onClick={handleReset}
                        >
                            Take Again
                        </button>
                    </div>

                    {showExplanations && (
                        <div className="explanations">
                            <h3>📚 Explanations</h3>
                            {quizQuestions.map((question, index) => (
                                <div key={index} className="explanation-item">
                                    <div className="explanation-header">
                                        <span className="question-number">Q{index + 1}</span>
                                        <span className={`answer-status ${answers[index] === question.correct ? 'correct' : 'incorrect'
                                            }`}>
                                            {answers[index] === question.correct ? '✅' : '❌'}
                                        </span>
                                    </div>
                                    <div className="explanation-question">{question.question}</div>
                                    <div className="explanation-answer">
                                        <strong>Correct Answer:</strong> {question.options[question.correct]}
                                    </div>
                                    <div className="explanation-text">{question.explanation}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {children && (
                <div className="quiz-additional-content">
                    {children}
                </div>
            )}
        </div>
    );
};

Exercise.displayName = 'Exercise';

export default Exercise;