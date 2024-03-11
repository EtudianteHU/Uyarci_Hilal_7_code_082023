import React from 'react'
import { ReactDOM } from 'react';
import  "./Main.css"
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from '../../App';

function Main({children}) {
  return (
    <div>{children}</div>
  )
}

export default Main

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/flat",
    element:<h1>Nos appartements</h1>
  },
  {
    path:"/about",
    element:<h1>A propos</h1>
  },
  {
    path:"/404",
    element:<h1>404</h1>
  }
]);
ReactDOM.createRoot(</>App.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);