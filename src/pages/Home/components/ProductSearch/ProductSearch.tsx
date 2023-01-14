import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { searchProduct } from "../../../../redux/states/products";

import { useForm } from "../../../../hook/useForm";
import { TextField } from "@mui/material";
export interface ProductSearchInterface {}

interface formValues {
  searchText: string;
}
const ProductSearch: React.FC<ProductSearchInterface> = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    searchText: "",
  });

  const handle = handleInputChange as (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  const values = formValues as formValues;

  useEffect(() => {
    dispatch(searchProduct(values.searchText.toLocaleLowerCase()));
  }, [values]);

  return (
    <TextField
      fullWidth
      name="searchText"
      value={values.searchText}
      onChange={handle}
      placeholder="Buscar producto"
      autoComplete="off"
      arial-label="search"
    />
  );
};

export default ProductSearch;
