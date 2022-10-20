import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './Footer';
import Sale from "./Sale";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <Sale />
        </>
    );
};

export default Layout;