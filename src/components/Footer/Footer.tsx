import { Grid, Typography } from "@mui/material";
import React from "react";
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <>
      <Grid container sx={{ padding: "80px" }}>
        <Grid item xs={3}>
          <Typography>Title</Typography>
          <Typography>item 1</Typography>
          <Typography>item 2</Typography>
          <Typography>item 3</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Title</Typography>
          <Typography>item 1</Typography>
          <Typography>item 2</Typography>
          <Typography>item 3</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Title</Typography>
          <Typography>item 1</Typography>
          <Typography>item 2</Typography>
          <Typography>item 3</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Title</Typography>
          <Typography>item 1</Typography>
          <Typography>item 2</Typography>
          <Typography>item 3</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ position: "relative", width: "100%", left: "0", bottom: "0" }}
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
