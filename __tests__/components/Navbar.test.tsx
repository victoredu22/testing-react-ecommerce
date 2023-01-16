import configureStore from "redux-mock-store";
import React from "react";
import { Provider } from "react-redux";
import { initialState } from "../fixture/ProductState";
import Navbar from "../../src/components/Navbar/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Prueba de navbar", () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it("primeras pruebas", () => {
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>;
  });
});
