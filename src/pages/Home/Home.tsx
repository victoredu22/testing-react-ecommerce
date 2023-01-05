import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { Button, Box, Grid, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import { ProductDetail } from "./components/ProductDetail";
import { ProductFilter } from "./components/ProductFilter";
import { ProductList } from "./components/ProductList";
import { SmartwatchCarousel } from "./components/SmartwatchCarousel";

import styles from "@/styles/Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { updateStockBrand } from "@/redux/states/brand";
import { ProductSearch } from "./components/ProductSearch";
import { Product } from "@/interface/product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <Grid item sm={6} md={6} xs={12} sx={{ textAlign: "left" }}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
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
            <Box sx={{ paddingTop: "30px" }}>
              <Carousel
                showArrows={false}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showThumbs={false}
              >
                <img src="./assets/images/haweiPortada.jpg" />
                <img src="./assets/images/samsungPortada.jpg" />
                <img src="./assets/images/samsungPortada2.jpg" />
              </Carousel>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} md={6} xs={12}>
          <Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h4" fontWeight="bold">
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
              <ProductDetail type="discountList" />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          sm={12}
          md={12}
          xs={12}
          sx={{ justifyContent: "center", padding: "20px" }}
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
                display: { xs: "flex", sm: "block" },
                justifyContent: "right",
              }}
            >
              <ProductFilter title="Marcas" brands={stateBrand} />
              <ProductFilter title="Disponibilidad" brands={availableProduct} />
            </Grid>
            <Grid item xs={12} sm={10}>
              <ProductSearch />
              <Box
                mt={5}
                sx={{
                  display: "flex",
                  borderTop: "1px solid silver",
                  borderBottom: "1px solid silver",
                  justifyContent: "right",
                  padding: "10px",
                }}
              >
                <Typography component="span" display="flex">
                  <Typography fontWeight="bold">{productSearch} </Typography>{" "}
                  Items encontrados
                </Typography>
              </Box>

              <ProductList />
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
            <Grid item xs={6}>
              <img src="./assets/images/smartwatch-02.jpg" height="200" />
            </Grid>
            <Grid item xs={6}>
              <img src="./assets/images/smartwatch-03.jpg" height="200" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
