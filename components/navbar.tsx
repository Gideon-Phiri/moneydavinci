"use client";

import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";
import { userLinks } from "@/constants";
import { Separator } from "@/components/ui/separator";

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

        <div className="flex items-center space-x-6  ">
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
          {/* user image the shows ontop of the navbar that has a sheet when clicked*/}
          {/* ***********************************************************************/}
          {/* ***********************************************************************/}
          <Sheet>
            <SheetTrigger className="z-30">
              <div className="profile pb-8 ">
                <div className="profile-img">
                  <span className=" text-2xl font-bold text-white cursor-pointer">
                    {user.firstName[0]}
                  </span>
                </div>
              </div>
            </SheetTrigger>

            <SheetContent
              side="float"
              className="border-none bg-white profile-sheetcontent max-custom:hidden"
            >
              {/* sheetheader */}
              <SheetHeader>
                <div className="flex">
                  <Link href="/profile/uploadimage">
                    <div className="profile-img ">
                      <span className=" profile-img text-2xl font-bold text-white cursor-pointer">
                        {user.firstName[0]}
                      </span>
                    </div>
                  </Link>
                  <div className="pl-10 pt-1">
                    <Link href="/profile">
                      <h1 className="profile-name hover:text-blue-900">
                        {user.firstName} {user.lastName}
                      </h1>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="profile-email">{user.email}</p>
                </div>
              </SheetHeader>
              <nav className="flex h-auto flex-col gap-3 pt-6 text-black-2">
                {/* Navigation links */}
                {userLinks.map((item) => {
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className="hover:text-blue-700 underline"
                      >
                        <p>{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <Separator className="px-2 pt-20 text-cyan-800 border-b border-gray-400" />
              {/**sheetfooter signout button**/}
              <SheetFooter>
                <div>
                  <p className="text-left pt-2">FOOTER CONTENT HERE //</p>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          {/* ***********************************************************************/}
          {/* ***********************************************************************/}
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
