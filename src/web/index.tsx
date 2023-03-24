import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, useParams,
} from "react-router-dom";

import {createElement} from 'react'
import {createRoot} from 'react-dom/client'
import Main from './Main'
import './i18n'


const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(Main),
  },
]);

const rootDomElement = document.getElementById('app-root')
if (!rootDomElement) {
  console.error('ERROR: Root DOM element not found')
} else {
  const rootElement = createRoot(rootDomElement)

  rootElement.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}