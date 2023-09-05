import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error.js";
import RestaurantMenue from "./components/RestaurantMenue";
import Contact from "./components/Contact";
//import Grocery from "./components/Grocery";

//These are used when we build large scale application,all names are synonmous :-
//chunking-loads component only when its clicked
//Dynamic Bundling
//lazy loading
//chunking
//code splitting
//on demand loading
const Grocery = lazy(() => import("./components/Grocery")); //by using lazy we separte grocery from main bundle.It will be in differnt bundle ie differ js file

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", //dynamic Routing
        element: <RestaurantMenue />,
      },
      ,
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); //functional Component
