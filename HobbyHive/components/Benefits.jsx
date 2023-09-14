import React from "react";
import { NavLink } from "react-router-dom";
import BenefitsCard from "./BenefitsCard";

const Benefits = () => {
    const cards = [
        {
            title: "Cost-Effective Learning",
            description:
                "Say goodbye to expensive courses! SkillSwap & HobbyConnect offers an economical approach to learning. No need to pay for individual classes or subscriptions. Exchange skills and explore hobbies without spending a dime.",
        },
        {
            title: "Access to Diverse Skills & Hobbies",
            description:
                "Our platform opens the door to a wide range of skills and hobbies that might not be readily available through traditional learning platforms. Expand your horizons and explore unique passions.",
        },
        {
            title: "Form Meaningful Connections",
            description:
                "Connect with like-minded individuals who share your enthusiasm for learning and hobbies. Build valuable relationships, collaborate on exciting projects, and be part of a supportive community.",
        },
        {
            title: "Continuous Growth",
            description:
                "Engage in regular skill exchanges and hobby collaborations to foster continuous personal and professional growth. Develop new talents and build on existing expertise.",
        },
        {
            title: "Flexibility & Convenience",
            description:
                "Learn at your own pace and on your own schedule. Our platform offers flexibility and convenience, ensuring that learning fits seamlessly into your lifestyle.",
        },
        {
            title: "Community Support",
            description:
                "Join a thriving community of learners and hobbyists who are always eager to help and share their experiences. Gain encouragement, support, and inspiration from fellow members.",
        },
        // Add more cards with different content here
    ];

    return (
        <>
            <div className="flex justify-center gap-10 py-5">
                <div className="grid lg:grid-cols-3 sm:grid-col-1 gap-4">
                    {cards.map((card, index) => (
                        <BenefitsCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Benefits;
