import { types } from "../../../src/auth/types/types";

describe("types", () => {
  test("should return proper types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
