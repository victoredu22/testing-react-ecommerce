import productReducer, {
  allProductActive,
  availableStock,
  filterBrand,
} from "../../../src/redux/states/products";
import { searchProduct } from "../../../src/redux/states/products";
import { ProductList } from "../../../src/models/productList";

describe("pruebas en product", () => {
  const initialState = ProductList;

  it("agregar datos iniciales", () => {
    expect(productReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("Encontrar de productos segun el titulo", () => {
    const actualState = productReducer(initialState, searchProduct("iphone"));
    const stateActive = actualState.filter((item) => item.active);

    expect(stateActive[0].active).toBeTruthy();
    expect(stateActive.length).toBeGreaterThan(0);
  });
  it("No encontrar productos", () => {
    const actualState = productReducer(initialState, searchProduct("redmi"));
    const stateFalse = actualState.filter((item) => !item.active);

    expect(stateFalse[0].active).toBeFalsy();
    expect(stateFalse.length).toBeGreaterThan(0);
  });
  it("filtrar por marca", () => {
    const actualState = productReducer(initialState, filterBrand(1));
    const stateActive = actualState.filter((item) => item.active);

    expect(stateActive.length).toBeGreaterThan(0);
  });
  it("false en productos", () => {
    const actualState = productReducer(initialState, filterBrand(99));
    const stateFalse = actualState.filter((item) => !item.active);

    expect(stateFalse.length).toEqual(initialState.length);
  });

  it("validar productos con stock mayor a 0 y al menos un item activo", () => {
    const actualState = productReducer(
      initialState,
      availableStock({ type: 0 })
    );
    const stateActive = actualState
      .filter((item) => item.active)
      .sort((a, b) => a.id - b.id);

    expect(stateActive[0].active).toBeTruthy();
    expect(stateActive.length).toBeGreaterThan(0);
  });

  it("validar productos con stock igual a 0 y al menos un item activo", () => {
    const actualState = productReducer(
      initialState,
      availableStock({ type: 1 })
    );
    const stateActive = actualState
      .filter((item) => item.active)
      .sort((a, b) => a.id - b.id);

    expect(stateActive[0].active).toBeTruthy();
    expect(stateActive.length).toBeGreaterThan(0);
  });

  it("validar que todos los productos esten activos", () => {
    const actualState = productReducer(initialState, allProductActive());
    const stateActive = actualState.filter((item) => item.active);

    expect(stateActive[0].active).toBeTruthy();
  });
});
