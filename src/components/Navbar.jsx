import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const initial = user?.name ? user.name.charAt(0).toUpperCase() : "P";

    return (
        <div className="w-full h-16 bg-blue-600 text-white flex items-center justify-between px-4 sm:px-6 shadow-md relative py-5">

            {/* Left */}
            <h1 className="text-lg sm:text-xl font-bold leading-tight">
                <span className="block sm:inline">HealthCare</span>
                <span className="block sm:inline sm:ml-1">App</span>
            </h1>

            {/* Right */}
            <div className="relative">

                {/* 👤 Profile Button */}
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base">
                        {initial}
                    </div>

                    {/* Hide name on very small screens */}
                    <span className="text-xs sm:text-sm hidden xs:block sm:block">
                        {user?.name || "Patient"}
                    </span>
                </div>

                {/* 🔽 Dropdown */}
                {open && (
                    <div className="absolute right-0 mt-3 w-36 sm:w-40 bg-white text-black rounded-lg shadow-lg py-2 z-50">

                        <p className="px-4 py-2 text-xs sm:text-sm border-b truncate">
                            {user?.name || "Patient"}
                        </p>

                        <button
                            onClick={() => navigate("/profile")}
                            className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-gray-100"
                        >
                            View Profile
                        </button>

                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 text-red-500"
                        >
                            Logout
                        </button>

                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;