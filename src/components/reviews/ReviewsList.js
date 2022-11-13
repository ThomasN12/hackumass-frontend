import { useState, useEffect } from "react";
import axios from "axios";


const ReviewsList = (props) => {

  const [reviews, setReviews] = useState([]);

  // const updateReviews = (newReview) => {
  //   setReviews(prev => {
  //     prev.push(newReview)
  //     return prev
  //   })
  // }
  useEffect(() => {
    const baseUrl = process.env.REACT_APP_ROOT_API;
    axios.get(`${baseUrl}/review/${props.codeName}`).then(res => {
      const { data } = res;
      const { status } = data;
      if (status === 200)
      {
        // console.log(data.data);
        const foundReviews = data.data;
        const temp = foundReviews.map(review => {
          return {
            id: review._id,
            name: review.user.firstName + " " + review.user.lastName,
            text: review.content,
            rating: review.starRating,
            difficulty: review.difficultyRating,
            effort: review.effortLevel,
            fun: review.funRating,
            recommended: review.recommendRating,
          }
        });
        setReviews(temp);
        // toast.success(data.success);
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return reviews.map((r) => {
    return (
      <ReviewCard
        key={r.id}
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
    <div className="container d-flex justify-content-center my-5">
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

// const reviews = [
//   {
//     name: "Nhan",
//     text: "lop nhu cac",
//     rating: 1,
//     difficulty: 3,
//     effort: 2,
//     fun: 3,
//     recommended: 3,
//   },
//   {
//     name: "Steve",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore sed consequuntur, voluptatem deserunt dolores sequi quibusdam veniam? Nisi impedit odio omnis iure commodi, debitis magnam eligendi ullam sapiente nulla!",
//     rating: 2,
//     difficulty: 3,
//     effort: 2,
//     fun: 3,
//     recommended: 3,
//   },
//   {
//     name: "Thinh",
//     text: "lop nhu cac",
//     rating: 3,
//     difficulty: 3,
//     effort: 2,
//     fun: 3,
//     recommended: 3,
//   },
//   {
    // name: "Dang",
    // text: "lop nhu cac",
    // rating: 3,
    // difficulty: 3,
    // effort: 2,
    // fun: 3,
    // recommended: 3,
//   },
// ];

export default ReviewsList;
