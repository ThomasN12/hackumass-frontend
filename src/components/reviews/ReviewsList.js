import { useState } from "react";
const ReviewsList = (props) => {
  return reviews.map((r) => {
    return (
      <ReviewCard
        name={r.name}
        text={r.text}
        rating={r.rating}
        fun={r.fun}
        difficulty={r.difficulty}
        effort={r.effort}
        recommended={r.recommended}
      />
    );
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
      <div className="card w-50">
        <div className="card-body">
          <div className="card-text">Name: {props.name}</div>
          <div className="card-text">
            Rating: {props.rating}{" "}
            <i className="bi bi-star-fill text-warning"></i>
          </div>
          <div className="card-text">Review: {props.text}</div>
        </div>
        <div className="row d-flex justify-content-center">
          <button onClick={handleViewChange} className="btn btn-primary w-25">
            <i className="bi bi-chevron-double-right"></i>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="container d-flex justify-content-center">
      <div className="card w-50">
        <div className="card-body">
          <div className="card-text">
            Difficulty: {props.difficulty} <i className="bi bi-star-fill text-warning"></i>
          </div>
          <div className="card-text">
            Effort: {props.effort} <i className="bi bi-star-fill text-warning"></i>
          </div>
          <div className="card-text">
            Fun: {props.fun} <i className="bi bi-star-fill text-warning"></i>
          </div>
          <div className="card-text">
            Recommended: {props.recommended} <i className="bi bi-star-fill text-warning"></i>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <button onClick={handleViewChange} className="btn btn-primary w-25">
            <i className="bi bi-chevron-double-left"></i>
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
  {
    name: "Dang",
    text: "lop nhu cac",
    rating: 3,
    difficulty: 3,
    effort: 2,
    fun: 3,
    recommended: 3,
  },
];

export default ReviewsList;
