import React from 'react';
import Navber from '../shear/Navber';
import { Outlet } from 'react-router';
import Footer from '../Pages/Homepages/Footer';
const Mainlayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;