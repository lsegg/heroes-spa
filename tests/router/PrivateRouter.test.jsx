import { render, screen } from "@testing-library/react";
import { PrivateRouter } from "../../src/router/PrivateRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";

describe("PublicRouter", () => {
  test("if logged in, should render children", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "Jane Doe",
      },
    };

    const initialEntry = "/home/search";

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[initialEntry]}>
          <PrivateRouter>
            <h1>Private Route</h1>
          </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private Route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", initialEntry);
  });
});
