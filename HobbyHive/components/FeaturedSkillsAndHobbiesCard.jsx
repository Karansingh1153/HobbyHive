import React from "react";
import { NavLink } from "react-router-dom";

const FeaturedSkillsAndHobbiesCard = ({ title, description }) => {
    return (
        <>
            <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <NavLink to="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </NavLink>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </>
    );
};

export default FeaturedSkillsAndHobbiesCard;
