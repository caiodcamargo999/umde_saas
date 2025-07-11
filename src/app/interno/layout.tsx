"use client";
import Sidebar from "./sidebar/Sidebar";

export default function InternoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0D1A3A] text-white">
      <Sidebar />
      <main className="flex-1 p-2 sm:p-4 md:p-6 lg:p-8 bg-[#0D1A3A] min-h-screen overflow-x-hidden pb-28 md:pb-8">{children}</main>
    </div>
  );
} 