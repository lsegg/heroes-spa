import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe("useForm", () => {
  const initialForm = {
    searchText: "Batman",
  };
  const newSearchText = "Superman";

  test("should return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      ...initialForm,
      formState: initialForm,
      handleInputChange: expect.any(Function),
      handleResetForm: expect.any(Function),
    });
  });

  test("should change the form name", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;

    act(() =>
      handleInputChange({
        target: { name: "searchText", value: newSearchText },
      })
    );

    expect(result.current.searchText).toBe(newSearchText);
  });

  test("should reset the form name", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange, handleResetForm } = result.current;

    act(() => {
      handleInputChange({
        target: { name: "searchText", value: newSearchText },
      });
      handleResetForm();
    });

    expect(result.current.searchText).toBe(initialForm.searchText);
  });
});
