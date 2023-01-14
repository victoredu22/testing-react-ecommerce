import React from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { ProductSearch } from "../../../src/pages/Home/components/ProductSearch";
import configureStore from "redux-mock-store";
import { initialState } from "../../fixture/ProductState";
import { Provider } from "react-redux";

describe("Prueba de productSearch", () => {
  const mockStore = configureStore();
  let store = mockStore({ product: initialState[0] });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    cleanup();
  });

  it("exista un item input vacio para hacer la busqueda", () => {
    render(
      <Provider store={store}>
        <ProductSearch />
      </Provider>
    );

    const input = screen.getByRole("textbox");
    expect((input as HTMLInputElement).value).toBe("");
  });

  it("cambio el valor del input de busqueda", () => {
    const inputValue = "iphone";
    let updatedStore = mockStore(initialState);

    render(
      <Provider store={updatedStore}>
        <ProductSearch />
      </Provider>
    );

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });
    expect((input as HTMLInputElement).value).toBe(inputValue);
  });
});
