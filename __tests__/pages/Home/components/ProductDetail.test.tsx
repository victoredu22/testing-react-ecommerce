import { render, screen } from "@testing-library/react";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { initialState } from "../../../fixture/ProductState";
import { ProductDetail } from "../../../../src/pages/Home/components/ProductDetail";

describe("Pruebas en product detail", () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it("Ver contenido cuando el producto es de tipo discount", () => {
    render(
      <Provider store={store}>
        <ProductDetail type="discountList" product={initialState[0]} />
      </Provider>
    );

    expect(screen.getByTestId("container-product")).toHaveStyle(
      `alignItems: center`
    );
    expect(screen.getAllByText(initialState[0].title)).toBeTruthy();
    expect(screen.getAllByText("Envio gratis")).toBeTruthy();
  });

  it("Ver contenido cuando el producto es de tipo activeList", () => {
    render(
      <Provider store={store}>
        <ProductDetail type="activeList" product={initialState[0]} />
      </Provider>
    );

    expect(screen.getAllByText(initialState[0].title)).toBeTruthy();
    expect(screen.getAllByText(initialState[0].description)).toBeTruthy();
  });
});
