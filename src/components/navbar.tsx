"use client";

import Link from "next/link";
import React from "react";
import CTA from "./cta";
import { MobileMenu } from "./mobile-menu";
import { MAIN_NAV_OPTIONS } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-background z-10 sticky top-0 w-full p-5 flex justify-center items-baseline border-b border-primary">
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <ul className="hidden md:flex w-[50vw] flex-1 justify-center gap-20">
        {MAIN_NAV_OPTIONS.map((option) => {
          return (
            <li key={option.title} className="relative transition">
              <Link href={option.href}>{option.title}</Link>
              {pathname === option.href && (
                <div className="h-[2px] bg-primary" />
              )}
            </li>
          );
        })}
      </ul>
      <div className="ml-auto">
        <CTA />
      </div>
    </nav>
  );
}
