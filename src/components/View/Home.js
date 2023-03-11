import React from "react";

import Header from "../landing/Header";
import Hero from "../Hero/Hero";
import Slider from "../sliders/Sliders";
// import Notfound from "../Notfound/Notfound"; 
import Footer from "../Footer/Footer";
import CoverflowCarousel from "../sliders/CoverflowCarousel";
import TopDevs from "../top-devs/top-devs";
import Category from "../sliders/Category";

const Home=()=>{
    return(
        <>
        <Header/>
        <Hero/>
        <CoverflowCarousel/>
        <TopDevs/>
        <Category/>
        <Footer />

        </>
    )
}

export default Home