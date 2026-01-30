import { createRoot } from 'react-dom/client';
import Home from './HomePage.jsx';
import React from 'react';

import About from './About.jsx';

import EventDetails from './EventDetails.jsx';
import FAQ from './FAQ.jsx';
import Footer from './Footer.jsx';
import { initScrollAnimations } from './scrollAnimations.js';


const root = document.getElementById('root');
const app = createRoot(root);

app.render(
  <React.StrictMode>
    <Home/>
    <About/>
    <EventDetails/>
    <FAQ/>
    <Footer/>
  </React.StrictMode>
);

// Initialize scroll animations after DOM is ready
setTimeout(() => {
  initScrollAnimations();
}, 100);
