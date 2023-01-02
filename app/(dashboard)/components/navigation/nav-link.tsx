import { ElementType, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
// import UserIcon from "@/layouts/components/UserIcon";
// import Translations from "@/layouts/components/Translations";

import { Box, BoxProps, ListItem, ListItemIcon, ListItemButton, ListItemButtonProps, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { NavLinkType } from "@/types/layout";
import { usePathname, useRouter } from "next/navigation";
// import { handleURLQueries } from "@/lib/utils";

interface Props {
  item: NavLinkType;
  navVisible?: boolean;
  toggleNavVisibility: () => void;
}

const MenuNavLink = styled(ListItemButton)<ListItemButtonProps & { component?: ElementType; href: string; target?: "_blank" | undefined }>(
  ({ theme }) => ({
    width: "100%",
    borderRadius: 8,
    transition: "padding-left .25s ease-in-out",
    "&.active": {
      "&, &:hover": {
        backgroundColor: theme.palette.primary.light,
        "&.Mui-focusVisible": {
          backgroundColor: theme.palette.primary.main,
        },
      },
      "& .MuiTypography-root": {
        fontWeight: 500,
        color: `${theme.palette.common.white} !important`,
      },
      "& .MuiListItemIcon-root": {
        color: `${theme.palette.common.white} !important`,
      },
    },
  })
);

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  overflow: "hidden",
});

const NavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  const theme = useTheme();
  const pathname = usePathname();

  const IconTag = item.icon;

  const isNavLinkActive = () => {
    if (
      pathname === item.path
      //   // || handleURLQueries(router, item.path)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{
        mt: 1.5,
        transition: "padding .25s ease-in-out",
        px: `${theme.spacing(3)} !important`,
      }}
    >
      <MenuNavLink
        component={Link}
        href={item.path === undefined ? "/" : `${item.path}`}
        className={isNavLinkActive() ? "active" : ""}
        // onClick={(e) => {
        //   if (item.path === undefined) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //   }
        //   if (navVisible) {
        //     toggleNavVisibility();
        //   }
        // }}
        sx={{
          py: 2.25,
          ...(item.disabled ? { pointerEvents: "none" } : { cursor: "pointer" }),
          pr: 3,
          pl: 4,
        }}
      >
        <ListItemIcon
        
        
        sx={{
          color: theme.palette.text.primary,
          transition: 'margin .25s ease-in-out',
          mr: 2,
          '& svg': {
            fontSize: '1.5rem'
        }}
      }
        
        >
          <IconTag />
        </ListItemIcon>

        <MenuItemTextMetaWrapper
          sx={{
            ...{ opacity: 1 },
          }}
        >
          <Typography noWrap>
            {/* <Translations text={item.title} /> */}
            {item.title}
          </Typography>
        </MenuItemTextMetaWrapper>
      </MenuNavLink>
    </ListItem>
  );
};

export default NavLink;
