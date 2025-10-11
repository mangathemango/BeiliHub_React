import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CosmicBackground from '../../components/CosmicBackground/CosmicBackground';
import './Results.css';

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [expandedQuestions, setExpandedQuestions] = useState(new Set());
    
    // Get results data from navigation state
    const { quizData, userAnswers, score } = location.state || {
        quizData: { title: "Quiz Results", questions: [] },
        userAnswers: [],
        score: 0
    };

    const totalQuestions = quizData.questions.length;
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    const getScoreColor = (percentage) => {
        if (percentage >= 80) return '#4CAF50'; // Green
        if (percentage >= 60) return '#FF9800'; // Orange
        return '#F44336'; // Red
    };

    const getScoreMessage = (percentage) => {
        if (percentage >= 80) return 'Excellent work!';
        if (percentage >= 60) return 'Good job!';
        return 'Keep practicing!';
    };

    const handleRetakeQuiz = () => {
        navigate(-1); // Go back to quiz
    };

    const handleBackToCourses = () => {
        navigate('/courses');
    };

    const toggleQuestionExpansion = (questionIndex) => {
        const newExpanded = new Set(expandedQuestions);
        if (newExpanded.has(questionIndex)) {
            newExpanded.delete(questionIndex);
        } else {
            newExpanded.add(questionIndex);
        }
        setExpandedQuestions(newExpanded);
    };

    return (
        <>
            <CosmicBackground variant="full" />
            <div className="results-container">
                <div className="results-header">
                    <h1>Results</h1>
                    <h2>{quizData.title}</h2>
                </div>

                <div className="score-summary">
                    <div className="score-circle" style={{ borderColor: getScoreColor(percentage), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="score-text" style={{ color: getScoreColor(percentage), fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', margin: '0 auto' }}>
                            {score}/{totalQuestions}
                        </span>
                    </div>
                    <p className="score-message" style={{ color: getScoreColor(percentage), textAlign: 'center' }}>
                        {getScoreMessage(percentage)}
                    </p>
                </div>

                <div className="questions-review">
                    {quizData.questions.map((question, index) => {
                        const userAnswer = userAnswers[index];
                        const isCorrect = userAnswer === question.correctAnswer;
                        const isExpanded = expandedQuestions.has(index);
                        
                        return (
                            <div key={question.id} className="question-result">
                                <div className="question-header">
                                    <h3>Question {index + 1}</h3>
                                    <div className="header-controls">
                                        <span className={`result-indicator ${isCorrect ? 'correct' : 'incorrect'}`}>
                                            {isCorrect ? '✓' : '✗'}
                                        </span>
                                        <button 
                                            className="dropdown-toggle"
                                            onClick={() => toggleQuestionExpansion(index)}
                                        >
                                            {isExpanded ? '▲' : '▼'}
                                        </button>
                                    </div>
                                </div>
                                
                                <p className="question-text">{question.question}</p>
                                
                                <div className="answer-section">
                                    {userAnswer !== undefined && (
                                        <div className={`user-answer ${isCorrect ? 'correct' : 'incorrect'}`}>
                                            <strong>Your Answer:</strong> {question.choices[userAnswer]}
                                        </div>
                                    )}
                                    
                                    {!isCorrect && (
                                        <div className="correct-answer">
                                            <strong>Correct Answer:</strong> {question.choices[question.correctAnswer]}
                                        </div>
                                    )}
                                </div>

                                <div className={`explanation ${!isExpanded ? 'collapsed' : ''}`}>
                                    <strong>Explanation:</strong>
                                    <p>{question.explanation}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="results-actions">
                    <button className="btn btn-secondary" onClick={handleRetakeQuiz}>
                        Retake Quiz
                    </button>
                    <button className="btn btn-primary" onClick={handleBackToCourses}>
                        Back to Courses
                    </button>
                </div>
            </div>
        </>
    );
};

export default Results;