import React from 'react';

const KnowMore = () => {
    return (
        <div className='mt-20 mb-10'>

            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold"> Reach us. <span className='text-orange-500'>Send your Query!</span> </h1>
                        <p class="py-6 text-xl">we are always here to know more from you.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your words</span>
                                </label>
                                <input type="text" placeholder="messege" class="input input-bordered" />
                                
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowMore;