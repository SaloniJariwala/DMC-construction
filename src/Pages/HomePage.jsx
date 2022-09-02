import React from "react";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Services from "../Components/OurServices";
import Reviews from "../Components/Reviews";
import Button from "../UI Components/BannerButton";

const HomePage = () => {
    return (
        <>
            <div className="static-button">
                <Button bgColor="#2172BB" textColor="white" text="Call (610) 948-1886" />
            </div>
            <div>
                <Header />
            </div>
            <div>
                <Banner />
            </div>
            <div>
                <AboutUs />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Reviews />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;