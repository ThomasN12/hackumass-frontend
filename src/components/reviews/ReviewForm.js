import StarRatingCourse from "./StarRating";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ReviewForm = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitReview = (e) => {
    e.preventDefault();
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
            <div className="container bg-white review-form-wrapper">
              <div className="form-group">
                <div className="row">
                  <div className="col-4">
                    <StarRatingCourse />
                  </div>
                  <div className="col d-flex flex-column justify-content-between">
                    <div className="d-flex flex-row align-items-center ">
                      <div className="col fs-6">
                        <i className="bi bi-emoji-smile-fill"></i> How fun was this class
                        for you?
                        
                      </div>
                      <select className="form-select form-select-sm w-25">
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
                      <select className="form-select form-select-sm w-25">
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
                      <select className="form-select form-select-sm w-25">
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
                      <select className="form-select form-select-sm w-25">
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
                ></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitReview}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};



export default ReviewForm;
