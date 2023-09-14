import React from "react";

const Main = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-[90vh]">
            {/* Content on the left */}
            <div className="w-full md:w-1/2 p-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
                    Unlock Your Talents with HobbyHive: Explore, Connect, Create
                </h1>
                <p className="text-gray-700 text-lg md:text-xl mb-4 tracking-wider">
                    HobbyHive is a vibrant online platform that empowers
                    individuals to unleash their talents and discover their
                    passions.
                </p>
                <div className="space-x-4">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded tracking-wider">
                        Get Started
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded tracking-wider">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Image on the right */}
            {/* <div className="w-full md:w-1/2">
                <img
                    src="./public/logo.png"
                    alt="Illustration"
                    className="w-full h-auto"
                />
            </div> */}
        </div>
    );
};

export default Main;
