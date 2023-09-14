import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center gap-2">
                        <div className="w-7 h-7">
                            <img
                                src="../public/main-logo.png"
                                alt="HobbyHive Logo"
                                className="text-indigo-700"
                            />
                        </div>
                        <span className="self-center tracking-widest text-xl font-semibold whitespace-nowrap dark:text-white">
                            HobbyHive
                        </span>
                    </NavLink>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${
                            isMenuOpen ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-sans -tracking-tighter flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    className="block py-2 pl-3 pr-4 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 dark:text-white md:dark:text-indigo-500"
                                    activeClassName="hover:bg-indigo-700"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    activeClassName="hover:bg-gray-100"
                                >
                                    Explore
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    activeClassName="hover:bg-gray-100"
                                >
                                    Resources
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    activeClassName="hover:bg-gray-100"
                                >
                                    Community
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    activeClassName="hover:bg-gray-100"
                                >
                                    Workshops & Webinars
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    activeClassName="hover:bg-gray-100"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    activeClassName="hover:bg-gray-100"
                                >
                                    FAQs
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`${
                            isMenuOpen ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium -tracking-tighter flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <div className="flex lg:gap-5">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        activeClassName="hover:bg-gray-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        activeClassName="hover:bg-gray-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        activeClassName="hover:bg-gray-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                                        </svg>
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
