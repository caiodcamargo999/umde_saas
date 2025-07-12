"use client";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

export default function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0D1A3A] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-32">
        <Topbar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
