import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Maggie",
    lastName: "Phiri",
    email: "contact@moneydavinci.com",
  };

  return <main></main>;
}
