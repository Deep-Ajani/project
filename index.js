// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Login from './LoginPage';
// import ImageGallery from './Ring';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ImageGallery />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './LoginPage';
import ImageGallery from './Ring';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/Ring" element={<ImageGallery />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();