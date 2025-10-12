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
            { id: 1, name: "HTML 1: placeholder" },
            { id: 2, name: "HTML 2: placeholder" },
            { id: 3, name: "HTML 3: placeholder" },
            { id: 4, name: "HTML 4: placeholder" },
            { id: 5, name: "HTML 5: placeholder" },
        ],
    },
    {
        id: "css1",
        type: "css",
        title: "Phase 2",
        logo: "CSS",
        lessons: [
            { id: 1, name: "CSS 1: placeholder" },
            { id: 2, name: "CSS 2: placeholder" },
            { id: 3, name: "CSS 3: placeholder" },
        ],
    },
    {
        id: "html2",
        type: "html",
        title: "Phase 3",
        logo: "HTML",
        lessons: [
            { id: 6, name: "HTML 6: placeholder" },
            { id: 7, name: "HTML 7: placeholder" },
        ],
    },
    {
        id: "css2",
        type: "css",
        title: "Phase 4",
        logo: "CSS",
        lessons: [
            { id: 4, name: "CSS 4: placeholder" },
            { id: 5, name: "CSS 5: placeholder" },
            { id: 6, name: "CSS 6: placeholder" },
            { id: 7, name: "CSS 7: placeholder" },
        ],
    },
    {
        id: "js1",
        type: "js",
        title: "Phase 5",
        logo: "JS",
        lessons: [
            { id: 1, name: "JS 1: placeholder" },
            { id: 2, name: "JS 2: placeholder" },
            { id: 3, name: "JS 3: placeholder" },
            { id: 4, name: "JS 4: placeholder" },
            { id: 5, name: "JS 5: placeholder" },
        ],
    },
    {
        id: "html3",
        type: "html",
        title: "Phase 6",
        logo: "HTML",
        lessons: [
            { id: 8, name: "HTML 8: placeholder" },
            { id: 9, name: "HTML 9: placeholder" },
            { id: 10, name: "HTML 10: placeholder" },
        ],
    },
    {
        id: "css3",
        type: "css",
        title: "Phase 7",
        logo: "CSS",
        lessons: [
            { id: 8, name: "CSS 8: placeholder" },
            { id: 9, name: "CSS 9: placeholder" },
            { id: 10, name: "CSS 10: placeholder" },
        ],
    },
    {
        id: "js2",
        type: "js",
        title: "Phase 8",
        logo: "JS",
        lessons: [
            { id: 6, name: "JS 6: placeholder" },
            { id: 7, name: "JS 7: placeholder" },
            { id: 8, name: "JS 8: placeholder" },
            { id: 9, name: "JS 9: placeholder" },
            { id: 10, name: "JS 10: placeholder" },
        ],
    },
    {
        id: "final",
        type: "project",
        title: "Final Project",
        logo: "HTML",
        lessons: [
            { id: 1, name: "Portfolio site with interactive features." },
        ],
    },
];

const tabOptions = [
    { type: "html", label: "HTML" },
    { type: "css", label: "CSS" },
    { type: "js", label: "JS" },
    { type: "project", label: "Final Project" }
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
        navigate(`/lesson/${phaseType}/lesson${lessonId}`);
    };

    const logoUrl = "https://www.shutterstock.com/image-vector/nerd-face-emoji-clever-emoticon-glasses-1514878724";

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
                                            className={`lesson-box ${phase.type === 'project' ? 'project' : phase.type}`}
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

