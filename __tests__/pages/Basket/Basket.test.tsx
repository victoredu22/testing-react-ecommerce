import configureStore from "redux-mock-store";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { initialState } from "../../fixture/ProductState";
import { Provider } from "react-redux";
import Basket from "../../../src/pages/Basket/Basket";
import React from "react";
import { MemoryRouter, useNavigate } from "react-router-dom";

describe("Puebas en basket", () => {
  const mockStore = configureStore();
  const store = mockStore({
    product: initialState,
    cart: [],
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("sin productos y dirigirse a index", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Basket />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByRole("link", {
      name: /home-redirect/i,
    });

    fireEvent.click(button);
    expect(button.getAttribute("href")).toBe("/");
  });

  it("verificar cuando hay un item en el carro", () => {
    const storeProduct = mockStore({
      cart: [{ ...initialState[0], inCart: 1 }],
    });

    render(
      <Provider store={storeProduct}>
        <Basket />
      </Provider>
    );

    expect(screen.getByText(initialState[0].title)).toBeTruthy();
    expect(screen.getByText(initialState[0].description)).toBeTruthy();

    expect(screen.getByText("Resumen Pedidos")).toBeTruthy();
    expect(screen.getAllByText(initialState[0].price)).toBeTruthy();
  });
});
