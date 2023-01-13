import * as React from "react";
import Review from "../../../src/pages/Basket/components/Review/Review";
import { render, screen } from "@testing-library/react";
import { initialState } from "../../fixture/ProductState";

describe("pruebas en review", () => {
  it("pruebas contenido minimo en documento", () => {
    render(<Review cart={[{ ...initialState[0] }]} />);
    expect(screen.getAllByText("Resumen Pedidos")).toBeTruthy();
    expect(screen.getAllByText("Envio")).toBeTruthy();
    expect(
      screen.getByRole("button", {
        name: /Ir al pago/,
      })
    );
  });
  it("pruebas valor de precio 0", () => {
    render(<Review cart={[{ ...initialState[0] }]} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("pruebas al haber un producto en el carro", () => {
    render(<Review cart={[{ ...initialState[0], inCart: 1 }]} />);

    expect(screen.getAllByText(`${initialState[0].price}`)).toBeTruthy();
  });
});
