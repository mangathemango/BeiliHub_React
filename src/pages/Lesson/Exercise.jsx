import Question  from "./components/Question/Question";
import {useParams} from 'react-router-dom';
import React, { useState } from "react";
import CosmicBackground from "../../components/CosmicBackground/CosmicBackground";
const Exercise = () => {
    const { category, id } = useParams();
    const [quizData, setQuizData] = useState(null);
    React.useEffect(() => {
        import(`./${category}/lesson${id}/quiz.json`)
            .then((module) => setQuizData(module.default))
            .catch((error) => console.error("Error loading quiz data:", error));
    }, [category, id]);

    if (!quizData) {
        return <div>Loading quiz...</div>;
    }
    
    return <>
        <CosmicBackground />
        <Question quizData={quizData}></Question>
    </>
}

export default Exercise;