import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth";
import { DcPage, MarvelPage } from "../heroes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    errorElement: <LoginPage />,
    children: [
      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/dc",
        element: <DcPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
