"use client";

import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import MuiToolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { hexToRGBA } from "@/lib/utils";
import { Box, IconButton, useScrollTrigger } from "@mui/material";
import MenuIcon from "mdi-material-ui/Menu";
import UserDropdown from "../shared/user-dropdown";

interface Props {
  hidden: boolean;
  toggleNavVisibility: () => void;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: "none",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 6),
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: "100%",
  padding: "0 !important",
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition: "padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out",
}));

const LayoutAppBar = ({ hidden, toggleNavVisibility }: Props) => {
  const theme = useTheme();
  const scrollTrigger = useScrollTrigger({ threshold: 0, disableHysteresis: true })

  const appBarFixedStyles = () => {
    return {
      px: `${theme.spacing(6)} !important`,
      boxShadow: 3,
      backgroundColor: hexToRGBA(theme.palette.background.paper, 1),
      ...({ border: `1px solid ${theme.palette.divider}`, borderTopWidth: 0 })
    }
  }

  return (
    <AppBar elevation={0} color="default" className="layout-navbar" position={"sticky"}>
      <Toolbar
        className="navbar-content-container"
        sx={{
          ...(scrollTrigger && { ...appBarFixedStyles() }),
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box className="actions-left" sx={{ mr: 2, display: "flex", alignItems: "center" }}>
            {hidden ? (
              <IconButton color="inherit" sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
                <MenuIcon />
              </IconButton>
            ) : null}
          </Box>
          <Box className="actions-right" sx={{ display: "flex", alignItems: "center" }}>
            <UserDropdown />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default LayoutAppBar;
