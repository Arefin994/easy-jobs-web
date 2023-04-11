import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AppliedJobs.css';

const AppliedJobs = () => {
    const [filter, setFilter] = useState('all');
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

    const handleShowDetails = (job) => {
        localStorage.setItem('jobDetails', JSON.stringify(job));
    }

    const handleFilter = (type) => {
        setFilter(type);
    }

    const filteredJobs = filter === 'remote' ? appliedJobs.filter(job => job.ot === 'Remote') :
        filter === 'onsite' ? appliedJobs.filter(job => job.ot === 'Onsite') :
            appliedJobs;

    return (
        <div>
            <div className='custom-bg'>
                <h3 className='p-5 text-center'>Job Applied</h3>
            </div>
            <div className='d-flex justify-content-end'>
                <button className={`btn mx-2 ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleFilter('all')}>All</button>
                <button className={`btn mx-2 ${filter === 'remote' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleFilter('remote')}>Remote</button>
                <button className={`btn mx-2 ${filter === 'onsite' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleFilter('onsite')}>Onsite</button>
            </div>
            <ul>
                {filteredJobs.map((job, index) => (
                    <div className='d-flex border rounded my-3 p-3 shadow'>
                        <div className='d-flex align-items-center'>
                            <img src={job.logoUrl} className="custom-img image-fluid rounded" alt={job.company} />
                        </div>
                        <div className='px-3'>
                            <h5>{job.title}</h5>
                            <h6>{job.company}</h6>
                            <div className='d-flex'>
                                <div className='me-2 my-2 border border-primary text-primary p-1 rounded-2'>{job.ot}</div>
                                <div className='me-2 my-2 border border-primary text-primary p-1 rounded-2'>{job.time}</div>
                            </div>
                            <div className='d-flex'>
                                <div className='d-flex my-auto'>
                                    <i class="fa-solid fa-location-dot mx-2 my-1"></i>
                                    <p>{job.address} </p>
                                </div>
                                <div className='d-flex my-auto'>
                                    <i className="far fa-money-bill-alt mx-2 my-1"></i>
                                    <p> {job.salary}</p>
                                </div>

                            </div>

                        </div>
                        <div className='ml-auto ms-auto my-auto'>
                            <Link to={{ pathname: '/jobDetails', state: { job } }}>
                                <button className='btn btn-primary' onClick={() => handleShowDetails(job)}>Show Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default AppliedJobs;