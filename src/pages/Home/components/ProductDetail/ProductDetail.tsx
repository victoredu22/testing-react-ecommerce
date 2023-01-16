import React from "react";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";
import styles from "../../../../styles/Product.module.css";

import { ButtonShopping } from "@/components/ButtonShopping";
import { Product } from "@/interface/product";

export interface OfferDayInterface {
  type: string;
  product: Product;
}

const ProductDetail: React.FC<OfferDayInterface> = ({ type, product }) => {
  return (
    <>
      <Grid
        data-testid={`list-element-product-${type}`}
        container
        sx={{
          display: "flex",
          width:
            type === "activeList"
              ? {
                  xs: "150px",
                  sm: "150px",
                  md: "250px",
                }
              : {
                  xs: "350px",
                  md: "350px",
                  sm: "450px",
                },
          margin: { xs: "30px 0px 20px 5px", md: "10px" },
        }}
      >
        <Grid item xs={type === "activeList" ? 12 : 3} sx={{ margin: "auto" }}>
          {product.picture.src != undefined && (
            <CardMedia
              component="img"
              alt={product.picture.alt}
              image={product.picture.src}
              sx={{ padding: "1em 1em 0 1em" }}
            />
          )}
        </Grid>
        <Grid item xs={type === "activeList" ? 12 : 9} textAlign="left">
          <Typography className={styles.productText}>
            {product.title}
            <Typography component="span" color="primary">
              .
            </Typography>
          </Typography>
          <Typography className={styles.productText}>
            {" "}
            <Typography component="span" color="primary" fontWeight="bold">
              {product.price}
            </Typography>{" "}
            {product.description}
          </Typography>

          {type === "discountList" && (
            <Box
              data-testid="discountList-item"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                marginLeft: "10px",
              }}
            >
              <LocalShippingIcon />
              <Typography className={styles.productText}>
                Envio gratis
              </Typography>
            </Box>
          )}

          <Typography className={styles.productText}>
            <StarIcon /> <StarIcon /> <StarIcon />
          </Typography>
          <ButtonShopping product={product} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
