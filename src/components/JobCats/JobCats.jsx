import React, { useState, useEffect } from 'react';

const JobCats = () => {
    const [jobCats, setJobCats] = useState([]);

    useEffect(() => {
        fetch('/jobCats.json')
            .then(response => response.json())
            .then(data => setJobCats(data.categories));
    }, []);

    return (
        <div className='text-center my-5'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="d-md-flex p-3">

                {jobCats.map((cat, index) => (
                    <div className="me-4 bg-light p-4 rounded-4 my-2 shadow" key={index}>
                        <img className='border border-danger rounded-4' src={cat["img-link"]} alt={cat.name} />
                        <h4>{cat.name}</h4>
                        <p>{cat.jobsAvailable} Jobs Available</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCats;
