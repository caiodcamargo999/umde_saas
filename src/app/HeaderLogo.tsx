"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HeaderLogo() {
  const pathname = usePathname();
  const isInterno = pathname.startsWith("/interno");
  if (isInterno) return null;
  return (
    <header className="w-full flex justify-center items-center pt-6 pb-4 bg-transparent">
      <div className="flex items-center justify-center w-full max-w-xs md:max-w-md">
        <Image src="/logo/umde-logo.png" alt="Logo Umdê" width={160} height={44} priority className="w-full h-auto max-w-[160px] md:max-w-[220px]" />
      </div>
    </header>
  );
} 