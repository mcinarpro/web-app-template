import LayoutUser from "./layout-user";

export default async function DashboardLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <LayoutUser>{children}</LayoutUser>
    </>
  );
}
