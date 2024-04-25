import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/reduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WoundCare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
