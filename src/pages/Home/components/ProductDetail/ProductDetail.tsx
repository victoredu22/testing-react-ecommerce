import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Product.module.css";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";
import { ButtonShopping } from "@/components/ButtonShopping";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Product } from "@/interface/product";

export interface OfferDayInterface {
  type: string;
}

const ProductDetail: React.FC<OfferDayInterface> = ({ type }) => {
  const [products, setProducts] = useState<Product[]>();
  const stateProduct = useSelector((store: AppStore) => store.product);

  useEffect(() => {
    if (type === "discountList") {
      setProducts(stateProduct.filter((item) => item.offerDiscount));
    }
  }, []);

  useEffect(() => {
    if (type === "activeList") {
      setProducts(stateProduct.filter((item) => item.active));
    }
  }, [stateProduct]);

  return (
    <>
      {products != undefined &&
        products.map((product, key) => (
          <Grid
            container
            key={key}
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
              margin: "10px",
            }}
          >
            <Grid
              item
              xs={type === "activeList" ? 12 : 3}
              sx={{ margin: "auto" }}
            >
              {product.picture.src != undefined && (
                <img width="" src={product.picture.src} />
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
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginLeft: "10px",
                  }}
                >
                  <LocalShippingIcon />
                  <Typography className={styles.productText}>
                    Envio gratis.
                  </Typography>
                </Box>
              )}

              <Typography className={styles.productText}>
                <StarIcon /> <StarIcon /> <StarIcon />
              </Typography>
              <ButtonShopping product={product} />
            </Grid>
          </Grid>
        ))}
    </>
  );
};

export default ProductDetail;