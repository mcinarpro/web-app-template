import { ReactNode } from "react";

export type ThemeColor = "primary" | "secondary" | "error" | "warning" | "info" | "success";

export type NavLinkType = {
  icon?: any;
  path?: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  badgeColor?: "default" | "primary" | "secondary" | "success" | "error" | "warning" | "info";
};

export type NavGroupType = {
  icon?: any;
  title: string;
  action?: string;
  subject?: string;
  badgeContent?: string;
  children?: (NavGroupType | NavLinkType)[];
  badgeColor?: "default" | "primary" | "secondary" | "success" | "error" | "warning" | "info";
};

export type NavSectionTitleType = {
  action?: string;
  subject?: string;
  sectionTitle: string;
};

export type NavItemsType = (NavLinkType | NavGroupType | NavSectionTitleType)[];

export type LayoutProps = {
  hidden: boolean;
  children: ReactNode;
  navItems?: NavItemsType;
  footerContent?: (props?: any) => ReactNode;
  appBarContent?: (props?: any) => ReactNode;
};

export type BlankLayoutProps = {
  children: React.ReactNode;
};