import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { deleteCart, updateStock } from "@/redux/states/cart";
import { Product } from "@/interface/product";
export interface DetailsItemInterface {
  product: Product;
}

const DetailsItem: React.FC<DetailsItemInterface> = ({ product }) => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState<number>(0);
  const stateCart = useSelector((store: AppStore) => store.cart);

  const handleStock = (type: string, product: Product) => {
    dispatch(updateStock({ type, idProduct: product.id }));
  };

  //ELIMINAR PRODUCTO EN LOCALSTORAGE
  useEffect(() => {
    setInCart(product.inCart);
    if (product.inCart === 0) {
      const itemsLocal = JSON.parse(localStorage.getItem("cart") as "String");

      const dataLocal = itemsLocal.filter(
        (item: Product) => item.id != product.id
      );
      localStorage.setItem("cart", JSON.stringify(dataLocal));
      dispatch(deleteCart(product.id));
      return;
    }
  }, [product]);

  useEffect(() => {
    if (product.inCart > 0) {
      const itemsLocal = JSON.parse(localStorage.getItem("cart") as "String");

      const dataLocal = stateCart.map((item: Product) =>
        item.id === product.id ? { ...item, inCart: inCart } : { ...item }
      );

      localStorage.setItem("cart", JSON.stringify(dataLocal));
    }
  }, [inCart]);

  return (
    <>
      {product.inCart > 0 && (
        <Box
          sx={{
            display: "flex",
            flex: "1",
            marginRight: { xs: "0%", md: "17%" },
            paddingBottom: "10px",
            paddingTop: "10px",
            //borderTop: product.length > 0 ? "1px solid #C0C1C2" : "none",
          }}
        >
          <Box
            sx={{
              flex: "0 1 auto",
              marginTop: "20px",
            }}
          >
            <img width="" src={product.picture.src} />
          </Box>
          <Box
            sx={{
              flex: 2,
            }}
          >
            <Typography sx={{ padding: "5px", fontSize: "1.25rem" }}>
              {product.title}
            </Typography>
            <Typography sx={{ padding: "5px", fontSize: "1rem" }}>
              {product.description}
            </Typography>
            <Typography sx={{ padding: "5px", fontSize: "1rem" }}>
              $ {product.price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "5px",
              }}
            >
              <LocalShippingIcon />
              <Typography sx={{ fontSize: "1rem", textAlign: "2px" }}>
                Envio totalmente gratis.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                onClick={() => {
                  handleStock("subtract", product);
                }}
              >
                {" "}
                <MinimizeIcon
                  sx={{
                    fontSize: "25px",
                    marginBottom: "15px",
                    cursor: "pointer",
                  }}
                />
              </Button>
              <Typography sx={{ marginLeft: "10px", marginRight: "10px" }}>
                {inCart}
              </Typography>
              <Button
                variant="text"
                onClick={() => {
                  handleStock("add", product);
                }}
              >
                <AddIcon
                  sx={{
                    fontSize: "25px",
                    marginBottom: "0px",
                    cursor: "pointer",
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DetailsItem;
