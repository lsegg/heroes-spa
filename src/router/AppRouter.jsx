import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage, ErrorPage } from "../auth";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createBrowserRouter([
  {
    path: "/heroes-app",
    element: (
      <PublicRouter>
        <LoginPage />
      </PublicRouter>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/heroes-app/home",
    element: (
      <PrivateRouter>
        <HeroesApp />
      </PrivateRouter>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/heroes-app/home/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/heroes-app/home/dc",
        element: <DcPage />,
      },
      {
        path: "/heroes-app/home/search",
        element: <SearchPage />,
      },
      {
        path: "/heroes-app/home/hero/:id",
        element: <HeroPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
