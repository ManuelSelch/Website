import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// styles
import "./styles/index.css"

// routes
import Root from "./routes/Root"
import ErrorPage from "./routes/ErrorPage"
import Home from "./routes/Home"

// contexts
import { ThemeProvider } from './contexts/ThemeContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Root>
        <ErrorPage /> 
      </Root>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);