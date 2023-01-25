import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0063a3",
    },
    secondary: {
      main: "#26A456",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontFamily: "Inter",
        },
      },
    },
  },
});

const GlobalThemeOverride: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export { GlobalThemeOverride as AppThemeProvider };
