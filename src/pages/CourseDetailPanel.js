import { Fragment } from "react";
import { useParams } from "react-router-dom";
import CourseDetail from "../components/CourseDetail";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

// import Question from "../components/questionsAnswers/Question";
import Question from "../components/question/Question";
import ReviewsList from "../components/reviews/ReviewsList";
import ReviewForm from "../components/reviews/ReviewForm";

const CourseDetailPanel = () => {
    const params = useParams();
    const [courseData, setCourseData] = useState(null);
    const [courseQuestions, setCourseQuestions] = useState([]);
    const [isQuestion, setIsQuestion] = useState(true);
    const handleCourseDetailApi = () => {
        const { codeName } = params;
        // console.log(codeName);
        const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.get(`${baseUrl}/course/${codeName.toLowerCase()}`).then(res => {
            const { data } = res;
            const { status } = data;
            if (status === 200)
            {
                setCourseData(data.data);
                setCourseQuestions(data.data.questions);
                console.log(data.data);
            }
        }).catch(err => {
        })
    }

    // const handleClick = (boo) => {
    //     setIsQuestion(prev => boo);
    // }
    useEffect(() => handleCourseDetailApi(), [])
    const updateCourseQuestions = () => {
        handleCourseDetailApi()
    }

    // const addReviewHandler = (newReview) => {

    // }
     return (
        <Fragment>
            <CourseDetail codeName={courseData ? courseData.codeName.toUpperCase() : ""} description={courseData ? courseData.description : ""} />
            <div className="blog-tags">
                <ul>
                    <button className="button button--pan mx-2" onClick={prev => setIsQuestion(true)}><span>Q&A</span></button>
                    <button className="button button--pan mx-2" onClick={prev => setIsQuestion(false)}><span>Reviews</span></button>
                </ul>
            </div>
            {isQuestion ? <Question courseName={params.codeName} courseQuestions={courseQuestions} onUpdateCourseQuestions={updateCourseQuestions} /> :
                <>
                    <ReviewForm codeName={courseData ? courseData.codeName.toLowerCase() : ""} />
                    <ReviewsList codeName={courseData ? courseData.codeName.toLowerCase() : ""} />
                </>
            }
        </Fragment>
    )
}

export default CourseDetailPanel;
