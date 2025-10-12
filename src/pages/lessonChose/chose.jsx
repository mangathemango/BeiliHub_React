import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./chose.css";

const phases = [
    {
        id: "html1",
        type: "html",
        title: "Phase 1",
        logo: "HTML",
        lessons: [
            { id: 1, name: "HTML 1: First Page" },
            { id: 2, name: "HTML 2: Text Formatting" },
            { id: 3, name: "HTML 3: Links & Navigation" },
            { id: 4, name: "HTML 4: Images & Media" },
            { id: 5, name: "HTML 5: Lists & Tables" },
        ],
    },
    {
        id: "css1",
        type: "css",
        title: "Phase 2",
        logo: "CSS",
        lessons: [
            { id: 1, name: "CSS 1: Introduction to CSS" },
            { id: 2, name: "CSS 2: CSS Selectors & Properties" },
            { id: 3, name: "CSS 3: Box Model & Layout" },
            { id: 4, name: "CSS 4: Styling Text & Fonts" },
            { id: 5, name: "CSS 5: Responsive Design & Media Queries" },
        ],
    },
    {
        id: "js1",
        type: "js",
        title: "Phase 3",
        logo: "JS",
        lessons: [
            { id: 1, name: "JS 1: Introduction to JavaScript" },
            { id: 2, name: "JS 2: Variables & Data Types" },
            { id: 3, name: "JS 3: Functions & Control Flow" },
        ],
    },
    {
        id: "html2",
        type: "html",
        title: "Phase 4",
        logo: "HTML",
        lessons: [
            { id: 6, name: "HTML 6: Forms Basics" },
            { id: 7, name: "HTML 7: Semantic HTML" },
        ],
    },
];

const logoUrl = "https://www.shutterstock.com/image-vector/nerd-face-emoji-clever-emoticon-glasses-1514878724";
const tabOptions = [
    { type: "html", label: "HTML" },
    { type: "css", label: "CSS" },
    { type: "js", label: "JS" },
];

const LessonChose = () => {
    const [selectedTab, setSelectedTab] = useState(null);
    const navigate = useNavigate();

    const handleTabClick = (type) => {
        setSelectedTab((prev) => (prev === type ? null : type));
    };

    const filteredPhases = selectedTab
        ? phases.filter((phase) => phase.type === selectedTab)
        : phases;

    const handleLessonClick = (phaseType, lessonId) => {
        // Example navigation, adjust route as needed
        navigate(`/lesson/${phaseType}/lesson${lessonId}`);
    };

    return (
        <div className="lesson-chose-container">
            <h1 className="lesson-chose-title" style={{ marginBottom: '16px' }}>Lessons</h1>
            <div className="lesson-chose-main-row">
                <div className="lesson-chose-tabs side">
                    {tabOptions.map((tab) => (
                        <button
                            key={tab.type}
                            className={`tab-btn ${tab.type} ${selectedTab === tab.type ? "selected" : ""}`}
                            onClick={() => handleTabClick(tab.type)}
                        >
                            <span className="phase-logo">
                              <img src={logoUrl} alt="logo" style={{ width: 32, height: 32, objectFit: 'cover', borderRadius: 8 }} />
                            </span>
                        </button>
                    ))}
                </div>
                <div className="lesson-phases-scroll">
                    <div className="lesson-phases">
                        {filteredPhases.map((phase) => (
                            <div key={phase.id} className="phase-card">
                                <div className={`phase-header ${phase.type}`}> 
                                    <span className="phase-logo">
                                      <img src={logoUrl} alt="logo" style={{ width: 32, height: 32, objectFit: 'cover', borderRadius: 8 }} />
                                    </span>
                                    {phase.title}
                                </div>
                                <div className="phase-lessons">
                                    {phase.lessons.map((lesson) => (
                                        <div
                                            key={lesson.id}
                                            className={`lesson-box ${phase.type}`}
                                            onClick={() => handleLessonClick(phase.type, lesson.id)}
                                        >
                                            {lesson.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonChose;