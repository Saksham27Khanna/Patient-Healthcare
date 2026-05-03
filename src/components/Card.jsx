import React from "react";

const Card = ({ title, value, children }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition duration-200 w-full">

            {/* Title */}
            {title && (
                <h3 className="text-gray-500 text-xs sm:text-sm mb-2">
                    {title}
                </h3>
            )}

            {/* Main Value */}
            {value && (
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 wrap-break-word">
                    {value}
                </p>
            )}

            {/* Extra Content */}
            <div className="mt-2 text-sm sm:text-base">
                {children}
            </div>

        </div>
    );
};

export default Card;