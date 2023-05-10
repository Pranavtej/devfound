import React , { useState } from "react";
import axios from "axios";
// import { Route } from "react-router";
// import { useHistory } from "react-router-dom";
import { Link,redirect} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const SignIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://devfound-backend.vercel.app/api/Login/${username}/${password}`);

      if (response.data.username === username && response.data.password === password) {
        // Log the user in
        // ...

        // Redirect the user to the dashboard
        // history.push("/dashboard");
        console.log(response.data);
        console.log("success");  
        if (response.data.role === "user") {
          nav("/dashboard")

        } else if (response.data.role === "dev") {
          nav("/dev-dashboard")
        } else if (response.data.role === "admin") {
        }
        // <Navigate to="/dashboard" replace={true} />
        // redirect("/dashboard");
        
        // <redirect to="/home" />
      } else {
        // Show an error message
        // ...
        document.getElementById("error").innerHTML = "Invalid Username or Password";
        console.log("error");
      }
    } catch (error) {
      // Handle the error
      document.getElementById("error").innerHTML = "Invalid Username or Password";
      // console.error(error);
    }
  };

  const [name, setName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newpass, setNewPassword] = useState("");
  const [email , setEmail] = useState("");
  const [cnfrmPass , setCnfrmPass] = useState("");

  const handleCreate = async (event) => {
    event.preventDefault();

    try {
      
      

      const Checkuser = await axios.get(`https://devfound-backend.vercel.app/api/users/find/${newUsername}`);
      console.log(Checkuser)

      if (Checkuser.status != 404) {

        document.getElementById("username_err").innerHTML = "Username Already Exist";
        
      }

      else{

            const response = await axios.post(`https://devfound-backend.vercel.app/api/CreateAcc/${name}/${newpass}/${email}/${newUsername}`);
            const Mailres= await axios.get(`https://devfound-backend.vercel.app/api/CreateAcc/cnfrmAcc/mail/${name}/${email}`);
            const Newres = await axios.get(`https://devfound-backend.vercel.app/api/Login/${newUsername}/${newpass}`);  
            if (Newres.data.username === newUsername && Newres.data.password === newpass) {
              console.log(Newres.data);
              console.log("success");
              
              // redirect("/dashboard");
              nav(`/dashboard/${Newres.data.username}`)
      
            } else {
              // Show an error message
              // ...

              console.log("error");
            }
          }
          } catch (error) {
            // Handle the error
            console.log(error)
            document.getElementById("username_err").innerHTML = "Username Already Exist";

          }
  
  };

    return (

        <>
        <main>
       <section className="relative h-screen">
        <div className="lg:flex lg:h-full">
        
          <div className="relative text-center lg:w-1/2">
            <img src="/assets/img/explore_us.png" alt="login" className="absolute h-full w-full object-cover"></img>
        
            <a href="index.html" className="relative inline-block py-36">
              <img src="/assets/img/logo_dev.png" className="inline-block max-h-7" alt="Xhibiter | NFT Marketplace"></img>
            </a>
          </div>

          <div className="relative flex items-center justify-center p-[10%] lg:w-1/2">
            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
              <img src="/assets/img/gradient_light.jpg" alt="gradient" className="h-full w-full"></img>
            </picture>

            <div className="w-full max-w-[25.625rem] text-center">
              <h1 className="mb-6 font-display text-4xl text-jacarta-700 dark:text-white">Explore us !</h1>
              <p className="mb-10 text-lg leading-normal dark:text-jacarta-300">
                if already an account exits please Sign in  or if you are new to us please create an account.
               
              </p>

              <ul className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white" id="ethereum-tab" data-bs-toggle="tab" data-bs-target="#ethereum" type="button" role="tab" aria-controls="ethereum" aria-selected="true" >

                    <span className="font-display text-base font-medium">SignIn</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white" id="torus-tab" data-bs-toggle="tab" data-bs-target="#torus" type="button" role="tab" aria-controls="torus" aria-selected="false">
                    
                    <span className="font-display text-base font-medium">Create Account</span>
                  </button>
                </li>
              </ul>

         
              <div className="tab-content">
             
                <div className="tab-pane fade show active" id="ethereum" role="tabpanel" aria-labelledby="ethereum-tab">
                 
                  <form onSubmit={handleSubmit}>
                  <div className="mb-12 ">
                            <div className="mb-6">
                            
                            <input type="text" id="username" className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300" placeholder=" Username" required="required"
                             value={username}
                             onChange={(event) => setUsername(event.target.value)}
                             ></input>
                        </div>
                        
                            <div className="mb-6">
                            {/* <label for="profile-username" className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white">Password<span class="text-red">*</span></label> */}
                            <input type="password" id="password" className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300" placeholder="Password" required="required"
                             value={password}
                             onChange={(event) => setPassword(event.target.value)}
                            ></input>
                        
                    </div>
                    </div>

                    <h5  id="error" className="mb-6 font-display text-red text-jacarta-700 dark:text-white"></h5>
                     <button type="submit" className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                    <span>SignIn</span>
                  </button>
                  <Link to={`/forgot-password`}><h5  id="forgoten_pass" className="mb-6 font-display text-blue text-jacarta-700 dark:text-white">forgoten Password ?</h5></Link>


                  </form>
                </div>
            
                <div className="tab-pane fade" id="torus" role="tabpanel" aria-labelledby="torus-tab">
                  
                <form onSubmit={handleCreate}>
                  <div className="mb-12 ">
                            <div className="mb-6">
                            
                            <input type="text" id="name" className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300" placeholder="Name" required="required"
                             value={name}
                             onChange={(event) => setName(event.target.value)}
                             ></input>
                        </div>
                        <div className="mb-6">
                            
                            <input type="text" id="newUsername" className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300" placeholder=" Username" required="required"
                             value={newUsername}
                             onChange={(event) => setNewUsername(event.target.value)}
                             ></input>
            
                  <h6  id="username_err" className=" font-display text-blue text-jacarta-600 dark:text-white"></h6>

                        </div>

                        <div className="mb-6">
                            
                            <input type="email" id="email" className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300" placeholder=" email" required="required"
                             value={email}
                             onChange={(event) => setEmail(event.target.value)}
                             ></input>
                        </div>
                            <div className="mb-6">
                            {/* <label for="profile-username" className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white">Password<span class="text-red">*</span></label> */}
                            <input type="password" id="newpass" className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300" placeholder="Password" required="required"
                             value={newpass}
                             onChange={(event) => setNewPassword(event.target.value)}
                            ></input>
                            
                        
                    </div>
                    <div className="mb-6">
                            {/* <label for="profile-username" className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white">Password<span class="text-red">*</span></label> */}
                            <input type="password" id="cnfrmpass" className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300" placeholder="Confirm Password" required="required"
                             value={cnfrmPass}
                             onChange={(event) => setCnfrmPass(event.target.value)}
                            ></input>
                            
                        
                    </div>

                    
                    </div>

                     <button type="submit" className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-jacarta-100 bg-white py-4 px-8 text-center font-semibold text-jacarta-700 transition-all hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                    <span>Create Accout</span>
                  </button>

                  </form>
                
                </div>
            
                <div className="tab-pane fade" id="wallet-connect" role="tabpanel" aria-labelledby="wallet-connect-tab">

                </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
        </>
    );
    };

export default SignIn;