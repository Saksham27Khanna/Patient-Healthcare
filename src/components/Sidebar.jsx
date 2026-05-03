// import React from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//     const linkClass =
//         "block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100";

//     const activeClass = "bg-blue-500 text-white";

//     return (
//         <div className="w-64 h-screen bg-white shadow-md p-4">

//             <h2 className="text-lg font-bold mb-6">Menu</h2>

//             <nav className="flex flex-col gap-2">

//                 <NavLink
//                     to="/dashboard"
//                     className={({ isActive }) =>
//                         `${linkClass} ${isActive ? activeClass : ""}`
//                     }
//                 >
//                     Dashboard
//                 </NavLink>

//                 <NavLink
//                     to="/profile"
//                     className={({ isActive }) =>
//                         `${linkClass} ${isActive ? activeClass : ""}`
//                     }
//                 >
//                     Profile
//                 </NavLink>

//                 <NavLink
//                     to="/appointments"
//                     className={({ isActive }) =>
//                         `${linkClass} ${isActive ? activeClass : ""}`
//                     }
//                 >
//                     Appointments
//                 </NavLink>

//                 <NavLink
//                     to="/medications"
//                     className={({ isActive }) =>
//                         `${linkClass} ${isActive ? activeClass : ""}`
//                     }
//                 >
//                     Medications
//                 </NavLink>

//                 <NavLink
//                     to="/notes"
//                     className={({ isActive }) =>
//                         `${linkClass} ${isActive ? activeClass : ""}`
//                     }
//                 >
//                     Notes
//                 </NavLink>

//                 <NavLink
//                     to="/resources"
//                     className={({ isActive }) =>
//                         `${linkClass} ${isActive ? activeClass : ""}`
//                     }
//                 >
//                     Resources
//                 </NavLink>

//             </nav>
//         </div>
//     );
// };

// export default Sidebar;




import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass =
        "block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100";

    const activeClass = "bg-blue-500 text-white";

    return (
        <>
            {/* 🔥 Hamburger Button (Mobile Only) */}
            <div className="md:hidden p-6">
                <button onClick={() => setIsOpen(true)}>
                    ☰
                </button>
            </div>

            {/* 🔥 Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0  bg-opacity-30 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* 🔥 Sidebar */}
            <div
                className={`fixed md:static top-0 left-0 h-screen w-64 bg-white shadow-md p-4 z-50 transform transition-transform duration-300  
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >

                {/* 🔥 Close Button (Mobile Only) */}
                <div className="md:hidden flex justify-end mb-4">
                    <button onClick={() => setIsOpen(false)}>
                        ✕
                    </button>
                </div>

                <h2 className="text-lg font-bold mb-6">Menu</h2>

                <nav className="flex flex-col gap-2">

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Profile
                    </NavLink>

                    <NavLink
                        to="/appointments"
                        className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Appointments
                    </NavLink>

                    <NavLink
                        to="/medications"
                        className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Medications
                    </NavLink>

                    <NavLink
                        to="/notes"
                        className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Notes
                    </NavLink>

                    <NavLink
                        to="/resources"
                        className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Resources
                    </NavLink>

                </nav>
            </div>
        </>
    );
};

export default Sidebar;