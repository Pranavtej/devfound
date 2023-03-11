// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './components/landing/landing';
// import Header  from './components/landing/Header';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Header />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Notfound from "./components/Notfound/Notfound";

import ForgotPassword from "./components/login/forgot-password/forgot-password";
// import "./assets/css/style.css";


import Index from "./components/View/Home";
import SignIn  from "./components/login/signIn";

import DevRegister  from "./components/Register/dev/DevRegister";
import Dashboard from "./components/dashboard/user/dashboard";
// import Notfound from "./components/Notfound/Notfound";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>

    <Routes>
      {/* <Route path="/" render={(props) => <Index {...props} />} /> */}
      <Route path="/" element={<Index />} />

      <Route  path="/Notfound/" element={<Notfound />} />
      <Route  path="/signin/" element={<SignIn />} />
      <Route  path="/dashboard" element={<Dashboard />} />
      <Route  path="/forgot-password" element={<ForgotPassword/>} />
      <Route  path="/dev-register" element={<DevRegister/>} />
    
      <Route path="*" element={<Notfound/>}/>
    </Routes>
  </BrowserRouter>
);
