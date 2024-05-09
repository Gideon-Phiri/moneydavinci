"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { MobileNavProps } from "./types";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm w-screen flex flex-col">
      <nav className="flex items-center justify-between px-4 h-16">
        {/* Hamburger menu (left) */}
        <Sheet>
          <SheetTrigger className="z-30">
            <Image
              src="/icons/hamburger.svg"
              width={24}
              height={24}
              alt="menu"
            />
          </SheetTrigger>

          {/******************************* */}
          {/******************************* */}
          <SheetContent side="left" className="border-none bg-white">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-3 pt-6 text-white">
                {/* Navigation links */}
                {navbarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        {/* Link content (icon + text) */}
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn(
                            "text-16 font-semibold text-black-2 hover:text-blue-700",
                            { "text-blue-700 underline": isActive }
                          )}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </SheetContent>

          {/******************************* */}
          {/******************************* */}
        </Sheet>
        {/* Logo (centered) */}
        <div className="flex-grow justify-center">
          {" "}
          {/* Center the logo for small screens */}
          <Link href="/">
            <div className="flex items-center justify-center">
              {" "}
              {/* Center the logo */}
              <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            </div>
          </Link>
        </div>
        {/* Notification profile and Ai icons (right) */}
        <div className="flex items-center space-x-4">
          {/* Notification icon */}
          <Link href="/notifications">
            <Image
              src="/icons/alert_bell_icon_2.svg"
              width={24}
              height={24}
              alt="notification"
            />
          </Link>
          {/* Profile icon */}
          <Link href="/profile">
            <Image
              src="/icons/circle_user_blue.svg"
              width={24}
              height={24}
              alt="profile"
            />
          </Link>
          {/* Ai Profile icon */}
          <Link href="/profile">
            <Image
              src="/icons/circle_user_icon.svg"
              width={24}
              height={24}
              alt="profile"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
