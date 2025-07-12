"use client";
import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";

export default function InternoLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0D1A3A] text-white">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1 lg:ml-32">
        <Topbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 w-full max-w-full px-4 md:px-8 xl:px-16 py-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}