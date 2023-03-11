import React from 'react';
import {useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';




  const TopDevs = () => {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      // make the API request when the component mounts
      axios.get(`/api/devs/`)
        .then(response => {
          setData(response.data); // save the response data to state
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    return ( 
       <>
       <>
  <section className="relative py-24 dark:bg-jacarta-800">
    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
      <img
        src="assets/img/gradient_light.jpg"
        alt="gradient"
        className="h-full w-full"
      />
    </picture>
    <div className="container">
      <div className="mb-12 text-center font-display text-3xl text-jacarta-700 dark:text-white">
        <h2 className="inline">Top Devs</h2>
        <div className="dropdown inline cursor-pointer">
          <button
            className="dropdown-toggle inline-flex items-center text-accent"
            type="button"
            id="collectionSort"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* last 7 days
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="h-8 w-8 fill-accent"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg> */}
          </button>
          <div
            className="dropdown-menu z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
            aria-labelledby="collectionSort"
          >
            <a
              className="dropdown-item block rounded-xl px-5 py-2 text-sm transition-colors hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
              href="#"
            >
              Last 24 Hours
            </a>
            <a
              className="dropdown-item block rounded-xl px-5 py-2 text-sm transition-colors hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
              href="#"
            >
              Last 7 Days
            </a>
            <a
              className="dropdown-item block rounded-xl px-5 py-2 text-sm transition-colors hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
              href="#"
            >
              Last 30 Days
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
        
      {
      data.map((item,index) => {
    const { username, avatar,_id, name } = item;
    const itemLink = username ;
    return(
      <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
     <div>
          <figure className="mr-4 shrink-0">
            <Link to={`/devs/${username}`} className="relative block">
              <img
                src={avatar}  
                alt={name}
                className="rounded-2lg"
                loading="lazy"
                width="250" 
                height="250"
              />
              <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                {index+1}
              </div>
              <div
                className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                data-tippy-content="Verified Collection"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="h-[.875rem] w-[.875rem] fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </div>
            </Link>
          </figure>

          <Link href={'/dev/' +username}>
											<a className="block">
												<span className="font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white">
													{name}
												</span>
											</a>
										</Link>
            <span className="text-sm dark:text-jacarta-300">credits</span>


</div>
</div>
  );})}
  </div>
  </div>

      <div className="mt-10 text-center">
        <a
          href="rankings.html"
          className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
        >
          Go to Rankings
        </a>
      </div>

  </section>
  {/* end top collections */}
</>

       </>


     );
}

export default TopDevs;
