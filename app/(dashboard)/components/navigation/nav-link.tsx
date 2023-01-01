"use client";

import { ElementType, ReactNode } from "react";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled, useTheme } from "@mui/material/styles";

import { NavLinkType } from "../../types";
// import UserIcon from "@/layouts/components/UserIcon";
// import Translations from "@/layouts/components/Translations";

import { Box, BoxProps, Chip, ListItem, ListItemButton, ListItemButtonProps, Typography } from "@mui/material";
// import { handleURLQueries } from "@/lib/utils";

interface Props {
  item: NavLinkType;
//   navVisible?: boolean;
//   toggleNavVisibility: () => void;
}

const MenuNavLink = styled(ListItemButton)<ListItemButtonProps & { component?: ElementType; target?: "_blank" | undefined }>(
  ({ theme }) => ({
    width: "100%",
    borderRadius: 8,
    transition: "padding-left .25s ease-in-out",
    "&.active": {
      "&, &:hover": {
        backgroundColor: theme.palette.primary.light,
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

const NavLink = ({ item, 
    // navVisible, toggleNavVisibility 
}: Props) => {
  const theme = useTheme();

  const IconTag: ReactNode = item.icon;

  const conditionalIconColor = () => {
    return {
      color: parent ? theme.palette.text.secondary : theme.palette.text.primary,
    };
  };

  const isNavLinkActive = () => {
    // if (router.pathname === item.path 
    //   // || handleURLQueries(router, item.path)
    //   ) {
    //   return true;
    // } else {
      return false;
    // }
  };

  return <>{item.title}</>

  return (
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{
        mt: 1.5,
        transition: "padding .25s ease-in-out",
        px: parent ? "0 !important" : `3 !important`,
      }}
    >
      <MenuNavLink
        component={Link}
        as={Link}
        // href={item.path === undefined ? "/" : `${item.path}`}
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
            ...conditionalIconColor(),
            transition: "margin .25s ease-in-out",
            mr: 2,
            ...(parent ? { ml: 2, mr: 4 } : {}),
          }}
        >
          {/* <UserIcon
                icon={IconTag}
                componentType="vertical-menu"
                iconProps={{
                  sx: {
                    ...(!parent ? { fontSize: "1.5rem" } : { fontSize: "0.5rem" }),
                    ...(parent && item.icon ? { fontSize: "0.875rem" } : {}),
                  },
                }}
              /> */}
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
