import { render, screen, within } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrandState } from "../../fixture/BrandState";
import { initialState } from "../../fixture/ProductState";
import Home from "../../../src/pages/Home/Home";

describe("Pruebas en Home", () => {
  const mockStore = configureStore();
  const store = mockStore({ product: initialState, brand: BrandState });

  it("Agregar imagenes en el segmento portada", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const haweiPortada = screen.getAllByAltText(/haweiPortada/i);
    const samsungPortada = screen.getAllByAltText(/samsungPortada1/i);
    const samsungPortada2 = screen.getAllByAltText(/samsungPortada2/i);

    expect(
      screen.getAllByText("Estos son los productos con mas pedidos!")
    ).toBeTruthy();
    expect(haweiPortada).toBeTruthy();
    expect(haweiPortada[0].getAttribute("src")).toBe(
      "./assets/images/haweiPortada.jpg"
    );

    expect(samsungPortada).toBeTruthy();
    expect(samsungPortada[0].getAttribute("src")).toBe(
      "./assets/images/samsungPortada.jpg"
    );
    expect(samsungPortada2).toBeTruthy();
    expect(samsungPortada2[0].getAttribute("src")).toBe(
      "./assets/images/samsungPortada2.jpg"
    );
  });

  it("Agregar minimo 3 productos con discount en el segmento ofertas ", () => {
    render(
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );

    expect(screen.getByText("Ofertas de hoy")).toBeTruthy();
    expect(
      screen.getAllByTestId("list-element-product-discountList")
    ).toBeTruthy();
    expect(screen.getAllByTestId("discountList-item")).toBeTruthy();

    const productDetail = screen.getAllByTestId(
      "list-element-product-discountList"
    );

    expect(() =>
      within(productDetail[0]).getAllByTestId("discountList-item")
    ).toBeTruthy();

    const products = screen.getAllByTestId("discountList-item");
    expect(within(products[0]).getByText("Envio gratis"));
    expect(products).toHaveLength(3);
  });

  it("Agregar minimo 3 productos con discount en el segmento ofertas ", () => {
    render(
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );

    const productDetail = screen.getAllByTestId(
      "list-element-product-activeList"
    );
    expect(() =>
      within(productDetail[0]).getAllByTestId("discountList-item")
    ).toThrow();

    expect(productDetail).toHaveLength(3);
  });

  it("Prueba 3 imagenes en seccion smartwatch", () => {
    render(
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );

    const imgSmartWatch = screen.getAllByAltText(/imgSmartwatch01/i);

    expect(imgSmartWatch).toBeTruthy();
    expect(imgSmartWatch[0].getAttribute("src")).toBe(
      "./assets/images/smartwatch-02.jpg"
    );

    const imgSmartWatch2 = screen.getAllByAltText(/imgSmartwatch02/i);

    expect(imgSmartWatch2).toBeTruthy();
    expect(imgSmartWatch2[0].getAttribute("src")).toBe(
      "./assets/images/smartwatch-03.jpg"
    );
  });
  it("Prueba en items encontrados", () => {
    render(
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );

    const itemFound = screen.getByTestId("item-found-product");
    expect(() => within(itemFound).getByTestId("number-product")).toBeTruthy();
  });
});
