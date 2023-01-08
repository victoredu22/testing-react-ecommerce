import { Product } from "@/interface/product";
import { LocalstorageTypes } from "@/models";
import { getLocalStorage } from "@/utilities";
import { createSlice, current } from "@reduxjs/toolkit";
import { productSlice } from "./products";

const initialState: Product[] = [];

const initialStateCart = () => {
  const localStorageData = localStorage.getItem("cart")
    ? [...JSON.parse(localStorage.getItem("cart") as string)]
    : initialState;

  return localStorageData;
};

export const cartSlice = createSlice({
  name: "carts",
  initialState: initialStateCart(),
  reducers: {
    addCart: (state, action) => {
      const productStore = current(state).find(
        (product) => product.id === action.payload.product.id
      );

      return productStore === undefined
        ? [...current(state), { ...action.payload.product, inCart: 1 }]
        : current(state).map((product) =>
            product.id === action.payload.product.id
              ? { ...product, inCart: product.inCart + 1 }
              : { ...product, inCart: 1 }
          );
    },
    updateStock: (state, action) => {
      return action.payload.type === "add"
        ? current(state).map((product) =>
            product.id === action.payload.id
              ? { ...product, inCart: product.inCart + 1 }
              : { ...product }
          )
        : current(state).map((product) =>
            product.id === action.payload.id
              ? { ...product, inCart: product.inCart - 1 }
              : { ...product }
          );
    },
    deleteCart: (state, action) => {
      console.log(action, "gege");
      return current(state).filter((item) => item.id != action.payload);
    },
  },
});
export const { addCart, updateStock, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
