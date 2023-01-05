import React, { useEffect } from "react";
import { Button, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Product } from "@/interface/product";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "@/redux/states/cart";
import { AppStore } from "@/redux/store";

export interface ButtonShoppingInterface {
  product: Product;
}

const ButtonShopping: React.FC<ButtonShoppingInterface> = (product) => {
  const dispatch = useDispatch();
  const stateCart = useSelector((store: AppStore) => store.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(stateCart));
  }, [stateCart]);

  const handleAddCart = () => {
    dispatch(addCart(product));
  };

  return (
    <Button
      onClick={handleAddCart}
      variant="outlined"
      sx={{ color: "#6c757d" }}
    >
      <ShoppingCartIcon color="primary" />
      Comprar
    </Button>
  );
};

export default ButtonShopping;
