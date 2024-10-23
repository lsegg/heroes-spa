import { Outlet } from "react-router-dom";
import { NavBar } from "./ui";

export const HeroesApp = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
