import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './app.css';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<Router />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);