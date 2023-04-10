import React from 'react';
import './ShowDetails.css'

const ShowDetails = () => {
  const jobDetails = JSON.parse(localStorage.getItem('jobDetails'));
  console.log(jobDetails);

  const handleApplyNow = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    const isJobAlreadyApplied = appliedJobs.some(job => job.title === jobDetails.title);
    if (isJobAlreadyApplied) {
      alert('This job has already been applied for!');
    } else {
      appliedJobs.push(jobDetails);
      localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
      alert('Job Applied Successfully!');
    }
  }

  return (
    <div>
      <div className='custom-bg'>
        <h3 className='p-5 text-center'>Job Details</h3>
      </div>

      <div className='d-flex'>
        <div className='w-75 p-4'>
          <p><span className='fw-bold'>Job Description: </span>{jobDetails.description}</p>
          <p><span className='fw-bold'>Job responsibility: </span>{jobDetails.responsibility}</p>
          <p><span className='fw-bold'> Educational Requirements: </span>{jobDetails.description}</p>
          <p><span className='fw-bold'>Job experience: </span>{jobDetails.experience}</p>
        </div>
        <div className='w-25 p-4 custom-bg'>
          <div>
            <h5 className='fw-bolder py-2'>Job Details</h5>
            <hr />
            <div>
              <h6><span className='fw-bold'>Salary: </span> {jobDetails.salary}</h6>
              <h6><span className='fw-bold'>Job Title: </span>{jobDetails.title}</h6>
            </div>
            <h5 className='fw-bolder py-2'>Contact Information</h5>
            <hr />
            <div>
              <h6><span className='fw-bold'>Phone: </span>{jobDetails.contact.phone}</h6>
              <h6><span className='fw-bold'>Email: </span>{jobDetails.contact.email}</h6>
              <h6><span className='fw-bold'>Address: </span>{jobDetails.address}</h6>
            </div>
          </div>
          <button className='btn' onClick={handleApplyNow}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
