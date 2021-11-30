import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects.js/MyProjects';
import TopBanner from './TopBanner.js/TopBanner';
import ContructForm from './ContructForm/ContructForm';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <TopBanner/>
            <AboutMe />
            <MyProjects />
            <ContructForm />
            <Footer />
        </div>
    );
};

export default Home;