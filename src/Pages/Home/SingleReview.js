import React from 'react';
import ReactStars from 'react-stars';

const SingleReview = ({review}) => {
    const {description, ratings} = review;
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">
                Ratings : {<ReactStars
                            value={ratings}
                            size={30}
                            half={true}
                        ></ReactStars>}
                </h2>
                <p>Comments: {description}</p>
            </div>
        </div>
    );
};

export default SingleReview;