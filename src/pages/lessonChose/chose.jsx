import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./chose.css";
import htmlLogo from '../../assets/HTML5.png';
import cssLogo from '../../assets/CSS.png';
import jsLogo from '../../assets/JS.png';
import projectLogo from '../../assets/project.svg';

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
              { id: 1, name: "CSS 1: Intro & Selectors" },
              { id: 2, name: "CSS 2: Colors & Typography" },
              { id: 3, name: "CSS 3: Box Model & Display" },
        ],
    },
    {
        id: "html2",
        type: "html",
        title: "Phase 3",
        logo: "HTML",
        lessons: [
              { id: 6, name: "HTML 6: Forms Basics" },
              { id: 7, name: "HTML 7: Semantic HTML" },
        ],
    },
    {
        id: "css2",
        type: "css",
        title: "Phase 4",
        logo: "CSS",
        lessons: [
              { id: 4, name: "CSS 4: Positioning" },
              { id: 5, name: "CSS 5: Flexbox" },
              { id: 6, name: "CSS 6: Grid" },
              { id: 7, name: "CSS 7: Responsive Design" },
        ],
    },
    {
        id: "js1",
        type: "js",
        title: "Phase 5",
        logo: "JS",
        lessons: [
              { id: 1, name: "JS 1: Basics" },
              { id: 2, name: "JS 2: Functions & Events" },
              { id: 3, name: "JS 3: Conditionals & Loops" },
              { id: 4, name: "JS 4: DOM Basics" },
              { id: 5, name: "JS 5: Arrays & Objects" },
        ],
    },
    {
        id: "html3",
        type: "html",
        title: "Phase 6",
        logo: "HTML",
        lessons: [
              { id: 8, name: "HTML 8: Metadata & SEO" },
              { id: 9, name: "HTML 9: Embedded Content" },
              { id: 10, name: "HTML 10: Forms Advanced" },
        ],
    },
    {
        id: "css3",
        type: "css",
        title: "Phase 7",
        logo: "CSS",
        lessons: [
              { id: 8, name: "CSS 8: Transitions & Animations" },
              { id: 9, name: "CSS 9: Pseudo-classes & Elements" },
              { id: 10, name: "CSS 10: Advanced Styling" },
        ],
    },
    {
        id: "js2",
        type: "js",
        title: "Phase 8",
        logo: "JS",
        lessons: [
              { id: 6, name: "JS 6: Advanced DOM" },
              { id: 7, name: "JS 7: Local Storage" },
              { id: 8, name: "JS 8: Fetch API & Async" },
              { id: 9, name: "JS 9: ES6 Features" },
              { id: 10, name: "JS 10: Mini Projects Combo" },
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

    // Images are now imported above

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
                                                            <img 
                                                                src={
                                                                    tab.type === 'html' ? htmlLogo :
                                                                    tab.type === 'css' ? cssLogo :
                                                                    tab.type === 'js' ? jsLogo :
                                                                    tab.type === 'project' ? projectLogo : htmlLogo
                                                                }
                                                                alt={tab.label + " logo"}
                                                                style={{ width: 32, height: 32, objectFit: 'cover', borderRadius: 8 }} 
                                                            />
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
                                                                            <img 
                                                                                src={
                                                                                    phase.type === 'html' ? htmlLogo :
                                                                                    phase.type === 'css' ? cssLogo :
                                                                                    phase.type === 'js' ? jsLogo :
                                                                                    phase.type === 'project' ? projectLogo : htmlLogo
                                                                                }
                                                                                alt={phase.type + " logo"}
                                                                                style={{ width: 32, height: 32, objectFit: 'cover', borderRadius: 8 }} 
                                                                            />
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

