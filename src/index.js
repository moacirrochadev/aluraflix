import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { NewVideo } from "./componentes/NewVideo/index.js";
import App from './app.js';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
}, {
  path: "/newvideo",
  element: <NewVideo />
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
