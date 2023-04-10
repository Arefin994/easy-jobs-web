import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">EasyJobs</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/statistics">Statitics</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/appliedJobs">Applied Jobs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary">Start Applying</button>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Nav;