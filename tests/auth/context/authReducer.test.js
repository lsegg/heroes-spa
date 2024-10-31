import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";
describe("authReducer", () => {
  const user = {
    id: "123",
    name: "Jane Doe",
  };

  const initialState = {
    logged: !!user,
    user,
  };

  test("should return default values", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should login and set the user", () => {
    const loginAction = {
      type: types.login,
      payload: user,
    };

    const newState = authReducer(initialState, loginAction);
    expect(newState.logged).toBeTruthy();
    expect(newState.user).toBe(user);
  });

  test("should logout and set logged in false", () => {
    const logoutAction = {
      type: types.logout,
    };

    const newState = authReducer(initialState, logoutAction);
    expect(newState.logged).toBeFalsy();
  });
});
