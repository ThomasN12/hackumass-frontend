import StarRatingCourse from "./StarRating";
import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AuthContext from '../../store/auth-context';

function refreshPage() {
  window.location.reload(false);
}

const ReviewForm = (props) => {
  const ctx = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [funRating, setFunRating] = useState(1);
  const [effortLevel, setEffortLevel] = useState(1);
  const [difficultyRating, setDifficultyRating] = useState(1);
  const [recommendRating, setRecommendRating] = useState(1);
  const [content, setContent] = useState("");
  const [starRating, setStarRating] = useState(3);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRatingStar = (e) => {
    setStarRating(parseInt(e.target.id.slice(-1)));
  }
  const submitReview = (e) => {
    e.preventDefault();
    // const requestData = {
    //   difficultyRating,
    //   funRating,
    //   recommendRating,
    //   effortLevel,
    //   content,
    //   starRating
    // }
    console.log(starRating);
    const token = localStorage.getItem('token')
    let config = {
      headers: {
        'authorization': 'Bearer ' + token,
      }
    }
    const bodyParameters = {
      difficultyRating,
      funRating,
      recommendRating,
      effortLevel,
      content,
      starRating,
      course: props.codeName,
      user: ctx.userInfo._id,
    };
    const baseUrl = process.env.REACT_APP_ROOT_API;
    axios.post(`${baseUrl}/review`, bodyParameters, config).then(res => {

      const { data } = res;
      const { status } = data;
      if (status === 200)
      {
        const foundReview = {
          id: data.data._id,
          name: data.data.user.firstName + " " + data.data.user.lastName,
          text: data.data.content,
          rating: data.data.starRating,
          difficulty: data.data.difficultyRating,
          effort: data.data.effortLevel,
          fun: data.data.funRating,
          recommended: data.data.recommendedRating,
        }
        // console.log(foundReview)
        refreshPage();
        // props.onAddReview(foundReview);
      }
    }).catch(err => {
      // toast.success(err.message);
      console.log(err)
    })
    handleClose();
  };

  return (
    <div className="d-flex flex-row justify-content-center">
      <>
        <Button variant="success" onClick={handleShow}>
          Write/Edit your review <i className="bi bi-pencil-square"></i>
        </Button>

        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Write A Review</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form className="container bg-white review-form-wrapper">

              <div className="form-group">
                <div className="row">
                  <div className="col-4">
                    <StarRatingCourse onChangeValue={handleRatingStar} />
                  </div>
                  <div className="col d-flex flex-column justify-content-between">
                    <div className="d-flex flex-row align-items-center ">
                      <div className="col fs-6">
                        <i className="bi bi-emoji-smile-fill"></i> How fun was this class
                        for you?
                        
                      </div>
                      <select className="form-select form-select-sm w-25" onChange={event => setFunRating(parseInt(event.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <div className="col fs-6">
                        <i className="bi bi-gear-wide"></i> Rate your effort level
                        in this class:
                      </div>
                      <select className="form-select form-select-sm w-25" onChange={event => setEffortLevel(parseInt(event.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <div className="col fs-6">
                        <i className="bi bi-lungs-fill"></i> How difficult was this
                        class?
                      </div>
                      <select className="form-select form-select-sm w-25" onChange={event => setDifficultyRating(parseInt(event.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <div className="col fs-6">
                        <i className="bi bi-info-circle-fill"></i> How likely are
                        you to recommend this class to someone?
                      </div>
                      <select className="form-select form-select-sm w-25" onChange={event => setRecommendRating(parseInt(event.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <label for="exampleFormControlTextarea1">
                  Write your review:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  minLength="6"
                  required
                  onChange={event => setContent(event.target.value)}
                ></textarea>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button className="btn btn-primary" type="submit" onClick={submitReview}>
              Submit
            </button>
            </Modal.Footer>

        </Modal>
      </>
    </div>
  );
};



export default ReviewForm;
