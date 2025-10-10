import { useParams } from "react-router-dom";
import React from "react"

function Lesson() {
    const { category, id } = useParams();

    // Dynamically import the lesson component
    const LessonComponent = React.lazy(() =>
        import(`./${category}/lesson${id}/Lesson${id}.jsx`)
    );

    return (
        <React.Suspense fallback={<p>Loading lesson...</p>}>
            <LessonComponent />
        </React.Suspense>
    );
}

export default Lesson;
