import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "../fixture/ProductState";
import ButtonShopping from "../../src/components/ButtonShopping/ButtonShopping";

describe("prueba de boton", () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it("busqueda de boton con al menos un producto y el nombre de este", () => {
    render(
      <Provider store={store}>
        <ButtonShopping product={initialState[0]} />
      </Provider>
    );

    const button = screen.getByRole("button", { name: /button-handle-buy/i });
    fireEvent.click(button);
    expect(screen.getByText("Comprar")).toBeTruthy();
  });
});
