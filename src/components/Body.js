import { React } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className="grid grid-flow-col pt-20">
            <Sidebar />
            <Outlet /> {/* This will render the MainContainer component based on the route */}  
        </div>
    );
};

export default Body;