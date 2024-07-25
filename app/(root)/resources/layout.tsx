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

  return (
    <main className="flex flex-col h-screen w-full font-inter">
      <section>
        {" "}
        <div className="navbar mt-6">
          <Navbar user={loggedIn} />
        </div>
      </section>
      <section>
        <div className="root-layout-mobile-nav">
          <MobileNav user={loggedIn} />
        </div>
      </section>
      {children}
    </main>
  );
}
