import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
// import { AppRouter } from "../../src/router/AppRouter";

describe("AppRouter", () => {
  const initialEntry = "/home/search";
  test("should show login if not authenticated", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={[initialEntry]}>
        <AuthContext.Provider value={contextValue}>
          {/* Currently jest has issues compiling querystring library */}
          {/* <AppRouter /> */}
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login")).toBeTruthy();
  });

  test("should show children if authenticated", () => {
    const contextValue = {
      logged: false,
      user: {
        id: "123",
        name: "Jane Doe",
      },
    };
    render(
      <MemoryRouter initialEntries={[initialEntry]}>
        <AuthContext.Provider value={contextValue}>
          {/* Currently jest has issues compiling querystring library */}
          {/* <AppRouter /> */}
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Search")).toBeTruthy();
  });
});
