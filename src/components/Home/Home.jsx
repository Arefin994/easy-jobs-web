import React from 'react';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import JobCats from '../JobCats/JobCats';
import Jobs from '../Jobs/Jobs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCats></JobCats>
            <Jobs></Jobs>
            
        </div>
    );
};

export default Home;