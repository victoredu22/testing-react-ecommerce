import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [cartLength, setCartLength] = useState<number>(0);

  const stateCart = useSelector((store: AppStore) => store.cart);

  useEffect(() => {
    setCartLength(stateCart.filter((cart) => cart.inCart > 0 && cart).length);
  }, [stateCart]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          boxShadow: "unset",
          background: "#F5F5F5",
          padding: "15px",
        }}
      >
        <Toolbar>
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Typography variant="h6" fontWeight="bold" color="black">
              Carrito de compras
              <Typography
                component="span"
                color="primary"
                sx={{ fontSize: "1.25rem", fontWeight: "700" }}
              >
                .
              </Typography>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />

          <Link
            to={"/compras"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                marginLeft: "10px",
                color: "#005BD2",
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: "20px" }} />
              <Typography
                sx={{
                  color: "#212529",
                  display: { xs: "none", display: "block" },
                }}
              >
                Mi carrito ({cartLength})
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginLeft: "10px",
              color: "#005BD2",
            }}
          >
            <PersonIcon sx={{ fontSize: "20px" }} />
            <Typography
              sx={{ color: "#212529", display: { xs: "none", md: "block" } }}
            >
              Iniciar sesion
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
