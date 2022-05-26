import React from 'react';
import computer from '../../Images/Banner/circuit.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src={computer} className="w-full rounded-lg shadow-2xl " />
                </div>


                <div className="flex-1">
                    <h1 className="text-5xl text-orange-400 font-bold uppercase">Next Generation <span className='text-green-500'>New Technology</span></h1>
                    <p className="py-6 text-gray-500 ">we manufacture computer parts with latest inventions for your better experience.</p>
                    {/* <MainButton>Get Started</MainButton> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;