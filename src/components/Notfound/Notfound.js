import React from "react";
import {Link} from "react-router-dom";
import Header  from "../landing/Header";
const Notfound = () => {
  return (
    <>
    <Header/>
              <section className="relative py-16 dark:bg-jacarta-800 md:py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="/assets/img/gradient_light.jpg" alt="gradient" className="h-full w-full"></img>
        </picture>
        <div className="container">
          <div className="mx-auto max-w-lg text-center">
            <img src="/assets/img/404.png" alt="" className="mb-16 inline-block"></img>
            <h1 className="mb-6 font-display text-4xl text-jacarta-700 dark:text-white md:text-6xl">Page Not Found!</h1>
            <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link to={`/`} className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">Navigate Back Home</Link>
          </div>
        </div>
      </section>
    </>
    
  );
};

export default Notfound;