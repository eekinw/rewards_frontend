import "styles/globals.css";
import type { Metadata } from "next";
import NavMenu from "../components/AdminNav";
import SideBar from "../components/AdminSideBar";

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
        <nav className="fixed top-0 left-0 right-0 ml-[220px] py-6 px-2">
          <NavMenu />
        </nav>

        <div className="fixed top-0 left-0 bottom-0 w-[220px] p-4 bg-[#F7F7F7] border-r border-gray-200 overflow-y-auto">
          <div className="mt-[60px] p-5">
            <SideBar />
          </div>
        </div>

        <main className="fixed left-[250px] top-[100px] w-3/4">{children}</main>
      </body>
    </html>
  );
}
