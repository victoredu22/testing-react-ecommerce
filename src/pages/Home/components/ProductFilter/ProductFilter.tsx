import React from "react";
import { useDispatch } from "react-redux";
import {
  allProductActive,
  availableStock,
  filterBrand,
} from "@/redux/states/products";
import { Button, Grid, Typography } from "@mui/material";
import { Brand } from "@/interface/brand";

export interface BrandFilterInterface {
  title: string;
  items: Brand[];
}

const ProductFilter: React.FC<BrandFilterInterface> = ({ title, items }) => {
  const dispatch = useDispatch();
  const clearFilter = () => {
    dispatch(allProductActive());
  };
  const handleFilter = (idAction: number) => {
    if (title === "Disponibilidad") {
      dispatch(availableStock({ type: idAction }));
    } else if (title === "Marcas") {
      dispatch(filterBrand(idAction));
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} mt={5}>
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
          {items != undefined &&
            items.map((item, key) => (
              <Button
                sx={{ cursor: "pointer", color: "black", display: "flex" }}
                key={key}
                onClick={() => handleFilter(item.id)}
              >
                <Typography>{item.title}</Typography> (
                <Typography>{item.stock}</Typography>)
              </Button>
            ))}
          <Button
            aria-label="button-clear-filter"
            onClick={clearFilter}
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            Limpiar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductFilter;
