import React from "react";



import Slider from './sliders/Sliders'
import Header from './landing/Header'
import Hero from './Hero/Hero'
import Notfound from './Notfound/Notfound'

export default function Index() {
    React.useEffect(() => {
      document.body.classList.toggle("index-page");
      // Specify how to clean up after this effect:
      return function cleanup() {
        document.body.classList.toggle("index-page");
      };
    }, []);
    return (
      <>
        <Header />
        <Hero />
        <Slider/>
     </>
    );
  }
  