import { Brand } from "@/interface/brand";
import { Product } from "@/interface/product";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Brand[] = [];

export const brandSlice = createSlice({
  name: "brand",
  initialState: [
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
  ],
  reducers: {
    updateStockBrand: (state, action) => {
      return current(state).map((brand) => ({
        ...brand,
        stock: action.payload.filter((item: Product) => item.brand === brand.id)
          .length,
      }));
    },
  },
});

export const { updateStockBrand } = brandSlice.actions;
export default brandSlice.reducer;
