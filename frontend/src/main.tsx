import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//page imports
import LandingPage from "./Home/pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
