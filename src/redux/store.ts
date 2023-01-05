import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./states/products";
import { Product } from "@/interface/product";
import { cartSlice } from "./states/cart";
import { Brand } from "@/interface/brand";
import { brandSlice } from "./states/brand";

export interface AppStore {
  product: Product[];
  cart: Product[];
  brand: Brand[];
}

export default configureStore<AppStore>({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    brand: brandSlice.reducer,
  },
});
