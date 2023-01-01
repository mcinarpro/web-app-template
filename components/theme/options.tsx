import { deepmerge } from "@mui/utils";
import { ThemeOptions } from "@mui/material";
import palette from "./palette";
import spacing from "./spacing";
import shadows from "./shadows";
import breakpoints from "./breakpoints";

const ThemeOptions = (): ThemeOptions => {
  const themeConfig = {
    palette: palette(),
    typography: {
      fontFamily: [
        "Inter",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    shadows: shadows(),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 10,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette["primary"],
      },
    },
  });
};

export default ThemeOptions;
