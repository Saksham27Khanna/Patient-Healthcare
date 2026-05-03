import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Navbar */}
            <Navbar />

            <div className="flex flex-1 overflow-hidden">

                {/* Sidebar */}
                <Sidebar />

                {/* Page Content */}
                <div className="flex-1 p-3 sm:p-4 bg-gray-100 overflow-y-auto">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default MainLayout;