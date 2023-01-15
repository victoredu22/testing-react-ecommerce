import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DetailsItem from "../../../../src/pages/Basket/components/DetailItem/DetailItem";
import { initialState } from "../../../fixture/ProductState";
import React from "react";
import { localStorageMock } from "../../../../src/utilities/localStorageMock.utility";

describe("Prueba en detailItem", () => {
  const mockStore = configureStore();
  let store = mockStore({ cart: [{ ...initialState[0] }] });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("agregar a detail un producto en el carro", () => {
    render(
      <Provider store={store}>
        <DetailsItem product={{ ...initialState[0], inCart: 1 }} />
      </Provider>
    );

    expect(screen.getAllByText(`${initialState[0].price}`)).toBeTruthy();
    expect(screen.getAllByText(`${initialState[0].title}`)).toBeTruthy();
  });

  it("restar en 1 el stock del carro al producto en localstorage", () => {
    //TODO:
    render(
      <Provider store={store}>
        <DetailsItem product={{ ...initialState[0], inCart: 1 }} />
      </Provider>
    );

    const button = screen.getByRole("button", {
      name: /button-handle-subtract/i,
    });
    fireEvent.click(button);
    expect(store.getState()).toStrictEqual({
      cart: [{ ...initialState[0], inCart: 0 }],
    });

    localStorageMock.setItem("cart", [{ ...initialState[0], inCart: 1 }]);
    const localStorage = localStorageMock.getItem("cart");

    expect([{ ...initialState[0], inCart: 1 }]).toStrictEqual(localStorage);
  });

  it("sumar en 1 el stock del carro al producto en localstorage", () => {
    //TODO:
    const expected = { ...initialState[0], inCart: 2 };
    render(
      <Provider store={store}>
        <DetailsItem product={{ ...initialState[0], inCart: 1 }} />
      </Provider>
    );

    const button = screen.getByRole("button", {
      name: /button-handle-add/i,
    });
    fireEvent.click(button);

    expect(initialState[0].inCart).toBeLessThan(expected.inCart);

    localStorageMock.setItem("cart", [expected]);
    const localStorage = localStorageMock.getItem("cart");

    expect([expected]).toStrictEqual(localStorage);
  });
});
