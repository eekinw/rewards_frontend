import "styles/globals.css";
import type { Metadata } from "next";
import NavMenu from "./NavMenu";
import SideBar from "./SideBar";

export const metadata: Metadata = {
  title: "Rewards Admin Page",
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
        <SideBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
