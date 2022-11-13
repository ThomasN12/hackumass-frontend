import { Link } from "react-router-dom";
import "./CourseCard.css"
const CourseCard = (props) => {
    let num = props.index % 5 + 1;
    return (
        <div className={`course-card course-card-${num}`}>
            <div className="course-card__icon"><i className="fas fa-bolt"></i></div>
            <p className="course-card__exit"><i className="fas fa-times"></i></p>
            <h2 className="course-card__title">{props.codeName.toUpperCase()}: {props.fullName}</h2>
            <p className="course-card__apply">
                <Link className="course-card__link"
                    to={`/courses/${props.codeName.replace(/\s+/g, '')}`}
                    // state={{ codeName: props.codeName }}
                >Details<i className="fas fa-arrow-right"></i></Link>
            </p>
        </div>
    )
}

export default CourseCard;