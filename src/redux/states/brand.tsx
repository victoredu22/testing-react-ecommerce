import { Product } from "@/interface/product";
import { createSlice, current } from "@reduxjs/toolkit";

export interface Brand {
  id: number;
  title: string;
  stock: number;
}

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

export const brandSlice = createSlice({
  name: "brand",
  initialState,
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
