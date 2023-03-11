import React from "react";
import Header from "../../landing/Header";
import Footer from "../../Footer/Footer";
import DashboardHero from "./DashboardHero";
import Blogs from "./Blogs";
const dashboard =()=>{
    return(
        <>
        <Header/>
        
        <div className="container">
        <div className="mx-auto max-w-2xl pt-24 text-center"></div>
        <h1 className="mb-10 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
              Welcome <span className="animate-gradient">User</span>
            </h1>
            </div>
            <DashboardHero />
            <div className="container">
            <Blogs />
            <Blogs />
            <Blogs />
            </div>
        <Footer />
        </>
    )
}

export default dashboard;
