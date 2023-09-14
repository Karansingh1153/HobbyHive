import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import WhatWeOffer from "../components/WhatWeOffer";
import Benefits from "../components/Benefits";
import FeaturedSkillsAndHobbies from "../components/FeaturedSkillsAndHobbies";

const Home = () => {
    return (
        <>
            <Navbar />
            <Main />
            <WhatWeOffer />
            <Benefits />
            <FeaturedSkillsAndHobbies />
        </>
    );
};

export default Home;
