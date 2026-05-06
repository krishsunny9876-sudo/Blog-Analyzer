import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import RouterConnect from './RouterConnect.jsx';
import Home from './components/Home.jsx'
import About from './components/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterConnect />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "main",
        element: <App />
      },
      {
        path: "About",
        element: <About />
      }
    ]
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
