import "./Lesson5.css"
import Question from "../../components/Question/Question"
import quizData from "./quiz.json"

const Lesson5 = () => {
    return <div style={{ height: "400px" }}>
        <Question quizData={quizData}></Question>
    </div>
}

export default Lesson5;
            