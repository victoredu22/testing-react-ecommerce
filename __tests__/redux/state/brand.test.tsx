import { Brand } from "../../../src/interface/brand";
import brandReducer from "../../../src/redux/states/brand";
import { updateStockBrand } from "../../../src/redux/states/brand";

describe("Pruebas en brand redux", () => {
  const initialState: Brand[] = [
    {
      id: 0,
      title: "Apple",
      stock: 0,
    },
    {
      id: 1,
      title: "Samsung",
      stock: 0,
    },
    {
      id: 2,
      title: "huawei",
      stock: 0,
    },
  ];

  const expectedState: Brand[] = [
    {
      id: 0,
      title: "Apple",
      stock: 1,
    },
    {
      id: 1,
      title: "Samsung",
      stock: 1,
    },
    {
      id: 2,
      title: "huawei",
      stock: 0,
    },
  ];
  it("should handle increment", () => {
    expect(brandReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("Actualizar stock brand", () => {
    const brandStock = [{ brand: 0 }, { brand: 1 }];

    const actualState = brandReducer(
      initialState,
      updateStockBrand(brandStock)
    );
    expect(actualState).toEqual(expectedState);
  });
});
