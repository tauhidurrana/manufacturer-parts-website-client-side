import React from 'react';
import Footer from '../../Shared/Footer';
import AllReview from './AllReview';
import Banner from './Banner';
import FuturePlan from './FuturePlan';
import Products from './Products';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <FuturePlan></FuturePlan>
            <AllReview></AllReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;