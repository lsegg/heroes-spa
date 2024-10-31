import { render, screen } from "@testing-library/react";
import { PublicRouter } from "../../src/router/PublicRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("PublicRouter", () => {
  test("if logged out, should render children", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Public Route</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Public Route")).toBeTruthy();
  });

  test("if logged in, should navigate", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Jane Doe",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRouter>
                  <h1>Public Route</h1>
                </PublicRouter>
              }
            />
            <Route
              path="/heroes-spa/home/search"
              element={<h1>Private Route</h1>}
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private Route")).toBeTruthy();
  });
});
