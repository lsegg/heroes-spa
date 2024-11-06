import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage, ErrorPage } from "../auth";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <PublicRouter>
        <LoginPage />
      </PublicRouter>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: (
      <PrivateRouter>
        <HeroesApp />
      </PrivateRouter>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/home/dc",
        element: <DcPage />,
      },
      {
        path: "/home/search",
        element: <SearchPage />,
      },
      {
        path: "/home/hero/:id",
        element: <HeroPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
