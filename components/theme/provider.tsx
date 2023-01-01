/**
 * Wraps the [MUI](https://mui.com/) ThemeProvider as a client-side component.
 *
 * Currently MUI/Emotion does not support Next.js 13 /app directory:
 *   https://github.com/mui/material-ui/issues/34905
 *
 * This component may need to change when support is added.
 */
"use client";

import React from "react";
import { createTheme, CssBaseline, responsiveFontSizes, Theme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import ThemeOptions from "./options";
import overrides from "./overrides";
import typography from "./typography";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeConfig = ThemeOptions();

  let theme = createTheme(themeConfig);

  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  });

  theme = responsiveFontSizes(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
