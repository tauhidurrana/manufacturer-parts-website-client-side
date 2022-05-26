import React from 'react';
import future1 from '../../Images/Banner/future-1.jpg';
import robot from '../../Images/Banner/robot.jpg';

const FuturePlan = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-4xl text-center uppercase font-bold text-green-500 mb-10 mt-10'>Our Future Plan</h2>
            <div className='flex'>
                <div className=''>
                    <img src={robot} alt="" />
                </div>

                <div className='flex justify-center items-center'>
                    <h1 className='text-5xl text-orange-600 font-bold uppercase'>Intelligent factory Robot</h1>
                </div>
            </div>
        </div>
    );
};

export default FuturePlan;