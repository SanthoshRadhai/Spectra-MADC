import { createRoot } from 'react-dom/client';
import Home from './HomePage.jsx';
import React from 'react';
const root = document.getElementById('root');
const app = createRoot(root);

app.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
