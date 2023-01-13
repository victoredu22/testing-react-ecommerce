import React, { useEffect, useState } from "react";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";

/* import styles from "@/styles/Product.module.css";
 */
import { ButtonShopping } from "@/components/ButtonShopping";
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
              margin: { xs: "30px 0px 20px 5px", md: "10px" },
            }}
          >
            <Grid
              item
              xs={type === "activeList" ? 12 : 3}
              sx={{ margin: "auto" }}
            >
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
              <Typography>
                {product.title}
                <Typography component="span" color="primary">
                  .
                </Typography>
              </Typography>
              <Typography>
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
                  <Typography>Envio gratis.</Typography>
                </Box>
              )}

              <Typography>
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
