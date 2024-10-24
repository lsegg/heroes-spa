import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage, ErrorPage } from "../auth";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createHashRouter([
  {
    path: "/heroes-spa",
    element: (
      <PublicRouter>
        <LoginPage />
      </PublicRouter>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/heroes-spa/home",
    element: (
      <PrivateRouter>
        <HeroesApp />
      </PrivateRouter>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/heroes-spa/home/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/heroes-spa/home/dc",
        element: <DcPage />,
      },
      {
        path: "/heroes-spa/home/search",
        element: <SearchPage />,
      },
      {
        path: "/heroes-spa/home/hero/:id",
        element: <HeroPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
