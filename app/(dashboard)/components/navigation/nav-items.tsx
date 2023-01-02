import { NavItemsType, NavLinkType } from "@/types/layout";
import NavLink from "./nav-link";

interface Props {
  navVisible?: boolean;
  toggleNavVisibility: () => void;
  navItems?: NavItemsType;
}

const NavItems = (props: Props) => {
  const { navItems } = props;

  console.log({navItems})

  return (
    <>
      {navItems?.map((item: NavLinkType, index: number) => {
        return <NavLink key={index} item={item} {...props} />;
      })}
    </>
  );
};

export default NavItems;
