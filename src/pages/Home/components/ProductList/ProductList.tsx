import { Box } from "@mui/system";
import React from "react";
import { ProductDetail } from "../ProductDetail";
export interface ProductListInterface {}

const ProductList: React.FC<ProductListInterface> = () => {
  return (
    <>
      <Box
        sx={{
          /*           padding: 0,
          margin: 0,
          listStyle: "none", */
          flexWrap: "wrap",
          //border: "1px solid silver",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ProductDetail type="activeList" />
      </Box>
    </>
  );
};

export default ProductList;
