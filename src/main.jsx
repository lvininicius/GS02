import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Layout from './Components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      { path: '/', element: <Login /> },
      { path: '/Layout', element: <Layout/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);

