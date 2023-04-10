import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="container-fluid pt-3">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h1 className="display-4 fw-bolder">Discover Your Dream Job with <span className='text-primary '>EasyJobs</span></h1>
            <p className="lead fw-bold">Your One-Stop Shop for Employment Opportunities!</p>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
          <div className="col-md-6 text-center">
            <img src="human.png" alt="Human picture" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
