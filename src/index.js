import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import mongo from './backend';
import Group from './Group';
import Settings from './Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import dotenv from 'dotenv';
// dotenv.config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "" element = {<App />}></Route>
      <Route path = "/group" element = {<Group />}></Route>
      <Route path = "/settings" element = {<Settings />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

mongo(); // Connects to Mongo Database