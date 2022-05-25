import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='text-2xl, text-center font-bold'>MY PORTFOLIO</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
                <div class="card w-full bg-indigo-200 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Personal info:</h2>
                        <h2 class="card-title">Tauhidur Rahman Rana</h2>
                        <p>tauhidurrahman.rana@gmail.com</p>
                        <p>Habiganj, Sylhet</p>
                    </div>
                </div>

                <div class="card w-full bg-indigo-200 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Education:</h2>
                        <h2 class="card-title">B.Sc.(Hon's) in CSE</h2>
                        <p>Leading University</p>
                    </div>
                </div>

                <div class="card w-full bg-indigo-200 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">List of Technologies:</h2>
                        <p>HTML, CSS, Javascript, ReactJS, Nodejs, ExpressJS, Mongodb, firebase authentication</p>
                    </div>
                </div>

                <div class="card w-full bg-indigo-200 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Skills:</h2>
                        <p>HTML, CSS, Javascript, ReactJS, Nodejs, ExpressJS, Mongodb, firebase authentication, photoshop</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;