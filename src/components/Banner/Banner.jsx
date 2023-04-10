import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="container-fluid pt-3 ">
                <div class="row align-items-center">
                    <div class="col-md-6 text-left ">
                        <h1 class="display-4 fw-bolder">Discover Your Dream Job with <span className='text-primary '>EasyJobs</span></h1>
                        <p class="lead fw-bold">Your One-Stop Shop for Employment Opportunities!</p>
                        <button class="btn btn-primary btn-lg">Get Started</button>
                    </div>
                    <div class="col-md-6">
                        <img src="https://via.placeholder.com/500x500" alt="Human picture" class="img-fluid" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;