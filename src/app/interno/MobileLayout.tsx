"use client";
import MobileNavigation from "./MobileNavigation";

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0D1A3A] text-white min-h-screen">
      <MobileNavigation />
      <main className="w-full max-w-full p-4 pt-20 overflow-x-hidden">{children}</main>
    </div>
  );
}
