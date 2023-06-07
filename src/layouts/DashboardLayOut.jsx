/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import { Helmet } from 'react-helmet';

const DashboardLayOut = () => {
    return (
        <div>
            <Helmet>
                <title>SH75 Academy | Dashboard</title>
            </Helmet>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayOut;