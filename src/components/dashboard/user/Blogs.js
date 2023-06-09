import React from 'react';
function Blogs() {
    return ( 
        <>
  
<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
      <img
        src="assets/img/gradient_light.jpg"
        alt="gradient"
        className="h-full w-full"
      />
    </picture>
  <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
  
    {/* Posts */}
    <article>
      <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
      
        <figure className="group overflow-hidden">
          <a href="single-post.html">
            <img
              src="assets/img/blog/post_2.jpg"
              alt="post 2"
              className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
            />
          </a>
        </figure>
        {/* Body */}
        <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <a
              href="#"
              className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
            >
              Deothemes
            </a>
            <span className="dark:text-jacarta-400">in</span>
            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
              <a href="#">NFT's</a>
              <a href="#">DIGITAL ART</a>
            </span>
          </div>
          <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
            <a href="single-post.html"> Mint your own Tezos collections </a>
          </h2>
          <p className="mb-8 dark:text-jacarta-200">
            Since we launched Tezos at the end of 2021, many awesome creators...
          </p>
          {/* Date / Time */}
          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
            <span>
              <time dateTime="2022-02-05">5 Feb</time>
            </span>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
        <figure className="group overflow-hidden">
          <a href="single-post.html">
            <img
              src="assets/img/blog/post_3.jpg"
              alt="post 3"
              className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
            />
          </a>
        </figure>
        {/* Body */}
        <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <a
              href="#"
              className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
            >
              Deothemes
            </a>
            <span className="dark:text-jacarta-400">in</span>
            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
              <a href="#">NFT's</a>
              <a href="#">DIGITAL ART</a>
            </span>
          </div>
          <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
            <a href="single-post.html">
              List your collection for secondary sales
            </a>
          </h2>
          <p className="mb-8 dark:text-jacarta-200">
            Since we launched Tezos at the end of 2021, many awesome creators...
          </p>
          {/* Date / Time */}
          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
            <span>
              <time dateTime="2022-02-05">22 Feb</time>
            </span>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
        <figure className="group overflow-hidden">
          <a href="single-post.html">
            <img
              src="assets/img/blog/post_4.jpg"
              alt="post 4"
              className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
            />
          </a>
        </figure>
        {/* Body */}
        <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <a
              href="#"
              className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
            >
              Deothemes
            </a>
            <span className="dark:text-jacarta-400">in</span>
            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
              <a href="#">NFT's</a>
              <a href="#">DIGITAL ART</a>
            </span>
          </div>
          <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
            <a href="single-post.html">
              The biggest moves in NFTs, Bitcoin, crypto rules
            </a>
          </h2>
          <p className="mb-8 dark:text-jacarta-200">
            Since we launched Tezos at the end of 2021, many awesome creators...
          </p>
          {/* Date / Time */}
          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
            <span>
              <time dateTime="2022-02-05">18 Jan</time>
            </span>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
        <figure className="group overflow-hidden">
          <a href="single-post.html">
            <img
              src="assets/img/blog/post_5.jpg"
              alt="post 5"
              className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
            />
          </a>
        </figure>
        {/* Body */}
        <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <a
              href="#"
              className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
            >
              Deothemes
            </a>
            <span className="dark:text-jacarta-400">in</span>
            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
              <a href="#">NFT's</a>
              <a href="#">DIGITAL ART</a>
            </span>
          </div>
          <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
            <a href="single-post.html">
              Incredible Amount of Developer Energy' in Web3
            </a>
          </h2>
          <p className="mb-8 dark:text-jacarta-200">
            Since we launched Tezos at the end of 2021, many awesome creators...
          </p>
          {/* Date / Time */}
          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
            <span>
              <time dateTime="2022-02-05">15 Jan</time>
            </span>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
        <figure className="group overflow-hidden">
          <a href="single-post.html">
            <img
              src="assets/img/blog/post_6.jpg"
              alt="post 6"
              className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
            />
          </a>
        </figure>
        {/* Body */}
        <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <a
              href="#"
              className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
            >
              Deothemes
            </a>
            <span className="dark:text-jacarta-400">in</span>
            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
              <a href="#">NFT's</a>
              <a href="#">DIGITAL ART</a>
            </span>
          </div>
          <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
            <a href="single-post.html">
              Inflation is up, it matters: High prices plague Biden's
            </a>
          </h2>
          <p className="mb-8 dark:text-jacarta-200">
            Since we launched Tezos at the end of 2021, many awesome creators...
          </p>
          {/* Date / Time */}
          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
            <span>
              <time dateTime="2022-02-05">23 Dec</time>
            </span>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
        <figure className="group overflow-hidden">
          <a href="single-post.html">
            <img
              src="assets/img/blog/post_7.jpg"
              alt="post 7"
              className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
            />
          </a>
        </figure>
        {/* Body */}
        <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <a
              href="#"
              className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
            >
              Deothemes
            </a>
            <span className="dark:text-jacarta-400">in</span>
            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
              <a href="#">NFT's</a>
              <a href="#">DIGITAL ART</a>
            </span>
          </div>
          <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
            <a href="single-post.html">
              What to do when the market is going everywhere
            </a>
          </h2>
          <p className="mb-8 dark:text-jacarta-200">
            Since we launched Tezos at the end of 2021, many awesome creators...
          </p>
          {/* Date / Time */}
          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
            <span>
              <time dateTime="2022-02-05">15 Dec</time>
            </span>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </div>
      </div>
    </article>
  </div>
</>

     );
}

export default Blogs;
