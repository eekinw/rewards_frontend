import "../styles/globals.css";
import type { Metadata } from "next";
import NavMenu from "./NavMenu";

export const metadata: Metadata = {
  title: "Rewards Admin",
  description: "Rewards Page with Admin Access",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
