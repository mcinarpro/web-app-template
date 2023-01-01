"use client";

import { ReactNode, useRef, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, BoxProps, List } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { hexToRGBA } from "@/lib/utils";
import Drawer from "./drawer";
import NavHeader from "./nav-header";
import NavItems from "./nav-items";
import { NavItemsType } from "app/(dashboard)/types";

interface Props {
  hidden: boolean;
  children: ReactNode;
  navVisible: boolean;
  toggleNavVisibility: () => void;
  setNavVisible: (value: boolean) => void;
  navItems?: NavItemsType;
}

const Navigation = (props: Props) => {
  const { hidden } = props;
  const shadowRef = useRef(null);
  const theme = useTheme();

  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect;

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect();

        return { ...original, height: Math.floor(original.height) };
      };
    }
  };

  const scrollMenu = (container: any) => {
    container = hidden ? container.target : container;
    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains("d-block")) {
        // @ts-ignore
        shadowRef.current.classList.add("d-block");
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove("d-block");
    }
  };

  const shadowBgColor = () => {
    return `linear-gradient(${theme.palette.background.default} 5%,${hexToRGBA(theme.palette.background.default, 0.85)} 30%,${hexToRGBA(
      theme.palette.background.default,
      0.5
    )} 65%,${hexToRGBA(theme.palette.background.default, 0.3)} 75%,transparent)`;
  };

  const ScrollWrapper = hidden ? Box : PerfectScrollbar;

  return (
    <Drawer {...props}>
      <NavHeader {...props}/>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        {/* @ts-ignore */}
        <ScrollWrapper
          containerRef={(ref: any) => handleInfiniteScroll(ref)}
          {...(hidden
            ? {
                onScroll: (container: any) => scrollMenu(container),
                sx: { height: "100%", overflowY: "auto", overflowX: "hidden" },
              }
            : {
                options: { wheelPropagation: false },
                onScrollY: (container: any) => scrollMenu(container),
              })}
        >
          <List className="nav-items" sx={{ pt: 0, "& > :first-child": { mt: "0" } }}>
            <NavItems
              {...props}
            />
          </List>
        </ScrollWrapper>
      </Box>
    </Drawer>
  );
};

export default Navigation;
