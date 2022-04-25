import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
  <React.StrictMode>
      <App />
  </React.StrictMode>,
    </BrowserRouter>
);
