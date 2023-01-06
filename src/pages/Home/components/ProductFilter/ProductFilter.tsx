import React from "react";
import { useDispatch } from "react-redux";
import {
  allProductActive,
  availableStock,
  filterBrand,
} from "@/redux/states/products";
import { Grid, Typography } from "@mui/material";
import { Brand } from "@/interface/brand";

export interface BrandFilterInterface {
  title: string;
  brands: Brand[];
}

const ProductFilter: React.FC<BrandFilterInterface> = ({ title, brands }) => {
  const dispatch = useDispatch();
  const clearFilter = () => {
    dispatch(allProductActive());
  };
  const handleFilter = (idBrand: any) => {
    if (title === "Disponibilidad") {
      dispatch(availableStock(idBrand));
    } else if (title === "Marcas") {
      dispatch(filterBrand(idBrand));
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} mt={5}>
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
          {brands != undefined &&
            brands.map((brand, key) => (
              <Typography
                sx={{ cursor: "pointer" }}
                key={key}
                onClick={() => handleFilter(brand.id)}
              >
                {brand.title} ({brand.stock})
              </Typography>
            ))}
          <Typography
            onClick={clearFilter}
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            Limpiar
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductFilter;
