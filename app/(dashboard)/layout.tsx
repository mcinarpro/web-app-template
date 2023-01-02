"use client";

import { Box, BoxProps, styled, Theme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Navigation from "./components/navigation";
import { CalendarBlankOutline, EmailOutline, MessageOutline } from "mdi-material-ui";
import AppBar from "./components/app-bar";
import { NavItemsType } from "@/types/layout";

const navigation = (): NavItemsType => {
  return [
    {
      title: "Tax Returns",
      icon: EmailOutline,
      path: "/tax-returns",
    },
    {
      title: "Chat",
      icon: MessageOutline,
      path: "/invoicing",
    },
    {
      title: "Calendar",
      icon: CalendarBlankOutline,
      path: "/apps/calendar",
    },
  ];
};

const LayoutWrapper = styled("div")({
  height: "100%",
  display: "flex",
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  transition: "padding .25s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export default function LayoutUser({ children }: { children?: React.ReactNode }) {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <>
      <LayoutWrapper>
        <Navigation
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
          hidden={hidden}
          navItems={navigation()}
        />
        <MainContentWrapper className="layout-content-wrapper">
          <AppBar hidden={hidden} toggleNavVisibility={toggleNavVisibility} />
          <ContentWrapper className="layout-page-content">{children}</ContentWrapper>
          {/* <Footer {...props} /> */}
          {/* Portal for React Datepicker  */}
          {/* <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id="react-datepicker-portal"></Box>
          </DatePickerWrapper> */}
        </MainContentWrapper>
      </LayoutWrapper>
    </>
  );
}
