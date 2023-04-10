import React from 'react';

const Job = ({ job }) => {
  return (
    <div className="card">
      <img src={job.logoUrl} className="card-img-top" alt={job.company} />
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{job.company}</p>
        <p className="card-text">{job.address}</p>
        <p className="card-text">{job.salary} per year</p>
      </div>
    </div>
  );
};

export default Job;
