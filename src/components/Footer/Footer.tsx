import { Grid, Typography } from "@mui/material";
import React from "react";
export interface FooterInterface {}

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer: React.FC<FooterInterface> = () => {
  return (
    <>
      <Grid container sx={{ padding: "80px" }}>
        <Grid item xs={3} sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Productos
          </Typography>
          <Typography>Tarjetas de credito</Typography>
          <Typography>Tarjetas de débito</Typography>
          <Typography>credito hipotecario</Typography>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Productos
          </Typography>
          <Typography>Tarjetas de credito</Typography>
          <Typography>Tarjetas de débito</Typography>
          <Typography>credito hipotecario</Typography>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Productos
          </Typography>
          <Typography>Tarjetas de credito</Typography>
          <Typography>Tarjetas de débito</Typography>
          <Typography>credito hipotecario</Typography>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Carrito Compras
          </Typography>
          <Typography>Avenida Paseo de torres 543</Typography>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          position: "relative",
          width: "100%",
          left: "0",
          bottom: "0",
          padding: "0% 10% 5% 10%",
        }}
        pt={5}
      >
        <Grid item xs={6} sx={{ textAlign: "left" }}>
          <Typography>
            2022. Carrito Compras. Todos los derechos reservados
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Typography>Termino y condicionesAviso de privacidad</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
