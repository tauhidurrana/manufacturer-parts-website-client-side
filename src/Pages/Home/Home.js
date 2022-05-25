import React from 'react';
import AllReview from './AllReview';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <AllReview></AllReview>
        </div>
    );
};

export default Home;