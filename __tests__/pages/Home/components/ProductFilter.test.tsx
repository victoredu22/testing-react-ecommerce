import configureStore from "redux-mock-store";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { initialState } from "../../../fixture/ProductState";
import { BrandState } from "../../../fixture/BrandState";
import { ProductFilter } from "../../../../src/pages/Home/components/ProductFilter";

describe("Prueba en product filter", () => {
  const mockStore = configureStore();
  const store = mockStore({ BrandState });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    cleanup();
  });

  it("ver que se visualizen Disponibilidad en los filtros", () => {
    const disponibility = [
      {
        id: 0,
        title: "stock",
        stock: 3,
      },
      { id: 1, title: "sin stock", stock: 1 },
    ];
    render(
      <Provider store={store}>
        <ProductFilter title="Disponibilidad" items={disponibility} />
      </Provider>
    );

    expect(screen.getAllByText(disponibility[0].title)).toBeTruthy();
    expect(screen.getAllByText(disponibility[1].stock)).toBeTruthy();
  });

  it("ver que se visualizen Brands en los filtros", () => {
    render(
      <Provider store={store}>
        <ProductFilter title="Disponibilidad" items={BrandState} />
      </Provider>
    );

    expect(screen.getAllByText(BrandState[0].title)).toBeTruthy();
    expect(screen.getAllByText(BrandState[1].stock)).toBeTruthy();
  });
});
