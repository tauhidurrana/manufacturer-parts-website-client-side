import React from 'react';

const Summary = () => {
  return (
    <div className='mt-20 mb-20'>
      <div className='text-center'>
        <h2 className=' text-4xl uppercase font-bold text-orange-500'>More than Million business Trust Us</h2>
        <h2 className='mt-5 text-xl font-semibold uppercase text-gree-500'>Always try to meet users expectation</h2>
      </div>


      <div class="stats shadow w-full mt-12">

        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title">Total Followers</div>
          <div class="stat-value text-primary">25.6K</div>
          <div class="stat-desc">5% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div class="stat-title">Clients</div>
          <div class="stat-value text-secondary">1.2M</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://api.lorem.space/image/face?w=128&h=128" />
              </div>
            </div>
          </div>
          <div class="stat-value">800+</div>
          <div class="stat-title">Feedbacks</div>
          <div class="stat-desc text-secondary">31 tasks remaining</div>
        </div>

      </div>
    </div>

  );
};

export default Summary;