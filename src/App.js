import React, { lazy, Suspense } from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("Abhijeet");
  }, []);
  return (
    <UserContext.Provider value={{ userName: userName }}>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-gray-50">
        <Header />
        <main className="min-w-0 flex-1 w-full flex items-center justify-center">
          <div className="w-9/12">
            <Outlet />
          </div>
        </main>
      </div>
    </UserContext.Provider>
  );
};
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading About...</h2>}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h2>Loading Contact...</h2>}>
            <Contact></Contact>
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
