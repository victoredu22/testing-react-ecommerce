import React from "react";
import { Layout } from "@/components/Layout";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { DetailItem } from "./components/DetailItem";
import { Review } from "./components/Review";

export interface BasketInterface {}

const Basket: React.FC<BasketInterface> = () => {
  const stateCart = useSelector((store: AppStore) => store.cart);

  return (
    <Layout>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "100px",
          padding: { xs: "4% 24px 0px 6%", md: "0px 80px  0px  120px " },
        }}
      >
        {stateCart.length === 0 ? (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "5%",
              }}
              justifyContent="center"
            >
              <ShoppingCartIcon sx={{ marginTop: "3px" }} />
              <Typography variant="h5">
                No tienes compras en tu carrito.
              </Typography>
            </Box>
            <Button variant="contained" component={Link} to="/">
              <AddIcon />
              Agregar nuevos productos
            </Button>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={8} md={8}>
              {stateCart != undefined &&
                stateCart.map((item, key) => (
                  <DetailItem product={item} key={key} />
                ))}
            </Grid>
            <Grid item xs={12} sm={2} md={4}>
              <Review cart={stateCart} />
            </Grid>
          </>
        )}
      </Grid>
    </Layout>
  );
};

export default Basket;
