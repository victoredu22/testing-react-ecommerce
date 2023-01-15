import { Product } from "@/interface/product";
import { ProductList } from "../../models/productList";
import { createSlice, current } from "@reduxjs/toolkit";
import React from "react";

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: "products",
  initialState: ProductList,
  reducers: {
    searchProduct: (state, action) => {
      return current(state).map((product: Product) =>
        product.description.toLocaleLowerCase().includes(action.payload)
          ? { ...product, active: true }
          : { ...product, active: false }
      );
    },
    filterBrand: (state, action) => {
      return current(state).map((product: Product) =>
        product.brand === action.payload
          ? {
              ...product,
              active: true,
            }
          : {
              ...product,
              active: false,
            }
      );
    },
    availableStock: (state, action) => {
      return action.payload.type === 0
        ? current(state).map((product: Product) =>
            product.stock > 0
              ? { ...product, active: true }
              : { ...product, active: false }
          )
        : current(state).map((product: Product) =>
            product.stock === 0
              ? { ...product, active: true }
              : { ...product, active: false }
          );
    },
    allProductActive: (state) => {
      console.log(state);
      return current(state).map((product: Product) => ({
        ...product,
        active: true,
      }));
    },
  },
});

export const { searchProduct, filterBrand, allProductActive, availableStock } =
  productSlice.actions;
export default productSlice.reducer;
