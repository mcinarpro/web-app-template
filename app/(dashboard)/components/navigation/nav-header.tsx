"use client";

import { Box, BoxProps, IconButton, styled, Typography, TypographyProps } from "@mui/material";
import { Close } from "mdi-material-ui";


interface Props {
  hidden: boolean;
  toggleNavVisibility: () => void;
}

const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingRight: theme.spacing(4),
  justifyContent: "space-between",
  transition: "padding .25s ease-in-out",
  minHeight: theme.mixins.toolbar.minHeight,
}));

const HeaderTitle = styled(Typography)<TypographyProps>({
  fontWeight: 700,
  lineHeight: 1.2,
  transition: "opacity .25s ease-in-out, margin .25s ease-in-out",
});

export default function NavHeader({ hidden, toggleNavVisibility } : Props) {
  const menuHeaderPaddingLeft = () => {
    return 5.5;
  };

  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: menuHeaderPaddingLeft() }}>
      <HeaderTitle variant="h6" sx={{ ml: 2 }}>
        100comptable
      </HeaderTitle>
      
      {hidden && (
        <IconButton disableRipple disableFocusRipple onClick={toggleNavVisibility} sx={{ p: 0, backgroundColor: "transparent !important" }}>
          <Close fontSize="small" />
        </IconButton>
      )}
    </MenuHeaderWrapper>
  );
}
