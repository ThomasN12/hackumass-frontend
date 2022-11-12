import "./CourseCard.css"
const CourseCard = (props) => {
    let num = props.index % 5 + 1;
    return (
        <div className={`card card-${num}`}>
            <div className="card__icon"><i className="fas fa-bolt"></i></div>
            <p className="card__exit"><i className="fas fa-times"></i></p>
            <h2 className="card__title">{props.codeName}: {props.fullName}</h2>
            <p className="card__apply">
                <a className="card__link" href="#">Details<i className="fas fa-arrow-right"></i></a>
            </p>
        </div>
    )
}

export default CourseCard;