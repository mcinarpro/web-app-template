import ThemeProvider from "@/components/theme/provider";
import "./globals.css";
import 'react-perfect-scrollbar/dist/css/styles.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
