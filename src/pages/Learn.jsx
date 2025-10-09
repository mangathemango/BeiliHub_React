import React, { useState, useEffect } from 'react';
import { lessons } from '../data/courses';

const Learn = () => {
    const [currentLessonId, setCurrentLessonId] = useState(lessons[0]?.id);
    const [points, setPoints] = useState(0);
    const [progress, setProgress] = useState({});
    const [showHints, setShowHints] = useState(false);
    const [quizAnswered, setQuizAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);

    // Load data from localStorage
    useEffect(() => {
        const savedPoints = localStorage.getItem('learnflow_points_v1');
        const savedProgress = localStorage.getItem('learnflow_progress_v1');

        if (savedPoints) setPoints(Number(savedPoints));
        if (savedProgress) setProgress(JSON.parse(savedProgress));
    }, []);

    // Save data to localStorage
    useEffect(() => {
        localStorage.setItem('learnflow_points_v1', points.toString());
    }, [points]);

    useEffect(() => {
        localStorage.setItem('learnflow_progress_v1', JSON.stringify(progress));
    }, [progress]);

    const currentLesson = lessons.find(l => l.id === currentLessonId);

    const completedCount = Object.keys(progress).length;
    const progressPercentage = Math.round((completedCount / lessons.length) * 100);

    const markLessonDone = (lessonId) => {
        setProgress(prev => ({ ...prev, [lessonId]: true }));
    };

    const addPoints = (pointsToAdd) => {
        setPoints(prev => prev + pointsToAdd);
    };

    const openLesson = (lessonId) => {
        setCurrentLessonId(lessonId);
        setShowHints(false);
        setQuizAnswered(false);
        setSelectedAnswer(null);
        setIsFlipped(false);
    };

    const handleQuizAnswer = (answerIndex) => {
        if (quizAnswered) return;

        setSelectedAnswer(answerIndex);
        setQuizAnswered(true);

        const isCorrect = answerIndex === currentLesson.quiz.answer;
        if (isCorrect) {
            addPoints(10);
            markLessonDone(currentLessonId);
        } else {
            addPoints(2);
        }
    };

    const handleMarkDone = () => {
        markLessonDone(currentLessonId);
        addPoints(5);
    };

    const goToNextLesson = () => {
        const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
        const nextIndex = (currentIndex + 1) % lessons.length;
        openLesson(lessons[nextIndex].id);
    };

    const goToPrevLesson = () => {
        const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
        const prevIndex = (currentIndex - 1 + lessons.length) % lessons.length;
        openLesson(lessons[prevIndex].id);
    };

    if (!currentLesson) return <div>Loading...</div>;

    return (
        <div className="container learn-grid">
            <aside className="lesson-list">
                <div style={{ marginBottom: '12px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--white)', fontWeight: 'bold' }}>Points: {points}</div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                        {progressPercentage}% complete
                    </div>
                </div>

                {lessons.map(lesson => (
                    <button
                        key={lesson.id}
                        className={`lesson-chip ${progress[lesson.id] ? 'completed' : ''}`}
                        onClick={() => openLesson(lesson.id)}
                    >
                        <div className="chip-title">{lesson.title}</div>
                        <div className="chip-meta">{lesson.topic} • {lesson.level}</div>
                    </button>
                ))}
            </aside>

            <div className="lesson-panel">
                <div className="lesson-header">
                    <div>
                        <h2 id="lessonTitle" style={{ margin: 0, color: 'var(--white)' }}>
                            {currentLesson.title}
                        </h2>
                        <div id="lessonMeta" className="muted">
                            {currentLesson.topic} • {currentLesson.level}
                        </div>
                    </div>
                </div>

                <div id="lessonBody">
                    {/* Reading Card */}
                    <div className="read-card">
                        <div
                            className="read-text"
                            dangerouslySetInnerHTML={{ __html: currentLesson.content }}
                        />
                        <div className="read-actions">
                            <button
                                className="btn outline"
                                onClick={() => setShowHints(!showHints)}
                            >
                                {showHints ? 'Hide hints' : 'Show hints'}
                            </button>
                            <button className="btn ghost" onClick={handleMarkDone}>
                                Mark done
                            </button>
                        </div>
                        {showHints && (
                            <div className="hints" style={{ display: 'block' }}>
                                <ul>
                                    {currentLesson.hints.map((hint, index) => (
                                        <li key={index}>{hint}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Flashcard */}
                    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                        <div className="card-front">Quick fact</div>
                        <div className="card-back">
                            <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
                        </div>
                        <button
                            className="btn outline flip"
                            onClick={() => setIsFlipped(!isFlipped)}
                        >
                            Flip
                        </button>
                    </div>

                    {/* Quiz */}
                    <div className="quiz-wrap">
                        <h3>Quiz: {currentLesson.quiz.q}</h3>
                        <div className="options">
                            {currentLesson.quiz.options.map((option, index) => (
                                <button
                                    key={index}
                                    className="chip"
                                    onClick={() => handleQuizAnswer(index)}
                                    disabled={quizAnswered}
                                    style={{
                                        opacity: quizAnswered && selectedAnswer !== index ? 0.5 : 1,
                                        backgroundColor: quizAnswered && index === currentLesson.quiz.answer
                                            ? 'rgba(0, 200, 100, 0.2)'
                                            : quizAnswered && selectedAnswer === index && index !== currentLesson.quiz.answer
                                                ? 'rgba(200, 0, 0, 0.2)'
                                                : 'transparent'
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {quizAnswered && (
                            <div className="quiz-result" style={{ display: 'block' }}>
                                <strong>
                                    {selectedAnswer === currentLesson.quiz.answer ? 'Correct!' : 'Not quite.'}
                                </strong>{' '}
                                {currentLesson.quiz.explanation}
                            </div>
                        )}
                    </div>
                </div>

                <div className="lesson-controls">
                    <button id="prevLesson" className="btn outline" onClick={goToPrevLesson}>
                        ← Previous
                    </button>
                    <button id="nextLesson" className="btn outline" onClick={goToNextLesson}>
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Learn;