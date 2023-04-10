import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FiMapPin } from 'react-icons/fi';

import './Jobs.css';

const Jobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch('/jobs.json')
      .then(response => response.json())
      .then(data => setFeaturedJobs(data.featuredJobs));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-3">Featured Jobs</h2>
      <p className='text-center mb-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="row row-cols-2 row-sm-cols-1 g-4">
        {featuredJobs.map((job, index) => (
          <div className="col" key={index}>
            <motion.div
              className="card job-card shadow-sm"
              whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <img src={job.logoUrl} className="card-img-top job-card-img" alt={job.company} />
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <div className="d-flex align-items-center job-card-icon">
                  <BsFillBriefcaseFill className="me-2" />
                  <p className="card-text">{job.company}</p>
                </div>
                <div className="d-flex align-items-center job-card-icon">
                  <FiMapPin className="me-2" />
                  <p className="card-text">{job.address}</p>
                </div>
                <div className="d-flex align-items-center job-card-icon">
                  <RiMoneyDollarCircleFill className="me-2" />
                  <p className="card-text">{job.salary} per year</p>
                </div>
                <button className='btn btn-primary my-2'>Show details</button>
              </div>
            </motion.div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
