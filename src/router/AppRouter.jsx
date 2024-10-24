import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage, ErrorPage } from "../auth";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createBrowserRouter([
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
    path: "home",
    element: (
      <PrivateRouter>
        <HeroesApp />
      </PrivateRouter>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "hero/:id",
        element: <HeroPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
