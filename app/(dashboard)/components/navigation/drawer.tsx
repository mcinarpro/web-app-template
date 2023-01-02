import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiSwipeableDrawer, { SwipeableDrawerProps } from "@mui/material/SwipeableDrawer";

interface Props {
  hidden: boolean;
  navVisible: boolean;
  setNavVisible: (value: boolean) => void;
  children: React.ReactNode;
}

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflowX: "hidden",
  transition: "width .25s ease-in-out",
  "& ul": {
    listStyle: "none",
  },
  "& .MuiListItem-gutters": {
    paddingLeft: 4,
    paddingRight: 4,
  },
  "& .MuiDrawer-paper": {
    left: "unset",
    right: "unset",
    overflowX: "hidden",
    transition: "width .25s ease-in-out, box-shadow .25s ease-in-out",
  },
});

const Drawer = (props: Props) => {
  const { hidden, children, navVisible, setNavVisible } = props;
  const theme = useTheme();
  const [variant, setVariant] = React.useState<"temporary" | "permanent" | "persistent">("temporary");
  const navWidth = 260;

  React.useEffect(() => {
    setVariant(hidden ? "temporary" : "permanent");
  }, [hidden]);

  // Drawer Props for Mobile & Tablet screens
  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true, // Better open performance on mobile.
    },
  };

  // Drawer Props for Desktop screens
  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => null,
    onMouseEnter: () => null,
    onMouseLeave: () => null,
  };

  return (
    <SwipeableDrawer
      variant={variant}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      sx={{
        width: navWidth,
      }}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.background.default,
          width: navWidth,
          borderRight: 0,
        },
      }}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default Drawer;
