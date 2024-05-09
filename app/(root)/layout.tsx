import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Gideon", lastName: "Gideon" };

  return (
    <main className="flex flex-col h-screen w-full font-inter">
      <section>
        {" "}
        <div className="navbar">
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
