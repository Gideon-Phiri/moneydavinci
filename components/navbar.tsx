"use client";

import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ user }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <header>
      <nav className=" flex text-nowrap h-auto min-w-full px-6 py-3 bg-white text-black-2 justify-between shadow-sm">
        {/* Logo section */}
        <Link href="/" className=" cursor-pointer flex items-center gap-6">
          <Image
            src="/icons/logo.svg"
            width={40} // Increase logo size for prominence
            height={40}
            alt="Money da Vinci logo"
            className="size-[30px]"
          />
          <h1 className="navbar-logo hover:text-blue-700">Money da Vinci</h1>
        </Link>

        <div className="flex items-center space-x-4 text-base font-medium max-md:hidden">
          {/* Right-side links (hidden on large screens) */}
          {navbarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  "px-4 py-2 rounded-md hover:text-blue-700", // Apply hover styles
                  { "text-blue-700 underline": isActive } // Active state styles
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4  ">
          {" "}
          {/* Right-side icons (shown on large screens) */}
          <Link href="/notifications" className="flex items-center space-x-4">
            <Image
              src="/icons/alert_bell_icon_2.svg"
              width={40}
              height={40}
              alt="Money da Vinci alert icon"
              className="size-[30px]"
            />
          </Link>
          <Link href="/notifications" className="flex items-center space-x-4">
            <Image
              src="/icons/circle_user_blue.svg"
              width={40}
              height={40}
              alt="Money da Vinci user icon"
              className="size-[30px]"
            />
          </Link>
          <Link href="/notifications" className="flex items-center space-x-4">
            <Image
              src="/icons/alert_bell_icon_2.svg"
              width={40}
              height={40}
              alt="Money da Vinci alert icon"
              className="size-[30px]"
            />
          </Link>
          {/* Add more links here for other right-side elements */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
