import React from "react";
import WhatWeOfferCard from "./WhatWeOfferCard";

const WhatWeOffer = () => {
    // Define the content for each card
    const cards = [
        {
            title: "Skill Bartering",
            description:
                "Discover a vast array of skills offered by fellow members of our community. Exchange your expertise with others in a one-on-one or group setting. Learn from real people, just like you, who are passionate about sharing their knowledge.",
            linkText: "Read more",
            imageUrl: "../public/logo.png",
        },
        {
            title: "Virtual Hobby Exchanges",
            description:
                " Explore new hobbies and interests by connecting with enthusiasts who are eager to collaborate and learn together. Dive into exciting hobby projects and foster creativity within our supportive community.",
            linkText: "Read more",
            imageUrl: "../public/logo.png",
        },
        {
            title: "Personalized Learning",
            description:
                "Tailor your learning journey based on your interests and aspirations. Set your own pace, choose the skills you want to learn, and explore hobbies that ignite your passion.",
            linkText: "Read more",
            imageUrl: "../public/logo.png",
        },
        // Add more cards with different content here
    ];

    return (
        <>
            <h1 className="text-lg py-2 text-center md:text-5xl font-bold mb-4 tracking-wider">
                What we Offer
            </h1>
            <p className="lg:px-32 sm:px-8 text-center flex justify-center items-center text-gray-700 text-lg md:text-xl mb-4 tracking-wider">
                SkillSwap & HobbyConnect is a revolutionary online platform that
                fosters a dynamic community of learners and hobbyists. Our
                platform is designed to provide a unique and personalized
                learning experience through skill bartering and virtual hobby
                exchanges.
            </p>
            <div className="flex justify-center gap-10 py-5">
                <div className="grid lg:grid-cols-3 sm:grid-col-1 gap-4">
                    {cards.map((card, index) => (
                        <WhatWeOfferCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default WhatWeOffer;
