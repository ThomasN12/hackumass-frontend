import { useState } from "react";
const ReviewsList = (props) => {
  return reviews.map((r) => {
    return <ReviewCard 
      name={r.name}
      text={r.text} 
      rating={r.rating} 
      fun={r.fun}
      difficulty={r.difficulty}
      effort={r.effort}
      recommended={r.recommended}
    />;
  });
};

const ReviewCard = (props) => {
  const [viewFront, setViewFront] = useState(true);
  const handleViewChange = (e) => {
    e.preventDefault();
    setViewFront(!viewFront);
  };
  return viewFront ? (
    <div className="container d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <div className="card-text">Name: {props.name}</div>
          <div className="card-text">
            Rating: {props.rating}
            <div className="progress w-50">
              <div
                className="progress-bar progress-bar-striped"
                style={{ width: (props.rating / 5) * 100 + "%" }}
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {props.rating}
              </div>
            </div>
          </div>
          <div className="card-text">Review: {props.text}</div>
        </div>
        <div className="row d-flex justify-content-center">
          <button onClick={handleViewChange} className="btn btn-primary w-25">
            More
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="container d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <div className="card-text">Difficulty: {props.difficulty}</div>
          <div className="card-text">Effort: {props.effort}</div>
          <div className="card-text">Fun: {props.fun}</div>
          <div className="card-text">Recommended: {props.recommended}</div>
        </div>
        <div className="row d-flex justify-content-center">
          <button onClick={handleViewChange} className="btn btn-primary w-25">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    name: "Nhan",
    text: "lop nhu cac",
    rating: 1,
    difficulty: 3,
    effort: 2,
    fun: 3,
    recommended: 3,
  },
  {
    name: "Steve",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore sed consequuntur, voluptatem deserunt dolores sequi quibusdam veniam? Nisi impedit odio omnis iure commodi, debitis magnam eligendi ullam sapiente nulla!",
    rating: 2,
    difficulty: 3,
    effort: 2,
    fun: 3,
    recommended: 3,
  },
  {
    name: "Thinh",
    text: "lop nhu cac",
    rating: 3,
    difficulty: 3,
    effort: 2,
    fun: 3,
    recommended: 3,
  },
];

export default ReviewsList;
