import { Product } from "@/interface/product";
import { createSlice, current } from "@reduxjs/toolkit";
import React from "react";

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      active: true,
      picture: {
        id: 0,
        src: "./assets/images/iphone4.jpg",
        className: "img-fluid",
        alt: "categoria-celulares",
      },
      brand: 0,
      title: "Apple",
      description: "iPhone 12 128GB Black",
      price: "899990",
      offerDiscount: true,
      shipping: true,
      levelStars: 3,
      stock: 6,
      publicationDate: "2021-04-01",
      inCart: 0,
    },
    {
      id: 2,
      active: true,
      picture: {
        id: 0,
        src: "./assets/images/iphone3.jpg",
        className: "img-fluid",
        alt: "categoria-celulares",
      },
      brand: 0,
      title: "Apple",
      description: "Smartphone iPhone 12 Pro 128GB",
      price: "1099990",
      offerDiscount: true,
      shipping: false,
      levelStars: 3,
      stock: 3,
      publicationDate: "2021-04-01",
      inCart: 0,
    },
    {
      id: 3,
      active: true,
      picture: {
        id: 0,
        src: "./assets/images/samsung1.jpg",
        className: "img-fluid",
        alt: "categoria-celulares",
      },
      brand: 1,
      title: "Samsung",
      description: "Galaxy S21 Ultra 128GB",
      price: "1199990",
      offerDiscount: false,
      shipping: false,
      levelStars: 5,
      stock: 0,
      publicationDate: "2021-05-06",
      inCart: 0,
    },
    {
      id: 4,
      active: false,
      picture: {
        id: 0,
        src: "./assets/images/huawei2.jpg",
        className: "img-fluid",
        alt: "categoria-celulares",
      },
      brand: 2,
      title: "Huawei",
      description: "Mate 30 PRO 256GB",
      price: "949990",
      offerDiscount: true,
      shipping: true,
      levelStars: 2,
      stock: 4,
      publicationDate: "2021-04-01",
      inCart: 0,
    },
  ],
  reducers: {
    searchProduct: (state, action) => {
      return current(state).map((product) =>
        product.description.toLocaleLowerCase().includes(action.payload)
          ? { ...product, active: true }
          : { ...product, active: false }
      );
    },
    filterBrand: (state, action) => {
      return current(state).map((product) =>
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
      return action.payload === 0
        ? current(state).map((product) =>
            product.stock > 0
              ? { ...product, active: true }
              : { ...product, active: false }
          )
        : current(state).map((product) =>
            product.stock === 0
              ? { ...product, active: true }
              : { ...product, active: false }
          );
    },
    allProductActive: (state) => {
      return current(state).map((product) => ({
        ...product,
        active: true,
      }));
    },
  },
});

export const { searchProduct, filterBrand, allProductActive, availableStock } =
  productSlice.actions;
export default productSlice.reducer;
