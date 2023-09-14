import React from "react";
import { NavLink } from "react-router-dom";
import FeaturedSkillsAndHobbiesCard from "./FeaturedSkillsAndHobbiesCard";

const FeaturedSkillsAndHobbies = ({ title, description }) => {
    // Define the content for each card
    const cards = [
        {
            title: "Photography & Editing",
            description:
                "Capture moments like a pro and learn the art of photography from seasoned enthusiasts. Dive into the world of photo editing to enhance your visual storytelling skills.",
        },
        {
            title: "Culinary Delights",
            description:
                "Dive into the world of web development and coding. Get hands-on experience in creating stunning websites and applications with the help of skilled developers.",
        },
        {
            title: "Yoga & Mindfulness",
            description:
                "Find your inner zen and embrace mindfulness. Learn yoga poses, meditation techniques, and mindfulness practices to enhance well-being.",
        },
        {
            title: "Language Exchange",
            description:
                "Embrace the joy of learning languages with native speakers from around the world. Exchange language skills and immerse yourself in different cultures.",
        },
        {
            title: "Music & Instrument Mastery",
            description:
                "Unlock your musical talent and learn to play instruments like guitar, piano, or drums. Connect with skilled musicians for personalized music lessons.",
        },
        {
            title: "Fitness & Personal Training",
            description:
                "Achieve your fitness goals with the guidance of fitness enthusiasts and personal trainers. Discover effective workout routines tailored to your needs.",
        },
        {
            title: "Painting & Artistry",
            description:
                "Unleash your artistic side with painting and artistry classes. Learn various painting techniques and express your creativity on canvas.",
        },
        {
            title: "Digital Marketing",
            description:
                "Dive into the world of digital marketing and learn strategies to boost online presence and reach a wider audience.",
        },
        {
            title: "Dancing & Choreography",
            description:
                "Embrace the rhythm and dance your heart out! Learn different dance styles and choreography from passionate dancers.",
        },
        // Add more cards with different content here
    ];

    return (
        <>
            <h1 className="text-lg py-2 text-center md:text-5xl font-bold mb-4 tracking-wider">
                Featured Skills & Hobbies
            </h1>
            <p className="lg:px-32 sm:px-8 text-center flex justify-center items-center text-gray-700 text-lg md:text-xl mb-4 tracking-wider">
                Discover the hottest and most sought-after skills and hobbies
                available for exchange on SkillSwap & HobbyConnect. Our vibrant
                community offers a diverse range of interests that cater to
                every passion and curiosity. Take a look at some of the trending
                options:
            </p>
            <div className="flex justify-center gap-10 py-5">
                <div className="grid lg:grid-cols-3 sm:grid-col-1 gap-4">
                    {cards.map((card, index) => (
                        <FeaturedSkillsAndHobbiesCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeaturedSkillsAndHobbies;
