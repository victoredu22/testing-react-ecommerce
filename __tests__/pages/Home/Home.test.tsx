import { render, screen } from "@testing-library/react";
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

    const haweiPortada = screen.getAllByAltText(/haweiPortada/i)[0];
    const samsungPortada = screen.getAllByAltText(/samsungPortada1/i)[0];
    const samsungPortada2 = screen.getAllByAltText(/samsungPortada2/i)[0];

    expect(
      screen.getAllByText("Estos son los productos con mas pedidos!")
    ).toBeTruthy();
    expect(haweiPortada).toBeTruthy();
    expect(haweiPortada.getAttribute("src")).toBe(
      "./assets/images/haweiPortada.jpg"
    );

    expect(samsungPortada).toBeTruthy();
    expect(samsungPortada.getAttribute("src")).toBe(
      "./assets/images/samsungPortada.jpg"
    );
    expect(samsungPortada2).toBeTruthy();
    expect(samsungPortada2.getAttribute("src")).toBe(
      "./assets/images/samsungPortada2.jpg"
    );
  });

  it("Agregar imagenes en el segmento portada", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getAllByText("Ofertas de hoy")).toBeTruthy();
    //LLAMAR AL COMPONENTE PRODUCT DETAIL
  });
});
