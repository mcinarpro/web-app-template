export type ThemeColor = "primary" | "secondary" | "error" | "warning" | "info" | "success";

export type NavLinkType = {
  icon?: any;
  path?: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
};

export type NavItemsType = NavLinkType[];

export type BlankLayoutProps = {
  children: React.ReactNode;
};
