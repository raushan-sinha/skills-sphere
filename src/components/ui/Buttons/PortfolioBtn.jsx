import React from 'react';

const PortfolioBtn = ({ children, onClick }) => {
    return (
        <button className="px-3 py-1 sm:px-6 sm:py-2 md:px-7 md:py-2
        rounded-xl font-semibold text-black bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 shadow-md hover:shadow-xl active:scale-95
        tracking-wide select-none cursor-pointer"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default PortfolioBtn;