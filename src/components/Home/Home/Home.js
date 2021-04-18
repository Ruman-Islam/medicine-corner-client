import React from 'react';
import ChatWithUs from '../ChatWithUs/ChatWithUs';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedProducts />
            <ChatWithUs />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;