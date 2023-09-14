import { NavLink, Navigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/register",
                formData
            );
            console.log("User registered:", response.data);
            setMessage(response.data.message);
        } catch (error) {
            console.log(formData);
            console.error("Error registering user:", error);
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({});
            }
        }
    };

    return (
        <>
            <div className="flex h-[100vh] gap-0 md:flex-row sm:flex flex-col justify-center items-center px-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-50 w-auto"
                        src="../public/logo.png"
                        alt="HobbyHive"
                    />
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                    <form
                        className="mt-10 space-y-6"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            {message && (
                                <p className="text-green-600 font-semibold text-lg flex justify-center py-4 pb-6">
                                    {message}
                                    <Navigate to={"/"} />
                                </p>
                            )}
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                {errors.email && (
                                    <p className="error text-red-600 font-semibold text-sm flex justify-center py-4 pb-6">
                                        {errors.email[0]}
                                    </p>
                                )}
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-indigo-600"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                {errors.password && (
                                    <p className="error text-red-600 font-semibold text-sm flex justify-center py-4 pb-6">
                                        {errors.password[0]}
                                    </p>
                                )}
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none focus-ring caret-indigo-600"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have account?{" "}
                        <a
                            href="#"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            <NavLink to="/login">Sign in</NavLink>
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
