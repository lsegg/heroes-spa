import { Outlet } from "react-router-dom";
import { NavBar } from "./ui";

export const HeroesApp = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};
