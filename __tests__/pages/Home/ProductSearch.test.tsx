import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProductSearch } from "../../../src/pages/Home/components/ProductSearch";
import configureStore from "redux-mock-store";
import { initialState } from "../../fixture/ProductState";
import { Provider } from "react-redux";

describe("Prueba de productSearch", () => {
  const mockStore = configureStore();
  let store;

  type TestElement = Document | Element | Window | Node;

  const hasInputValue = (e: TestElement, inputValue: string) => {
    screen.getByDisplayValue(inputValue) === e;
  };

  it("prueba input", () => {
    store = mockStore(initialState[0]);

    const prueba = render(
      <Provider store={store}>
        <ProductSearch />
      </Provider>
    );

    const input = screen.getByRole("textbox", { name: "" });

    fireEvent.change(input, { target: { value: "123" } });
    expect(hasInputValue(input, "1236")).toBe(true);

    //expect(input).toBe("");

    //expect(screen.getByRole("textbox", { name: "searchText"})).toBeInTheDocument();
    //console.log(x);
  });
});
