import React, { Children } from "react";
import theme from "@/global/MainTheme";
import { Button, Checkbox, Grid } from "@mui/material";

import styles from "../../styles/Layout.module.css";
import { Navbar } from "../Navbar";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Footer } from "../Footer";
export interface LayoutInterface {
  children: React.ReactNode | null;
  route?: string;
  title?: string;
}

const Layout: React.FC<LayoutInterface> = ({
  children,
  route,
  title,
}: LayoutInterface) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Navbar /> */}
        <Grid className={styles.app_wrapper}>{children}</Grid>
        {/* <Grid>{children}</Grid> */}
        {/*       <Footer /> */}
      </ThemeProvider>
    </>
  );
};

export default Layout;
