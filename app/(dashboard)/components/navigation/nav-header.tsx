import { Box, BoxProps, IconButton, Stack, styled, Typography, TypographyProps } from "@mui/material";
import { Close } from "mdi-material-ui";
import logo from "@/public/logo.png";
import Image from "next/image";

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

export default function NavHeader({ hidden, toggleNavVisibility }: Props) {
  const menuHeaderPaddingLeft = () => {
    return 5.5;
  };

  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: menuHeaderPaddingLeft() }}>
      <Stack sx={{ p: 4, my:4, justifyContent: "center", alignItems: "center" }}>
        <Image src={logo} alt="Logo" />
      </Stack>

      {hidden && (
        <IconButton disableRipple disableFocusRipple onClick={toggleNavVisibility} sx={{ p: 0, backgroundColor: "transparent !important" }}>
          <Close fontSize="small" />
        </IconButton>
      )}
    </MenuHeaderWrapper>
  );
}
