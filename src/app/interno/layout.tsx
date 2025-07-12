"use client";
import { useMediaQuery } from "../components/useMediaQuery";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default function InternoLayout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return <DesktopLayout>{children}</DesktopLayout>;
  }

  return <MobileLayout>{children}</MobileLayout>;
} 