import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ProductList } from "../ProductList";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Box, Grid } from "@mui/material";
export interface CarouselInterface {}
const ProductCarousel: React.FC<CarouselInterface> = () => {
  const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  };

  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={false}
    ></Carousel>
  );
};

export default ProductCarousel;
