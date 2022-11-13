import { Fragment } from "react";

import "./CourseDetail.css";
import "./Button.css";
const CourseDetail = (props) => {

    return (
        <Fragment>

            <div className="blog-container">

                {/* <div className="blog-header">
                    <div className="blog-cover">
                        <div className="blog-author">
                            <h3>Russ Beye</h3>
                        </div>
                    </div>
                </div> */}

                <div className="blog-body">
                    <div className="blog-title">
                        <h1><a href="#">{props.codeName}</a></h1>
                    </div>
                    <div className="blog-summary">
                        <p>{props.description}</p>
                    </div>
                    {/* <div className="blog-tags">
                        <ul>
                            <button className="button button--pan mx-2" onClick={props.onClick(true)}><span>Q&A</span></button>
                            <button className="button button--pan mx-2" onClick={props.onClick(false)}><span>Reviews</span></button>
                        </ul>
                    </div> */}
                </div>

                {/* <div className="blog-footer">
                </div> */}
            </div>
        </Fragment>

    )
}

export default CourseDetail;