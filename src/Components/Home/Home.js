import React from 'react';
import Footer from '../Footer/Footer';
import Kit from '../Kit/Kit';
import Latest from '../Latest/Latest';
// import Navbar from '../Navbar/Navbar';
import Navigation from '../Navigation/Navigation';
import Recipe from '../Recipe/Recipe';
import Slider from '../Slider/Slider';
import Menu from '../Welcome/Menu/Menu';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Navigation />
            <Slider />
            <Welcome />
            <Menu />
            <Latest />
            <Recipe />
            <Kit />
            <Footer />
        </div>
    );
};

export default Home;