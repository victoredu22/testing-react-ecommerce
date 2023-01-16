import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Product } from "@/interface/product";

export interface ReviewInterface {
  cart: Product[];
}

const Review: React.FC<ReviewInterface> = ({ cart }) => {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    setPrice(
      cart
        .map((item) => Number(item.price) * item.inCart)
        .reduce((a, b) => a + b, 0)
    );
  }, [cart]);

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        Resumen Pedidos
      </Typography>
      <hr></hr>
      <Box display="flex" justifyContent="space-between" padding={1}>
        <Box>Subtotal: </Box>
        <Box display="flex">
          <Typography component="span">$</Typography>
          <Typography>{price}</Typography>{" "}
        </Box>
      </Box>
      <hr></hr>
      <Box display="flex" justifyContent="space-between" padding={1}>
        <Typography>Envio</Typography>
        <Typography>Gratis</Typography>
      </Box>
      <hr></hr>
      <Box display="flex" justifyContent="space-between" padding={1}>
        <Typography>Total</Typography>
        <Typography>{"$" + price}</Typography>
      </Box>
      <Button variant="contained" fullWidth>
        Ir al pago
      </Button>
    </Box>
  );
};

export default Review;
