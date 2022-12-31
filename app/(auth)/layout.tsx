import "@/styles/globals.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="grid min-h-screen grid-cols-2">{children}</div>
}