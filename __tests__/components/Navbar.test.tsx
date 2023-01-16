import configureStore from "redux-mock-store";
import React from "react";
import { Provider } from "react-redux";
import { initialState } from "../fixture/ProductState";
import Navbar from "../../src/components/Navbar/Navbar";
import { MemoryRouter } from "react-router-dom";
import { render, screen, within } from "@testing-library/react";

describe("Prueba de navbar", () => {
  const mockStore = configureStore();
  const store = mockStore({ cart: initialState });

  it("debe mostrar componente sin ningun item en carro navbar", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const navbar = screen.getByTestId("navbar-cart");
    expect(within(navbar).getByText("Mi carrito")).toBeTruthy();
    expect(initialState[0].inCart).toEqual(initialState[0].inCart);
  });

  it("debe mostrar componente con un item en carro navbar", () => {
    const valueState = { cart: [{ ...initialState[0], inCart: 1 }] };
    const newStore = mockStore(valueState);

    render(
      <Provider store={newStore}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const navbar = screen.getByTestId("navbar-cart");
    expect(within(navbar).getByText("Mi carrito")).toBeTruthy();
    expect(valueState.cart[0].inCart).toBeGreaterThan(initialState[0].inCart);
  });
});
