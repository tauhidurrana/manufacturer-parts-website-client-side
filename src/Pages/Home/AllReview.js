import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const AllReview = () => {
    const [reviews, setReviews] = useState();

    useEffect(()=>{
        fetch('https://protected-thicket-60315.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-2xl font-semibold mb-10 uppercase text-orange-500'>All Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10'>
                {
                    reviews?.map(review=><SingleReview
                    key={review._id}
                    review = {review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default AllReview;