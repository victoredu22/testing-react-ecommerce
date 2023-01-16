import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { updateStockBrand } from "@/redux/states/brand";
import { Box, Grid, Typography, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Layout } from "@/components/Layout";
import { ProductDetail } from "./components/ProductDetail";
import { ProductFilter } from "./components/ProductFilter";
import { ProductSearch } from "./components/ProductSearch";

import styles from "../../styles/Layout.module.css";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const stateProduct = useSelector((store: AppStore) => store.product);
  const stateBrand = useSelector((store: AppStore) => store.brand);

  const dispatch = useDispatch();
  const [productSearch, setProductSearch] = useState<number>();

  //filtrar stock productos
  useEffect(() => {
    dispatch(updateStockBrand(stateProduct));
  }, []);

  const availableProduct = [
    {
      id: 0,
      title: "stock",
      stock: stateProduct.filter((item) => item.stock >= 1).length,
    },
    {
      id: 1,
      title: "sin stock",
      stock: stateProduct.filter((item) => item.stock === 0).length,
    },
  ];

  useEffect(() => {
    const filterActive = stateProduct.filter((product) => product.active);

    setProductSearch(filterActive.length);
  }, [stateProduct]);

  return (
    <Layout>
      <Grid
        container
        className={styles.main_container}
        spacing={2}
        sx={{ marginTop: "20px" }}
      >
        <Grid
          item
          sm={6}
          md={6}
          xs={12}
          sx={{ textAlign: "left", marginTop: { xs: "60px", md: "0px" } }}
        >
          <Typography variant="h5" fontWeight="bold">
            Productos destacados
            <Typography
              component="span"
              color="primary"
              sx={{ fontSize: "1.25rem", fontWeight: "700" }}
            >
              .
            </Typography>
          </Typography>
          <Typography>Estos son los productos con mas pedidos!</Typography>
          <Box sx={{ paddingTop: "30px" }} data-testid="container-carousel">
            <Carousel
              showArrows={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showThumbs={false}
            >
              <CardMedia
                component="img"
                alt="haweiPortada"
                image="./assets/images/haweiPortada.jpg"
                sx={{ padding: "1em 1em 0 1em" }}
              />
              <CardMedia
                component="img"
                alt="samsungPortada1"
                image="./assets/images/samsungPortada.jpg"
                sx={{ padding: "1em 1em 0 1em" }}
              />
              <CardMedia
                component="img"
                alt="samsungPortada2"
                image="./assets/images/samsungPortada2.jpg"
                sx={{ padding: "1em 1em 0 1em" }}
              />
            </Carousel>
          </Box>
        </Grid>
        <Grid item sm={6} md={6} xs={12}>
          <Box sx={{ textAlign: "left", marginTop: { xs: "60px", md: "0px" } }}>
            <Typography variant="h5" fontWeight="bold">
              Ofertas de hoy
              <Typography
                component="span"
                color="primary"
                sx={{ fontSize: "1.25rem", fontWeight: "700" }}
              >
                .
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "20px" }}>
            {stateProduct != undefined &&
              stateProduct.map(
                (product, key) =>
                  product.offerDiscount && (
                    <ProductDetail
                      key={key}
                      type="discountList"
                      product={product}
                    />
                  )
              )}
          </Box>
        </Grid>

        <Grid
          item
          sm={12}
          md={12}
          xs={12}
          sx={{ justifyContent: "center", padding: { xs: "10px", md: "20px" } }}
        >
          <Typography variant="h4" fontWeight="bold">
            Smartphones
            <Typography
              component="span"
              color="primary"
              sx={{ fontSize: "1.25rem", fontWeight: "700" }}
            >
              .
            </Typography>
          </Typography>
          <hr></hr>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={2}
              sx={{
                display: { xs: "block", sm: "block" },
                justifyContent: "right",
                padding: { xs: "15px", sm: "0px" },
              }}
            >
              <ProductFilter title="Marcas" items={stateBrand} />

              <ProductFilter title="Disponibilidad" items={availableProduct} />
            </Grid>
            <Grid item xs={12} sm={10}>
              <ProductSearch />
              <Box
                data-testid={`item-found-product`}
                sx={{
                  display: "flex",
                  borderTop: "1px solid silver",
                  borderBottom: "1px solid silver",
                  justifyContent: "right",
                  padding: "10px",
                  marginTop: { xs: "10px", md: "20px" },
                }}
              >
                <Typography component="span" display="flex">
                  <Typography data-testid="number-product" fontWeight="bold">
                    {productSearch}{" "}
                  </Typography>{" "}
                  Items encontrados
                </Typography>
              </Box>
              <Box
                sx={{
                  flexWrap: "wrap",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {stateProduct != undefined &&
                  stateProduct.map(
                    (product, key) =>
                      product.active && (
                        <ProductDetail
                          key={key}
                          type="activeList"
                          product={product}
                        />
                      )
                  )}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          sm={12}
          md={12}
          xs={12}
          sx={{
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Smartwatch
            <Typography
              component="span"
              color="primary"
              sx={{ fontSize: "1.25rem", fontWeight: "700" }}
            >
              .
            </Typography>
          </Typography>
          <hr></hr>
          <Grid container sx={{ marginTop: "90px", marginBottom: "90px" }}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt="imgSmartwatch01"
                image="./assets/images/smartwatch-02.jpg"
                sx={{ padding: "1em 1em 0 1em" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt="imgSmartwatch02"
                image="./assets/images/smartwatch-03.jpg"
                sx={{ padding: "1em 1em 0 1em" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
