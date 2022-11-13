import { Fragment } from "react";
import { useParams } from "react-router-dom";
import CourseDetail from "../components/CourseDetail";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
    useEffect(() => handleCourseDetailApi(), [])
    const updateCourseQuestions = () => {
        handleCourseDetailApi()
    }
    return (
        <Fragment>
            <CourseDetail codeName={courseData ? courseData.codeName.toUpperCase() : ""} description={courseData ? courseData.description : ""}  />
            <Question courseName={params.codeName} courseQuestions={courseQuestions} onUpdateCourseQuestions={updateCourseQuestions} />
            <ReviewsList />
        </Fragment>
    )
}

export default CourseDetailPanel;
