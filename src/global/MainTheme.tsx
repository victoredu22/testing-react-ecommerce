import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: `#005BD2`,
    },
    secondary: {
      main: `#F5F5F5`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: `none`,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
