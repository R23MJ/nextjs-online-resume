import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MAIN_NAV_OPTIONS } from "@/lib/constants";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mb-5">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col items-center gap-10">
          {MAIN_NAV_OPTIONS.map((option) => {
            return (
              <li key={option.title}>
                <SheetClose asChild>
                  <Link href={option.href}>{option.title}</Link>
                </SheetClose>
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
