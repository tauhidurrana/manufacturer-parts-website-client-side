import React from 'react';
import computer from '../../Images/Banner/computer.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src={computer} className="w-full rounded-lg shadow-2xl " />
                </div>


                <div className="flex-1">
                    <h1 className="text-5xl font-bold">Your new smile starts here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <MainButton>Get Started</MainButton> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;