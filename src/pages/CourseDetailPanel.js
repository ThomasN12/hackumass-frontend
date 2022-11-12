import { Fragment } from "react";
import { useParams } from "react-router-dom";
import CourseDetail from "../components/CourseDetail";
// import Question from "../components/questionsAnswers/Question";
import Comment from "../components/comment/Comment";
const CourseDetailPanel = () => {
    const params = useParams();
    const { codeName } = params;
    console.log(codeName);
    return (
        <Fragment>
            <CourseDetail codeName={codeName} />
            {/* <Question /> */}
            <Comment />
        </Fragment>
    )
}

export default CourseDetailPanel;