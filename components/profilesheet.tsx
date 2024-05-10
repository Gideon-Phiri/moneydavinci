"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { ProfileNavProps } from "../types";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Profilesheet: React.FC<ProfileNavProps> = ({ user }) => {
    const pathname = usePathname();

    return (
    )
}
    


