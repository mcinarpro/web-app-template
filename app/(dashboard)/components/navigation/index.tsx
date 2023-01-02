import * as React from "react";
import { Box, List, useTheme } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { hexToRGBA } from "@/lib/utils";
import Drawer from "./drawer";
import NavHeader from "./nav-header";
import NavItems from "./nav-items";
import { NavItemsType } from "@/types/layout";

interface Props {
  hidden: boolean;
  navVisible: boolean;
  toggleNavVisibility: () => void;
  setNavVisible: (value: boolean) => void;
  navItems?: NavItemsType;
}

const Navigation = (props: Props) => {
  const { hidden } = props;
  const shadowRef = React.useRef(null);
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
