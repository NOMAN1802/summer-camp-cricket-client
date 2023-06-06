/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const DashboardLayOut = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayOut;