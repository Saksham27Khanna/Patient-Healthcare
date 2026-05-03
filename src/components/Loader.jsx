import React from "react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">

            <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        </div>
    );
};

export default Loader;