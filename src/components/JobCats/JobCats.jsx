import React, { useState, useEffect } from 'react';

const JobCats = () => {
  const [jobCats, setJobCats] = useState([]);

  useEffect(() => {
    fetch('/public/job-cats.json')
      .then(response => response.json())
      .then(data => setJobCats(data));
  }, []);

  return (
    <div className="d-flex">
      
    </div>
  );
};

export default JobCats;
