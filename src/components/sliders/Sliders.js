import React from "react";
// import gradient from '../assets/img/gradient.jpg'

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/));


export default function Sliders() {
    return (
      <>


      <div className="relative px-6 pb-16 sm:px-0"> 
      {/*  Slider*/}
      <div className="swiper coverflow-slider !py-5">
     
        <div className="swiper-wrapper">
          {/*  Slides*/}
          <div className="swiper-slide">
            <article>
              <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                <figure className="relative">
                  <a href="item.html">
                    <img src="assets/img/products/item_13_lg.gif"alt="item 1" className="swiper-lazy h-[430px] w-full object-cover" height="430" width="379"></img>
                    {/* <div className="swiper-lazy-preloader"></div> */}
                  </a>
                </figure>
                <div className="p-6">
                  <div className="flex">  
                    <a href="user.html" className="shrink-0">
                      <img src="assets/img/products/item_13_lg.gif" alt="avatar" className="mr-4 h-10 w-10 rounded-full"></img>
                    </a>
                    <div>
                      <a href="item.html" className="block">
                        <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">Name</span>
                      </a>
                      <a href="#" className="text-2xs text-accent">username</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="swiper-slide">
            <article>
              <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                <figure className="relative">
                  <a href="item.html">
                    <img src="assets/img/products/item_13_lg.gif" alt="item 1" className="swiper-lazy h-[430px] w-full object-cover" height="430" width="379"></img>
                    {/* <div className="swiper-lazy-preloader"></div> */}
                  </a>
                </figure>
                <div className="p-6">
                  <div className="flex">
                    <a href="user.html" className="shrink-0">
                      <img src="assets/img/products/item_13_lg.gif" alt="avatar" className="mr-4 h-10 w-10 rounded-full"></img>
                    </a>
                    <div>
                      <a href="item.html" className="block">
                        <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">Oceania \\ OVERSEER 017</span>
                      </a>
                      <a href="#" className="text-2xs text-accent">MadeByM1KE</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="swiper-slide">
            <article>
              <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                <figure className="relative">
                  <a href="item.html">
                    <img src="assets/img/products/item_13_lg.gif"alt="item 1" className="swiper-lazy h-[430px] w-full object-cover" height="430" width="379"></img>
                    {/* <div className="swiper-lazy-preloader"></div> */}
                  </a>
                </figure>
                <div className="p-6">
                  <div className="flex">
                    <a href="user.html" className="shrink-0">
                      <img src="assets/img/products/item_13_lg.gif"alt="avatar" className="mr-4 h-10 w-10 rounded-full"></img>
                    </a>
                    <div>
                      <a href="item.html" className="block">
                        <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">Oceania \\ OVERSEER 017</span>
                      </a>
                      <a href="#" className="text-2xs text-accent">MadeByM1KE</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/*  Navigation*/}
      <div className="swiper-button-prev swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-jacarta-700 group-hover:fill-accent">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"></path>
        </svg>
      </div>
      <div className="swiper-button-next swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-jacarta-700 group-hover:fill-accent">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
        </svg>
      </div>
    </div>
    
   </>
    );
}