import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import AwsSliderStyles from "react-awesome-slider/src/styles.scss";
import { Carousel } from "react-responsive-carousel";

import { ProductList } from "../ProductList";

export interface SmartwatchCarouselInterface {}

const SmartwatchCarousel: React.FC<SmartwatchCarouselInterface> = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={false}
    >
      {/*  <ProductList /> */}
    </Carousel>
  );
};

export default SmartwatchCarousel;
