"use client";

import { NavLinkType, NavItemsType } from "../../types";

import NavLink from "./nav-link";

interface Props {
  navVisible?: boolean;
  navItems?: NavItemsType;
}

const NavItems = (props: Props) => {
  const { navItems } = props;

  return (
    <>
      {navItems?.map((item: NavLinkType, index: number) => {
        return <NavLink key={index} item={item} />;
      })}
    </>
  );
};

export default NavItems;
