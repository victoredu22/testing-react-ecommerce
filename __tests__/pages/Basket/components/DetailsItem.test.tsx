import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DetailsItem from "../../../../src/pages/Basket/components/DetailItem/DetailItem";
import { initialState } from "../../../fixture/ProductState";
import React from "react";

describe("Prueba en detailItem", () => {
  const mockStore = configureStore();
  let store = mockStore({ cart: [{ ...initialState[0] }] });

  it("pruebas x", () => {
    render(
      <Provider store={store}>
        <DetailsItem product={{ ...initialState[0], inCart: 1 }} />
      </Provider>
    );
  });
});
