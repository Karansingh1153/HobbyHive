import React from "react";
import { NavLink } from "react-router-dom";

const WhatWeOfferCard = ({ title, description, linkText, imageUrl }) => {
    return (
        <div className="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <NavLink to="/">
                <img className="rounded-t-lg" src={imageUrl} alt="" />
            </NavLink>
            <div className="p-5">
                <NavLink to="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </NavLink>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <NavLink
                    to="/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                    {linkText}
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </NavLink>
            </div>
        </div>
    );
};

export default WhatWeOfferCard;
